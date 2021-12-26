import { cstr, gl, glfw, initGL } from "../mod.ts";

if (!glfw.glfwInit()) {
  throw new Error("Failed to initialize GLFW");
}

glfw.glfwWindowHint(glfw.SAMPLES, 4);
glfw.glfwWindowHint(glfw.CONTEXT_VERSION_MAJOR, 3);
glfw.glfwWindowHint(glfw.CONTEXT_VERSION_MINOR, 3);
glfw.glfwWindowHint(glfw.OPENGL_FORWARD_COMPAT, gl.TRUE);
glfw.glfwWindowHint(glfw.OPENGL_PROFILE, glfw.OPENGL_CORE_PROFILE);

const win = glfw.glfwCreateWindow(
  600,
  500,
  cstr("Hello World"),
  null,
  null,
) as Deno.UnsafePointer;

if (win.value === 0n) {
  glfw.glfwTerminate();
  throw new Error("Failed to create GLFW window");
}

glfw.glfwMakeContextCurrent(win);
initGL();
glfw.glfwSetInputMode(win, glfw.STICKY_KEYS, gl.TRUE);

gl.glEnable(gl.DEBUG_OUTPUT);
gl.glDebugMessageCallback();

function loadShaders(vertex: string, fragment: string) {
  const vertexShaderID = gl.glCreateShader(gl.VERTEX_SHADER);
  const fragmentShaderID = gl.glCreateShader(gl.FRAGMENT_SHADER);

  const result = new Uint32Array(1);
  const infoLogLength = new Uint32Array(1);

  const vertPtr = new BigUint64Array(1);
  vertPtr[0] = Deno.UnsafePointer.of(cstr(vertex)).value;

  gl.glShaderSource(vertexShaderID, 1, vertPtr, null);

  gl.glCompileShader(vertexShaderID);
  gl.glGetShaderiv(vertexShaderID, gl.COMPILE_STATUS, result);
  gl.glGetShaderiv(
    vertexShaderID,
    gl.INFO_LOG_LENGTH,
    infoLogLength,
  );
  if (infoLogLength[0] > 0) {
    const infoLog = new Uint8Array(infoLogLength[0] + 1);
    gl.glGetShaderInfoLog(
      vertexShaderID,
      infoLogLength[0],
      null,
      infoLog,
    );
    console.log(new TextDecoder().decode(infoLog));
  }

  const fragPtr = new BigUint64Array(1);
  fragPtr[0] = Deno.UnsafePointer.of(cstr(fragment)).value;
  gl.glShaderSource(fragmentShaderID, 1, fragPtr, null);
  gl.glCompileShader(fragmentShaderID);
  gl.glGetShaderiv(vertexShaderID, gl.COMPILE_STATUS, result);
  gl.glGetShaderiv(
    vertexShaderID,
    gl.INFO_LOG_LENGTH,
    infoLogLength,
  );
  if (infoLogLength[0] > 0) {
    const infoLog = new Uint8Array(infoLogLength[0] + 1);
    gl.glGetShaderInfoLog(
      vertexShaderID,
      infoLogLength[0],
      null,
      infoLog,
    );
    console.error(new TextDecoder().decode(infoLog));
  }

  const programID = gl.glCreateProgram() as number;
  gl.glAttachShader(programID, vertexShaderID);
  gl.glAttachShader(programID, fragmentShaderID);
  gl.glLinkProgram(programID);
  gl.glGetProgramiv(programID, gl.LINK_STATUS, result);
  gl.glGetProgramiv(
    programID,
    gl.INFO_LOG_LENGTH,
    infoLogLength,
  );
  if (infoLogLength[0] > 0) {
    const infoLog = new Uint8Array(infoLogLength[0] + 1);
    gl.glGetProgramInfoLog(
      programID,
      infoLogLength[0],
      null,
      infoLog,
    );
    console.error(new TextDecoder().decode(infoLog));
  }

  gl.glDetachShader(programID, vertexShaderID);
  gl.glDetachShader(programID, fragmentShaderID);
  gl.glDeleteShader(vertexShaderID);
  gl.glDeleteShader(fragmentShaderID);

  return programID;
}

gl.glClearColor(0.1, 0.2, 0.3, 1.0);

const vao = new Uint32Array(1);
gl.glGenVertexArrays(1, vao);
gl.glBindVertexArray(vao[0]);

const VERTEX = `
#version 330 core

layout(location = 0) in vec3 vertexPosition_modelspace;

void main() {
  gl_Position.xyz = vertexPosition_modelspace;
  gl_Position.w = 1.0;
}
`;

const FRAGMENT = `
#version 330 core
out vec3 color;
void main() {
  color = vec3(1,0,0);
}
`;

const programID = loadShaders(VERTEX, FRAGMENT);

const vertexBufferData = new Float32Array([
  -1.0,
  -1.0,
  0.0,
  1.0,
  -1.0,
  0.0,
  0.0,
  1.0,
  0.0,
]);

const vertexBuffer = new Uint32Array(1);
gl.glGenBuffers(1, vertexBuffer);
gl.glBindBuffer(gl.ARRAY_BUFFER, vertexBuffer[0]);
gl.glBufferData(
  gl.ARRAY_BUFFER,
  vertexBufferData.byteLength,
  vertexBufferData,
  gl.STATIC_DRAW,
);

do {
  gl.glClear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.glUseProgram(programID);

  gl.glEnableVertexAttribArray(0);
  gl.glBindBuffer(gl.ARRAY_BUFFER, vertexBuffer[0]);
  gl.glVertexAttribPointer(
    0,
    3,
    gl.FLOAT,
    gl.FALSE,
    0,
    null,
  );

  gl.glDrawArrays(gl.TRIANGLES, 0, 3);

  gl.glDisableVertexAttribArray(0);

  glfw.glfwSwapBuffers(win);
  glfw.glfwPollEvents();
} while (!glfw.glfwWindowShouldClose(win));

glfw.glfwTerminate();
