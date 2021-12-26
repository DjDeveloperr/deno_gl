import { GL_CONST } from "./const.ts";
import { MapFFI } from "./util.ts";

export const symbols = {
  glClear: {
    parameters: ["i32"],
    result: "void",
  },

  glGenVertexArrays: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  glBindVertexArray: {
    parameters: ["u32"],
    result: "void",
  },

  glGenBuffers: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glBindBuffer: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  glBufferData: {
    parameters: ["i32", "i32", "pointer", "i32"],
    result: "void",
  },

  glEnableVertexAttribArray: {
    parameters: ["i32"],
    result: "void",
  },

  glVertexAttribPointer: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glDrawArrays: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  glDisableVertexAttribArray: {
    parameters: ["i32"],
    result: "void",
  },

  glCreateShader: {
    parameters: ["i32"],
    result: "u32",
  },

  glShaderSource: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  glCompileShader: {
    parameters: ["u32"],
    result: "void",
  },

  glGetShaderiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  glGetShaderInfoLog: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  glCreateProgram: {
    parameters: [],
    result: "u32",
  },

  glAttachShader: {
    parameters: ["u32", "u32"],
    result: "void",
  },

  glLinkProgram: {
    parameters: ["u32"],
    result: "void",
  },

  glGetProgramiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  glGetProgramInfoLog: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  glDetachShader: {
    parameters: ["u32", "u32"],
    result: "void",
  },

  glDeleteShader: {
    parameters: ["u32"],
    result: "void",
  },

  glUseProgram: {
    parameters: ["u32"],
    result: "void",
  },

  glClearColor: {
    parameters: ["f32", "f32", "f32", "f32"],
    result: "void",
  },

  glGetError: {
    parameters: [],
    result: "u32",
  },

  glEnable: {
    parameters: ["i32"],
    result: "void",
  },

  // TODO: Use JS callback when FFI supports Callbacks
  glDebugMessageCallback: {
    parameters: [],
    result: "void",
  },
} as const;

export type Symbols = {
  -readonly [K in keyof typeof symbols]: {
    // Make non-readonly
    parameters: [...(typeof symbols)[K]["parameters"]];
    result: (typeof symbols)[K]["result"];
  };
};

const gl = GL_CONST as unknown as MapFFI<Symbols> & typeof GL_CONST;

export const LIB_PATH = new URL("../dist/gl.dll", import.meta.url);
const cbind = Deno.dlopen(
  LIB_PATH,
  Object.fromEntries(
    Object.entries(symbols).map(([name, def]) => {
      return [name, {
        parameters: ["pointer", ...def.parameters],
        result: def.result,
      }];
    }),
  ) as unknown as Record<
    string,
    Deno.ForeignFunction
  >,
).symbols;

export function init(GetProcAddress: (name: string) => Deno.UnsafePointer) {
  for (const name in symbols) {
    const ptr = GetProcAddress(name);
    if (ptr.value === 0n) {
      throw new Error(`Failed to load symbol: ${name}`);
    }
    gl[name as keyof Symbols] = ((...args: any[]) => {
      return cbind[name](ptr, ...args);
    }) as any;
  }
}

export default gl;
