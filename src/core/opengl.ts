import { GL_CONST } from "./const.ts";
import { MapFFI, OS_LIB_PREFIX, OS_LIB_SUFFIX } from "./util.ts";

export const GLenum = "u32" as const;
export const GLboolean = "u8" as const;
export const GLbitfield = "u32" as const;
export const GLbyte = "i8" as const;
export const GLshort = "i16" as const;
export const GLint = "i32" as const;
export const GLsizei = "i32" as const;
export const GLintptr = "i32" as const;
export const GLsizeiptr = "u64" as const;
export const GLubyte = "u8" as const;
export const GLushort = "u16" as const;
export const GLuint = "u32" as const;
export const GLfloat = "f32" as const;
export const GLclampf = "f32" as const;
export const GLfloatv = "pointer" as const;
export const GLbooleanv = "pointer" as const;
export const GLubyteptr = "pointer" as const;
export const GLvoidptr = "pointer" as const;
export const GLuintv = "pointer" as const;
export const GLintv = "pointer" as const;
export const GLcharptr = "pointer" as const;
export const GLenumv = "pointer" as const;

export const symbols = {
  /// 5.14.3 Setting and getting state

  activeTexture: {
    parameters: [GLenum],
    result: "void",
  },

  blendColor: {
    parameters: [GLclampf, GLclampf, GLclampf, GLclampf],
    result: "void",
  },

  blendEquation: {
    parameters: [GLenum],
    result: "void",
  },

  blendEquationSeparate: {
    parameters: [GLenum, GLenum],
    result: "void",
  },

  blendFunc: {
    parameters: [GLenum, GLenum],
    result: "void",
  },

  blendFuncSeparate: {
    parameters: [GLenum, GLenum, GLenum, GLenum],
    result: "void",
  },

  clearColor: {
    parameters: [GLclampf, GLclampf, GLclampf, GLclampf],
    result: "void",
  },

  clearDepth: {
    parameters: [GLclampf],
    result: "void",
  },

  clearStencil: {
    parameters: [GLint],
    result: "void",
  },

  colorMask: {
    parameters: [GLboolean, GLboolean, GLboolean, GLboolean],
    result: "void",
  },

  cullFace: {
    parameters: [GLenum],
    result: "void",
  },

  depthFunc: {
    parameters: [GLenum],
    result: "void",
  },

  depthMask: {
    parameters: [GLboolean],
    result: "void",
  },

  depthRange: {
    parameters: [GLclampf, GLclampf],
    result: "void",
  },

  disable: {
    parameters: [GLenum],
    result: "void",
  },

  enable: {
    parameters: [GLenum],
    result: "void",
  },

  frontFace: {
    parameters: [GLenum],
    result: "void",
  },

  getIntegerv: {
    parameters: [GLenum, GLintv],
    result: "void",
  },

  getFloatv: {
    parameters: [GLenum, GLfloatv],
    result: "void",
  },

  getBooleanv: {
    parameters: [GLenum, GLbooleanv],
    result: "void",
  },

  getString: {
    parameters: [GLenum],
    result: GLubyteptr,
  },

  getError: {
    parameters: [],
    result: GLenum,
  },

  debugMessageCallback: {
    parameters: [],
    result: "void",
  },

  hint: {
    parameters: [GLenum, GLenum],
    result: "void",
  },

  isEnabled: {
    parameters: [GLenum],
    result: GLboolean,
  },

  lineWidth: {
    parameters: [GLfloat],
    result: "void",
  },

  pixelStorei: {
    parameters: [GLenum, GLint],
    result: "void",
  },

  polygonOffset: {
    parameters: [GLfloat, GLfloat],
    result: "void",
  },

  sampleCoverage: {
    parameters: [GLclampf, GLboolean],
    result: "void",
  },

  stencilFunc: {
    parameters: [GLenum, GLint, GLuint],
    result: "void",
  },

  stencilFuncSeparate: {
    parameters: [GLenum, GLenum, GLint, GLuint],
    result: "void",
  },

  stencilMask: {
    parameters: [GLuint],
    result: "void",
  },

  stencilMaskSeparate: {
    parameters: [GLenum, GLuint],
    result: "void",
  },

  stencilOp: {
    parameters: [GLenum, GLenum, GLenum],
    result: "void",
  },

  /// 5.14.4 Viewing and clipping

  scissor: {
    parameters: [GLint, GLint, GLsizei, GLsizei],
    result: "void",
  },

  viewport: {
    parameters: [GLint, GLint, GLsizei, GLsizei],
    result: "void",
  },

  /// 5.14.5 Buffer objects

  bindBuffer: {
    parameters: [GLenum, GLuint],
    result: "void",
  },

  bufferData: {
    parameters: [GLenum, GLsizeiptr, GLvoidptr, GLenum],
    result: "void",
  },

  bufferSubData: {
    parameters: [GLenum, GLintptr, GLsizeiptr, GLvoidptr],
    result: "void",
  },

  genBuffers: {
    parameters: [GLsizei, GLuintv],
    result: "void",
  },

  deleteBuffers: {
    parameters: [GLsizei, GLuintv],
    result: "void",
  },

  getBufferParameteriv: {
    parameters: [GLenum, GLenum, GLintv],
    result: "void",
  },

  isBuffer: {
    parameters: [GLuint],
    result: GLboolean,
  },

  /// 5.14.6 Framebuffer objects

  bindFramebuffer: {
    parameters: [GLenum, GLuint],
    result: "void",
  },

  checkFramebufferStatus: {
    parameters: [GLenum],
    result: GLenum,
  },

  genFramebuffers: {
    parameters: [GLsizei, GLuintv],
    result: "void",
  },

  deleteFramebuffers: {
    parameters: [GLsizei, GLuintv],
    result: "void",
  },

  framebufferRenderbuffer: {
    parameters: [GLenum, GLenum, GLenum, GLuint],
    result: "void",
  },

  framebufferTexture2D: {
    parameters: [GLenum, GLenum, GLenum, GLuint, GLint],
    result: "void",
  },

  getFramebufferAttachmentParameteriv: {
    parameters: [GLenum, GLenum, GLenum, GLintv],
    result: "void",
  },

  isFramebuffer: {
    parameters: [GLuint],
    result: GLboolean,
  },

  /// 5.14.7 Renderbuffer objects

  bindRenderbuffer: {
    parameters: [GLenum, GLuint],
    result: "void",
  },

  genRenderbuffers: {
    parameters: [GLsizei, GLuintv],
    result: "void",
  },

  deleteRenderbuffers: {
    parameters: [GLsizei, GLuintv],
    result: "void",
  },

  getRenderbufferParameteriv: {
    parameters: [GLenum, GLenum, GLintv],
    result: "void",
  },

  isRenderbuffer: {
    parameters: [GLuint],
    result: GLboolean,
  },

  renderbufferStorage: {
    parameters: [GLenum, GLenum, GLsizei, GLsizei],
    result: "void",
  },

  /// 5.14.8 Texture objects

  bindTexture: {
    parameters: [GLenum, GLuint],
    result: "void",
  },

  compressedTexImage2D: {
    parameters: [
      GLenum,
      GLint,
      GLenum,
      GLsizei,
      GLsizei,
      GLint,
      GLsizei,
      GLvoidptr,
    ],
    result: "void",
  },

  compressedTexSubImage2D: {
    parameters: [
      GLenum,
      GLint,
      GLint,
      GLint,
      GLsizei,
      GLsizei,
      GLenum,
      GLsizei,
      GLvoidptr,
    ],
    result: "void",
  },

  copyTexImage2D: {
    parameters: [
      GLenum,
      GLint,
      GLenum,
      GLint,
      GLint,
      GLsizei,
      GLsizei,
      GLint,
    ],
    result: "void",
  },

  copyTexSubImage2D: {
    parameters: [
      GLenum,
      GLint,
      GLint,
      GLint,
      GLint,
      GLint,
      GLsizei,
      GLsizei,
    ],
    result: "void",
  },

  genTextures: {
    parameters: [GLsizei, GLuintv],
    result: "void",
  },

  deleteTextures: {
    parameters: [GLsizei, GLuintv],
    result: "void",
  },

  generateMipmap: {
    parameters: [GLenum],
    result: "void",
  },

  getTexParameteriv: {
    parameters: [GLenum, GLenum, GLintv],
    result: "void",
  },

  isTexture: {
    parameters: [GLuint],
    result: GLboolean,
  },

  texImage2D: {
    parameters: [
      GLenum,
      GLint,
      GLint,
      GLsizei,
      GLsizei,
      GLint,
      GLenum,
      GLenum,
      GLvoidptr,
    ],
    result: "void",
  },

  texParameterf: {
    parameters: [GLenum, GLenum, GLfloat],
    result: "void",
  },

  texParameteri: {
    parameters: [GLenum, GLenum, GLint],
    result: "void",
  },

  texSubImage2D: {
    parameters: [
      GLenum,
      GLint,
      GLint,
      GLint,
      GLsizei,
      GLsizei,
      GLenum,
      GLenum,
      GLvoidptr,
    ],
    result: "void",
  },

  /// 5.14.9 Programs and Shaders

  attachShader: {
    parameters: [GLuint, GLuint],
    result: "void",
  },

  bindAttribLocation: {
    parameters: [GLuint, GLuint, GLcharptr],
    result: "void",
  },

  compileShader: {
    parameters: [GLuint],
    result: "void",
  },

  createProgram: {
    parameters: [],
    result: GLuint,
  },

  createShader: {
    parameters: [GLenum],
    result: GLuint,
  },

  deleteProgram: {
    parameters: [GLuint],
    result: "void",
  },

  deleteShader: {
    parameters: [GLuint],
    result: "void",
  },

  detachShader: {
    parameters: [GLuint, GLuint],
    result: "void",
  },

  getAttachedShaders: {
    parameters: [GLuint, GLsizei, GLuintv, GLuintv],
    result: "void",
  },

  getProgramiv: {
    parameters: [GLuint, GLenum, GLintv],
    result: "void",
  },

  getProgramInfoLog: {
    parameters: [GLuint, GLsizei, GLintv, GLcharptr],
    result: "void",
  },

  getShaderiv: {
    parameters: [GLuint, GLenum, GLintv],
    result: "void",
  },

  getShaderPrecisionFormat: {
    parameters: [GLenum, GLenum, GLintv, GLintv],
    result: "void",
  },

  getShaderInfoLog: {
    parameters: [GLuint, GLsizei, GLintv, GLcharptr],
    result: "void",
  },

  getShaderSource: {
    parameters: [GLuint, GLsizei, GLintv, GLcharptr],
    result: "void",
  },

  isProgram: {
    parameters: [GLuint],
    result: GLboolean,
  },

  isShader: {
    parameters: [GLuint],
    result: GLboolean,
  },

  linkProgram: {
    parameters: [GLuint],
    result: "void",
  },

  shaderSource: {
    parameters: [GLuint, GLsizei, GLcharptr, GLintv],
    result: "void",
  },

  useProgram: {
    parameters: [GLuint],
    result: "void",
  },

  validateProgram: {
    parameters: [GLuint],
    result: "void",
  },

  /// 5.14.10 Uniforms and attributes

  disableVertexAttribArray: {
    parameters: [GLuint],
    result: "void",
  },

  enableVertexAttribArray: {
    parameters: [GLuint],
    result: "void",
  },

  getActiveAttrib: {
    parameters: [GLuint, GLuint, GLsizei, GLuintv, GLintv, GLenumv, GLcharptr],
    result: "void",
  },

  getActiveUniform: {
    parameters: [
      GLuint,
      GLuint,
      GLsizei,
      GLuintv,
      GLintv,
      GLenumv,
      GLcharptr,
    ],
    result: "void",
  },

  getAttribLocation: {
    parameters: [GLuint, GLcharptr],
    result: GLint,
  },

  getUniformfv: {
    parameters: [GLuint, GLint, GLfloatv],
    result: "void",
  },

  getUniformiv: {
    parameters: [GLuint, GLint, GLintv],
    result: "void",
  },

  getUniformLocation: {
    parameters: [GLuint, GLcharptr],
    result: GLint,
  },

  getVertexAttribfv: {
    parameters: [GLuint, GLenum, GLfloatv],
    result: "void",
  },

  getVertexAttribiv: {
    parameters: [GLuint, GLenum, GLintv],
    result: "void",
  },

  getVertexAttribPointerv: {
    parameters: [GLuint, GLenum, GLvoidptr],
    result: "void",
  },

  uniform1f: {
    parameters: [GLint, GLfloat],
    result: "void",
  },

  uniform2f: {
    parameters: [GLint, GLfloat, GLfloat],
    result: "void",
  },

  uniform3f: {
    parameters: [GLint, GLfloat, GLfloat, GLfloat],
    result: "void",
  },

  uniform4f: {
    parameters: [GLint, GLfloat, GLfloat, GLfloat, GLfloat],
    result: "void",
  },

  uniform1i: {
    parameters: [GLint, GLint],
    result: "void",
  },

  uniform2i: {
    parameters: [GLint, GLint, GLint],
    result: "void",
  },

  uniform3i: {
    parameters: [GLint, GLint, GLint, GLint],
    result: "void",
  },

  uniform4i: {
    parameters: [GLint, GLint, GLint, GLint, GLint],
    result: "void",
  },

  uniform1fv: {
    parameters: [GLint, GLsizei, GLfloatv],
    result: "void",
  },

  uniform2fv: {
    parameters: [GLint, GLsizei, GLfloatv],
    result: "void",
  },

  uniform3fv: {
    parameters: [GLint, GLsizei, GLfloatv],
    result: "void",
  },

  uniform4fv: {
    parameters: [GLint, GLsizei, GLfloatv],
    result: "void",
  },

  uniform1iv: {
    parameters: [GLint, GLsizei, GLintv],
    result: "void",
  },

  uniform2iv: {
    parameters: [GLint, GLsizei, GLintv],
    result: "void",
  },

  uniform3iv: {
    parameters: [GLint, GLsizei, GLintv],
    result: "void",
  },

  uniform4iv: {
    parameters: [GLint, GLsizei, GLintv],
    result: "void",
  },

  uniformMatrix2fv: {
    parameters: [GLint, GLsizei, GLboolean, GLfloatv],
    result: "void",
  },

  uniformMatrix3fv: {
    parameters: [GLint, GLsizei, GLboolean, GLfloatv],
    result: "void",
  },

  uniformMatrix4fv: {
    parameters: [GLint, GLsizei, GLboolean, GLfloatv],
    result: "void",
  },

  vertexAttrib1f: {
    parameters: [GLuint, GLfloat],
    result: "void",
  },

  vertexAttrib2f: {
    parameters: [GLuint, GLfloat, GLfloat],
    result: "void",
  },

  vertexAttrib3f: {
    parameters: [GLuint, GLfloat, GLfloat, GLfloat],
    result: "void",
  },

  vertexAttrib4f: {
    parameters: [GLuint, GLfloat, GLfloat, GLfloat, GLfloat],
    result: "void",
  },

  vertexAttrib1fv: {
    parameters: [GLuint, GLfloatv],
    result: "void",
  },

  vertexAttrib2fv: {
    parameters: [GLuint, GLfloatv],
    result: "void",
  },

  vertexAttrib3fv: {
    parameters: [GLuint, GLfloatv],
    result: "void",
  },

  vertexAttrib4fv: {
    parameters: [GLuint, GLfloatv],
    result: "void",
  },

  vertexAttribPointer: {
    parameters: [
      GLuint,
      GLint,
      GLenum,
      GLboolean,
      GLsizei,
      GLvoidptr,
    ],
    result: "void",
  },

  /// 5.14.11 Writing to the drawing buffer

  clear: {
    parameters: [GLbitfield],
    result: "void",
  },

  drawArrays: {
    parameters: [GLenum, GLint, GLsizei],
    result: "void",
  },

  drawElements: {
    parameters: [GLenum, GLsizei, GLenum, GLvoidptr],
    result: "void",
  },

  finish: {
    parameters: [],
    result: "void",
  },

  flush: {
    parameters: [],
    result: "void",
  },

  /// 5.14.12 Reading back pixels

  readPixels: {
    parameters: [
      GLint,
      GLint,
      GLsizei,
      GLsizei,
      GLenum,
      GLenum,
      GLvoidptr,
    ],
    result: "void",
  },

  /// EXT: OES_vertex_array_object

  bindVertexArrayOES: {
    parameters: [GLuint],
    result: "void",
  },

  genVertexArraysOES: {
    parameters: [GLuint, GLuintv],
    result: GLuint,
  },

  deleteVertexArraysOES: {
    parameters: [GLuint, GLuintv],
    result: "void",
  },

  isVertexArrayOES: {
    parameters: [GLuint],
    result: GLboolean,
  },
} as const;

