import { cstr, MapFFI, OS_LIB_PREFIX, OS_LIB_SUFFIX } from "./util.ts";
import { init } from "./opengl.ts";
import { GLFW_CONST } from "./const.ts";

export const symbols = {
  glfwInit: {
    parameters: [],
    result: "i32",
  },

  glfwTerminate: {
    parameters: [],
    result: "void",
  },

  glfwWindowHint: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glfwCreateWindow: {
    parameters: [
      "i32",
      "i32",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: "pointer",
  },

  glfwMakeContextCurrent: {
    parameters: ["pointer"],
    result: "void",
  },

  glfwSetInputMode: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },

  glfwSwapBuffers: {
    parameters: ["pointer"],
    result: "void",
  },

  glfwPollEvents: {
    parameters: [],
    result: "void",
  },

  glfwWindowShouldClose: {
    parameters: ["pointer"],
    result: "i32",
  },

  glfwGetProcAddress: {
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

export const lib = Deno.dlopen(LIB_PATH, symbols as Symbols);

export function initGL() {
  init((name) =>
    lib.symbols.glfwGetProcAddress(cstr(name)) as Deno.UnsafePointer
  );
}

const glfw = Object.assign(lib.symbols, GLFW_CONST) as
  & MapFFI<Symbols>
  & typeof GLFW_CONST;

export default glfw;
