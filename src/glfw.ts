import { cstr, MapFFI, OS_LIB_PREFIX, OS_LIB_SUFFIX } from "./util.ts";
import { init } from "./opengl.ts";
import { GLFW_CONST } from "./const.ts";

export const symbols = {
  init: {
    parameters: [],
    result: "i32",
  },

  terminate: {
    parameters: [],
    result: "void",
  },

  windowHint: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  createWindow: {
    parameters: [
      "i32",
      "i32",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: "pointer",
  },

  makeContextCurrent: {
    parameters: ["pointer"],
    result: "void",
  },

  setInputMode: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },

  swapBuffers: {
    parameters: ["pointer"],
    result: "void",
  },

  pollEvents: {
    parameters: [],
    result: "void",
  },

  windowShouldClose: {
    parameters: ["pointer"],
    result: "i32",
  },

  getProcAddress: {
    parameters: ["pointer"],
    result: "pointer",
  },
} as const;

export type Symbols = {
  [K in keyof typeof symbols]: {
    // Make non-readonly
    parameters: [...(typeof symbols)[K]["parameters"]];
    result: (typeof symbols)[K]["result"];
  };
};

export const LIB_PATH = new URL(
  `../dist/${OS_LIB_PREFIX}glfw3.${OS_LIB_SUFFIX}`,
  import.meta.url,
);

function prefixGlfw(name: string) {
  return `glfw${name[0].toUpperCase()}${name.slice(1)}`;
}

export const lib = Deno.dlopen(
  LIB_PATH,
  Object.fromEntries(
    Object.entries(symbols).map(([name, def]) => {
      return [prefixGlfw(name), def];
    }),
  ) as unknown as Record<
    string,
    Deno.ForeignFunction
  >,
);

export function initGL() {
  init((name) =>
    lib.symbols.glfwGetProcAddress(cstr(name)) as Deno.UnsafePointer
  );
}

const glfw = Object.assign(
  Object.fromEntries(
    Object.keys(symbols).map((name) => [name, lib.symbols[prefixGlfw(name)]]),
  ),
  GLFW_CONST,
) as unknown as
  & MapFFI<Symbols>
  & typeof GLFW_CONST;

export default glfw;
