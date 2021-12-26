import { cstr, gl, glfw, initGL } from "../mod.ts";
import {
  Matrix4,
  PerspectiveFov,
  Rad,
  Vector3,
} from "https://deno.land/x/gmath@0.1.11/mod.ts";

if (!glfw.glfwInit()) {
  throw new Error("Failed to initialize GLFW");
}

glfw.glfwWindowHint(glfw.SAMPLES, 4);
glfw.glfwWindowHint(glfw.CONTEXT_VERSION_MAJOR, 3);
glfw.glfwWindowHint(glfw.CONTEXT_VERSION_MINOR, 3);
glfw.glfwWindowHint(glfw.OPENGL_FORWARD_COMPAT, gl.TRUE);
glfw.glfwWindowHint(glfw.OPENGL_PROFILE, glfw.OPENGL_CORE_PROFILE);

const width = 600, height = 500;

const win = glfw.glfwCreateWindow(
  width,
  height,
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

gl.glEnable(gl.DEPTH_TEST);
gl.glDepthFunc(gl.LESS);

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
layout(location = 1) in vec3 vertexColor;

uniform mat4 mvp;

out vec3 fragmentColor;

void main() {
  gl_Position =  mvp * vec4(vertexPosition_modelspace, 1);
  fragmentColor = vertexColor;
}
`;

const FRAGMENT = `
#version 330 core

in vec3 fragmentColor;
out vec3 color;

void main() {
  color = fragmentColor;
}
`;

const programID = loadShaders(VERTEX, FRAGMENT);

// deno-fmt-ignore
const vertexBufferData = new Float32Array([
  -1.0,-1.0,-1.0,
  -1.0,-1.0, 1.0,
  -1.0, 1.0, 1.0,
  1.0, 1.0,-1.0,
  -1.0,-1.0,-1.0,
  -1.0, 1.0,-1.0,
  1.0,-1.0, 1.0,
  -1.0,-1.0,-1.0,
  1.0,-1.0,-1.0,
  1.0, 1.0,-1.0,
  1.0,-1.0,-1.0,
  -1.0,-1.0,-1.0,
  -1.0,-1.0,-1.0,
  -1.0, 1.0, 1.0,
  -1.0, 1.0,-1.0,
  1.0,-1.0, 1.0,
  -1.0,-1.0, 1.0,
  -1.0,-1.0,-1.0,
  -1.0, 1.0, 1.0,
  -1.0,-1.0, 1.0,
  1.0,-1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0,-1.0,-1.0,
  1.0, 1.0,-1.0,
  1.0,-1.0,-1.0,
  1.0, 1.0, 1.0,
  1.0,-1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0, 1.0,-1.0,
  -1.0, 1.0,-1.0,
  1.0, 1.0, 1.0,
  -1.0, 1.0,-1.0,
  -1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,
  -1.0, 1.0, 1.0,
  1.0,-1.0, 1.0,
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

// deno-fmt-ignore
const colorBufferData = new Float32Array([
  0.583,  0.771,  0.014,
  0.609,  0.115,  0.436,
  0.327,  0.483,  0.844,
  0.822,  0.569,  0.201,
  0.435,  0.602,  0.223,
  0.310,  0.747,  0.185,
  0.597,  0.770,  0.761,
  0.559,  0.436,  0.730,
  0.359,  0.583,  0.152,
  0.483,  0.596,  0.789,
  0.559,  0.861,  0.639,
  0.195,  0.548,  0.859,
  0.014,  0.184,  0.576,
  0.771,  0.328,  0.970,
  0.406,  0.615,  0.116,
  0.676,  0.977,  0.133,
  0.971,  0.572,  0.833,
  0.140,  0.616,  0.489,
  0.997,  0.513,  0.064,
  0.945,  0.719,  0.592,
  0.543,  0.021,  0.978,
  0.279,  0.317,  0.505,
  0.167,  0.620,  0.077,
  0.347,  0.857,  0.137,
  0.055,  0.953,  0.042,
  0.714,  0.505,  0.345,
  0.783,  0.290,  0.734,
  0.722,  0.645,  0.174,
  0.302,  0.455,  0.848,
  0.225,  0.587,  0.040,
  0.517,  0.713,  0.338,
  0.053,  0.959,  0.120,
  0.393,  0.621,  0.362,
  0.673,  0.211,  0.457,
  0.820,  0.883,  0.371,
  0.982,  0.099,  0.879,
]);

const colorBuffer = new Uint32Array(1);
gl.glGenBuffers(1, colorBuffer);
gl.glBindBuffer(gl.ARRAY_BUFFER, colorBuffer[0]);
gl.glBufferData(
  gl.ARRAY_BUFFER,
  colorBufferData.byteLength,
  colorBufferData,
  gl.STATIC_DRAW,
);

const proj = new PerspectiveFov(new Rad(45.0), width / height, 0.1, 100.0)
  .toPerspective()
  .toMatrix4();
const view = Matrix4.lookAtRh(
  new Vector3(4, 4, 3),
  Vector3.zero(), // origin
  new Vector3(0, 1, 0),
);
const model = Matrix4.identity();
const mvp = proj.mul(view.mul(model));

const matrixID = gl.glGetUniformLocation(programID, cstr("mvp"));

do {
  gl.glClear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.glUseProgram(programID);

  gl.glUniformMatrix4fv(matrixID, 1, gl.FALSE, mvp.toFloat32Array());

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

  gl.glEnableVertexAttribArray(1);
  gl.glBindBuffer(gl.ARRAY_BUFFER, colorBuffer[0]);
  gl.glVertexAttribPointer(
    1,
    3,
    gl.FLOAT,
    gl.FALSE,
    0,
    null,
  );

  gl.glDrawArrays(gl.TRIANGLES, 0, 3 * 12);

  gl.glDisableVertexAttribArray(0);

  glfw.glfwSwapBuffers(win);
  glfw.glfwPollEvents();
} while (!glfw.glfwWindowShouldClose(win));

gl.glDeleteBuffers(2, new Uint32Array([...vertexBuffer, ...colorBuffer]));
gl.glDeleteVertexArrays(1, vao);
gl.glDeleteProgram(programID);

glfw.glfwTerminate();
