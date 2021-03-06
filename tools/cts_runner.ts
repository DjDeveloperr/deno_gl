import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.21-alpha/deno-dom-wasm.ts";

const CTS_PATH = new URL(
  "../WebGL/conformance-suites/2.0.0/conformance2/00_test_list.txt",
  import.meta.url,
);

const DENO_GL_IMPORT = new URL("../mod.ts", import.meta.url).toString();

async function* getTests(path: URL): AsyncIterableIterator<URL> {
  const testList = await Deno.readTextFile(path);
  for (const line of testList.replaceAll("\r\n", "\n").split("\n")) {
    if (line.startsWith("//")) continue;
    const entry = line.split(" ").pop()!;
    if (entry.endsWith(".txt")) {
      for await (const url of getTests(new URL("./" + entry, path))) {
        yield url;
      }
    } else if (entry.endsWith(".html")) {
      yield new URL("./" + entry, path);
    }
  }
}

function cov(total: number, passed: number, failed: number, skipped: number) {
  return `${passed}/${total} passed, ${failed} failed, ${skipped} skipped, ${((passed / total) * 100).toFixed(2)}% coverage`;
}

const groups = new Map<string, Set<[string, URL]>>();

for await (const test of getTests(CTS_PATH)) {
  let name = test.href.split("conformance2/").pop()!;
  name = name.substring(0, name.length - 5);

  const [groupName, ...parts] = name.split("/");
  const group = groups.get(groupName) ?? new Set();
  group.add([parts.join("/"), test]);
  groups.set(groupName, group);
}

const parser = new DOMParser();
const importCache = new Map<string, string>();

async function tryImport(url: URL) {
  const exists = importCache.get(url.toString());
  if (exists) return exists;
  const code = await Deno.readTextFile(url);
  importCache.set(url.toString(), code);
  return code;
}

await Deno.remove(new URL("./test", import.meta.url), { recursive: true })
  .catch(() => {});
await Deno.mkdir(new URL("./test", import.meta.url));

const GREEN = "#0DBC79";

let total = 0;
let passed = 0;
let failed = 0;
let skipped = 0;

