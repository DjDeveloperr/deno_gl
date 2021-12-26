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

  glBlendColor: {
    parameters: ["f32", "f32", "f32", "f32"],
    result: "void",
  },

  glBlendEquation: {
    parameters: ["i32"],
    result: "void",
  },

  glBlendEquationSeparate: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glBlendFunc: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glBlendFuncSeparate: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  glClampColor: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glColorMask: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  glColorMaski: {
    parameters: ["u32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  glCullFace: {
    parameters: ["i32"],
    result: "void",
  },

  glDepthMask: {
    parameters: ["i32"],
    result: "void",
  },

  glDepthRange: {
    parameters: ["f32", "f32"],
    result: "void",
  },

  glDisable: {
    parameters: ["i32"],
    result: "void",
  },

  glFrontFace: {
    parameters: ["i32"],
    result: "void",
  },

  glGetBooleanv: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glGetDoublev: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glGetFloatv: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glGetIntegerv: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glGetInteger64v: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  glGetBooleani_v: {
    parameters: ["i32", "u32", "pointer"],
    result: "void",
  },

  glGetIntegeri_v: {
    parameters: ["i32", "u32", "pointer"],
    result: "void",
  },

  glGetInteger64i_v: {
    parameters: ["i32", "u32", "pointer"],
    result: "void",
  },

  glHint: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glIsEnabled: {
    parameters: ["i32"],
    result: "i32",
  },

  glIsEnabledi: {
    parameters: ["i32", "u32"],
    result: "i32",
  },

  glEnablei: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  glDisablei: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  glLineWidth: {
    parameters: ["f32"],
    result: "void",
  },

  glLogicOp: {
    parameters: ["i32"],
    result: "void",
  },

  glPixelStoref: {
    parameters: ["i32", "f32"],
    result: "void",
  },

  glPixelStorei: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glPointParameterf: {
    parameters: ["i32", "f32"],
    result: "void",
  },

  glPointParameteri: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glPointSize: {
    parameters: ["f32"],
    result: "void",
  },

  glPolygonMode: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glPolygonOffset: {
    parameters: ["f32", "f32"],
    result: "void",
  },

  glSampleCoverage: {
    parameters: ["f32", "i32"],
    result: "void",
  },

  glScissor: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  glStencilFunc: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  glStencilFuncSeparate: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  glStencilMask: {
    parameters: ["u32"],
    result: "void",
  },

  glStencilMaskSeparate: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  glStencilOp: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  glStencilOpSeparate: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  glViewport: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  glValidateProgram: {
    parameters: ["u32"],
    result: "void",
  },

  glBindAttribLocation: {
    parameters: ["u32", "u32", "pointer"],
    result: "void",
  },

  glBindFragDataLocation: {
    parameters: ["u32", "u32", "pointer"],
    result: "void",
  },

  glBindFragDataLocationIndexed: {
    parameters: ["u32", "u32", "u32", "pointer"],
    result: "void",
  },

  glGetActiveAttrib: {
    parameters: [
      "u32",
      "u32",
      "i32",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: "void",
  },

  glGetActiveUniform: {
    parameters: [
      "u32",
      "u32",
      "i32",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: "void",
  },

  glGetActiveUniformBlockiv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  glGetActiveUniformBlockName: {
    parameters: ["u32", "u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  glGetActiveUniformName: {
    parameters: ["u32", "u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  glGetActiveUniformsiv: {
    parameters: ["u32", "i32", "pointer", "i32", "pointer"],
    result: "void",
  },

  glGetAttachedShaders: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  glGetAttribLocation: {
    parameters: ["u32", "pointer"],
    result: "i32",
  },

  glGetFragDataIndex: {
    parameters: ["u32", "pointer"],
    result: "i32",
  },

  glGetFragDataLocation: {
    parameters: ["u32", "pointer"],
    result: "i32",
  },

  glGetShaderSource: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  glGetUniformfv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  glGetUniformiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  glGetUniformuiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  glGetUniformBlockIndex: {
    parameters: ["u32", "pointer"],
    result: "i32",
  },

  glGetUniformIndices: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  glIsProgram: {
    parameters: ["u32"],
    result: "i32",
  },

  glIsShader: {
    parameters: ["u32"],
    result: "i32",
  },

  glUniform1f: {
    parameters: ["i32", "f32"],
    result: "void",
  },

  glUniform2f: {
    parameters: ["i32", "f32", "f32"],
    result: "void",
  },

  glUniform3f: {
    parameters: ["i32", "f32", "f32", "f32"],
    result: "void",
  },

  glUniform4f: {
    parameters: ["i32", "f32", "f32", "f32", "f32"],
    result: "void",
  },

  glUniform1i: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  glUniform2i: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  glUniform3i: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  glUniform4i: {
    parameters: ["i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  glUniform1ui: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  glUniform2ui: {
    parameters: ["i32", "u32", "u32"],
    result: "void",
  },

  glUniform3ui: {
    parameters: ["i32", "u32", "u32", "u32"],
    result: "void",
  },

  glUniform4ui: {
    parameters: ["i32", "u32", "u32", "u32", "u32"],
    result: "void",
  },

  glUniform1fv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform2fv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform3fv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform4fv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform1iv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform2iv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform3iv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform4iv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform1uiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform2uiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform3uiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniform4uiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix2fv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix3fv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix4fv: {
    parameters: ["i32", "u32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix2x3fv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix3x2fv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix2x4fv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix4x2fv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix3x4fv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glUniformMatrix4x3fv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  glUniformBlockBinding: {
    parameters: ["u32", "u32", "u32"],
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
