import { GL_CONST } from "./const.ts";
import { MapFFI, OS_LIB_PREFIX, OS_LIB_SUFFIX } from "./util.ts";

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

  glDeleteBuffers: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glDeleteVertexArrays: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glDeleteProgram: {
    parameters: ["u32"],
    result: "void",
  },

  glGetUniformLocation: {
    parameters: ["u32", "pointer"],
    result: "u32",
  },

  glUniformMatrix4fv: {
    parameters: ["i32", "u32", "i32", "pointer"],
    result: "void",
  },

  glDepthFunc: {
    parameters: ["i32"],
    result: "void",
  },

  glActiveTexture: {
    parameters: ["i32"],
    result: "void",
  },

  glBindTexture: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  glCompressedTexImage1D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glCompressedTexImage2D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glCompressedTexImage3D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glCompressedTexSubImage1D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glCompressedTexSubImage2D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glCompressedTexSubImage3D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glCopyTexImage1D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  glCopyTexImage2D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  glCopyTexSubImage1D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  glCopyTexSubImage2D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  glDeleteTextures: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glGenTextures: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glGetCompressedTexImage: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glGetTexImage: {
    parameters: ["i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glGetTexLevelParameterfv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glGetTexLevelParameteriv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glGetTexParameterfv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glGetTexParameteriv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glGetTexParameterIiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glGetTexParameterIuiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glIsTexture: {
    parameters: ["u32"],
    result: "i32",
  },

  glTexBuffer: {
    parameters: ["i32", "i32", "u32"],
    result: "void",
  },

  glTexImage1D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glTexImage2D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glTexImage2DMultisample: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
    ],
    result: "void",
  },

  glTexImage3D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glTexImage3DMultisample: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
    ],
    result: "void",
  },

  glTexParameterf: {
    parameters: ["i32", "i32", "f32"],
    result: "void",
  },

  glTexParameteri: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  glTexSubImage1D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glTexSubImage2D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glTexSubImage3D: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
    result: "void",
  },

  glIsVertexArray: {
    parameters: ["u32"],
    result: "i32",
  },

  glClearBufferiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glClearBufferuiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glClearBufferfv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glClearBufferfi: {
    parameters: ["i32", "f32", "f32", "f32"],
    result: "void",
  },

  glClearDepth: {
    parameters: ["f32"],
    result: "void",
  },

  glClearStencil: {
    parameters: ["i32"],
    result: "void",
  },

  glDrawBuffer: {
    parameters: ["i32"],
    result: "void",
  },

  glFinish: {
    parameters: [],
    result: "void",
  },

  glFlush: {
    parameters: [],
    result: "void",
  },

  glReadBuffer: {
    parameters: ["i32"],
    result: "void",
  },

  glReadPixels: {
    parameters: [
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "i32",
      "pointer",
    ],
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

// TODO: Should FFI support dynamic calls (via pointers)?
export const LIB_PATH = new URL(
  `../dist/${OS_LIB_PREFIX}gl.${OS_LIB_SUFFIX}`,
  import.meta.url,
);
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