for (const [group, tests] of groups) {
  if (Deno.args.length !== 0 && !Deno.args.includes(group)) {
    continue;
  }

  let groupTotal = 0;
  let groupPassed = 0;
  let groupFailed = 0;
  let groupSkipped = 0;

  console.log(`%cgroup %c${group}`, `color: ${GREEN}`, "");
  for (const [name, url] of tests) {
    console.log(`  %ctest %c${name}`, `color: ${GREEN}`, "");
    const html = await Deno.readTextFile(url);
    const document = parser.parseFromString(html, "text/html")!;
    let code = "// NOTE: Auto-generated by Deno GL CTS runner\n\n";

    code += `import "${DENO_GL_IMPORT}";\n`;
    code += `import "https://deno.land/x/xhr@0.1.2/mod.ts";\n\n`;

    code += `globalThis.LOCATION = new URL(${JSON.stringify(url.href)});\n`;
    code += `globalThis.HEADLESS = true;\n`;
    code += `globalThis.PASSED = 0;\n`;
    code += `globalThis.FAILED = 0;\n`;
    code += `globalThis.SKIPPED = 0;\n`;
    code += `globalThis.GLSLConformanceTester = {};\n`;
    code += `globalThis.successfullyParsed = true;\n`;
    code += `globalThis.sourceSubRectangleString = "";\n`;
    code += "globalThis.parent = {};\n";
    code += `globalThis.parent.webglTestHarness = {};\n`;
    code +=
      `globalThis.parent.webglTestHarness.reportResults = (path, success, msg, skipped = false) => {\n`;
    code += `  if (skipped) {\n`;
    code += `    globalThis.SKIPPED++;\n`;
    code += `    // console.log("skipped", path);\n`;
    code += `  } else if (success) {\n`;
    code += `    // console.log("passed", path);\n`;
    code += `    globalThis.PASSED++;\n`;
    code += `  } else {\n`;
    code += `    globalThis.FAILED++;\n`;
    code += `  }\n`;
    code += "};\n";
    code += `globalThis.parent.webglTestHarness.notifyFinished = (path) => {\n`;
    code += `  console.log("finished ... " + (${cov})(PASSED + FAILED + SKIPPED, PASSED, FAILED, SKIPPED));\n`;
    code += "};\n";
    code += `document.getElementsByTagName = (tagName) => {\n`;
    code += `  if (tagName.toLowerCase() == "script") {\n`;
    code += `    return globalThis.CTS_SHADERS;\n`;
    code += `  }\n`;
    code += `  return [];\n`;
    code += "};\n";
    code += "\n";

    const shaders = new Map<string, {
      type: string;
      source: string;
    }>();
    const scripts = new Map<string, string>();

    let anonID = 0;

    for (const node of document.getElementsByTagName("script")) {
      const src = node.getAttribute("src");
      const type = node.getAttribute("type");

      if (type?.startsWith("x-shader")) {
        shaders.set(node.id, {
          type: type!,
          source: node.textContent,
        });
      } else if (src) {
        const srcUrl = new URL(src, url);
        scripts.set(srcUrl.toString(), await tryImport(srcUrl));
      } else {
        scripts.set("anon-script-tag-" + anonID, node.textContent);
        anonID++;
      }
    }

    const canvas = document.getElementsByTagName("canvas")[0];
    if (canvas) {
      code += "\n";
      code += `window._width = ${canvas.getAttribute("width")?.replaceAll("px", "")};\n`;
      code += `window._height = ${canvas.getAttribute("height")?.replaceAll("px", "")};\n`;
      code += "\n";
    }

    code += "//#region Shaders\n\n";

    code += "globalThis.CTS_SHADERS = [];\n\n";

    for (const [name, shader] of shaders) {
      code += `CTS_SHADERS.push({\n`;
      code += `  name: ${JSON.stringify(name)},\n`;
      code += `  type: "${shader.type}",\n`;
      code += `  src: "",\n`;
      code += `  text: ` + JSON.stringify(shader.source) + `,\n`;
      code += "});\n\n";
    }

    code += "//#endregion\n\n";

    for (const [path, source] of scripts) {
      code += `//#region Script: ${path}\n\n`;
      code += source.trim();
      code += `\n\n//#endregion\n\n`;
    }

    code = code.trim() + "\n";

    code = code.replaceAll("\n}());\n", "\n}).bind(globalThis)();\n");
    code = code.replaceAll("window.location", "globalThis.LOCATION");
    code = code.replaceAll(
      `opt_canvas = opt_canvas || document.createElement("canvas");`,
      `opt_canvas = document.createElement("canvas");`,
    );
    code = code.replaceAll("\nTestEval = function(str) {", "\nvar TestEval = function(str) {");
    code = code.replaceAll(
      "var readFile = function(file) {",
      `var readFile = function(file) {
        if (file.startsWith("undefined")) {
          file = file.slice(9);
          file = new URL(file, new URL(${JSON.stringify(new URL("../WebGL/conformance-suites/2.0.0/", import.meta.url))}));
        }
        return Deno.readTextFileSync(file).replaceAll("\\r", "");`,
    );
    code = code.replaceAll(
      `var shaderScript = document.getElementById(scriptId);`,
      `var shaderScript = scriptId.includes("void main") ? {text:scriptId} : globalThis.CTS_SHADERS.find(e => e.name === scriptId || e.text === scriptId);`,
    );

    const codeURL = new URL("./test/" + name.replaceAll("/", "_") + ".js", import.meta.url);
    await Deno.writeTextFile(
      codeURL,
      code,
    );

    const result = Deno.run({
      cmd: [
        "deno",
        "run",
        "-A",
        "--unstable",
        "--no-check",
        codeURL.toString(),
      ],
      stdin: "null",
      stdout: "piped",
      stderr: "piped",
    });

    const [status, output, stderrOutput] = await Promise.all([result.status(), result.output(), result.stderrOutput()]);

    const stdout = new TextDecoder().decode(output).trim().replaceAll("\r\n", "\n").split("\n").filter(e => e !== "");
    const stderr = new TextDecoder().decode(stderrOutput).trim().replaceAll("\r\n", "\n").split("\n").filter(e => e !== "");

    result.close();

    if (stdout.length) {
      console.log(stdout.map(e => "    " + e).join("\n"));
    }

    if (stderr.length) {
      console.log(stderr.map(e => "    " + e).join("\n"));
    }

    const finished = stdout.find(e => e.trim().startsWith("finished"));

    if (finished) {
      const [, passed, failed, skipped] = finished.match(/(\d+) passed, (\d+) failed, (\d+) skipped/)!.map(e => parseInt(e));

      groupTotal += passed + failed + skipped;
      groupPassed += passed;
      groupFailed += failed;
      groupSkipped += skipped;
    } else {
      console.log(`    error: test didn't finish (code: ${status.code})`);
    }
  }

  console.log("  group finished ... " + cov(groupTotal, groupPassed, groupFailed, groupSkipped));

  total += groupTotal;
  passed += groupPassed;
  failed += groupFailed;
  skipped += groupSkipped;
}

console.log("cts finished ... " + cov(total, passed, failed, skipped));