export type Symbols = {
  -readonly [K in keyof typeof symbols]: {
    // Make non-readonly
    parameters: [...(typeof symbols)[K]["parameters"]];
    result: (typeof symbols)[K]["result"];
  };
};

const gl = new GL_CONST() as unknown as MapFFI<Symbols> & GL_CONST;

function prefixGl(name: string) {
  return `gl${name[0].toUpperCase()}${name.slice(1)}`;
}

// TODO: Should FFI support dynamic calls (via pointers)?
export const LIB_PATH = new URL(
  `../../dist/${OS_LIB_PREFIX}gl.${OS_LIB_SUFFIX}`,
  import.meta.url,
);

const cbind = Deno.dlopen(
  LIB_PATH,
  Object.fromEntries(
    Object.entries(symbols).map(([name, def]) => {
      return [prefixGl(name), {
        parameters: ["pointer", ...def.parameters],
        result: def.result,
      }];
    }),
  ) as unknown as Record<
    string,
    Deno.ForeignFunction
  >,
).symbols;

const DEBUG = true;

export function init(GetProcAddress: (name: string) => Deno.UnsafePointer) {
  for (const name in symbols) {
    const glName = prefixGl(name);
    const ptr = GetProcAddress(glName);
    // For testing
    if (ptr.value === 0n) {
      throw new Error(`Failed to load symbol: ${glName}`);
    }
    gl[name as keyof Symbols] = ptr.value === 0n
      ? (() => {
        // Lazy errors in case of older OpenGL versions being used.
        throw new Error(`Failed to load symbol: ${glName}`);
      })
      : ((...args: any[]) => {
        // if (glName != "glGetError") console.log(name, args);
        const res = cbind[glName](ptr, ...args);
        let err;
        while (
          DEBUG && name !== "getError" && (err = gl.getError()) != gl.NO_ERROR
        ) {
          console.error(
            `%cerror%c: ${glName}(${
              args.map((e) => Deno.inspect(e, { colors: true })).join(", ")
            }) threw 0x${err.toString(16)} (and returned ${
              Deno.inspect(res, { colors: true })
            })`,
            "color: red",
            "",
          );
        }
        return res;
      }) as any;
  }
}

export default gl;
