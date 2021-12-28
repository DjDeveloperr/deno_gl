import { GL_CONST } from "./const.ts";
import { MapFFI, OS_LIB_PREFIX, OS_LIB_SUFFIX } from "./util.ts";

export const symbols = {
  //#region Buffer Objects
  genBuffers: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  bindBuffer: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  bindBufferBase: {
    parameters: ["i32", "u32", "u32"],
    result: "void",
  },

  bindBufferRange: {
    parameters: ["i32", "u32", "u32", "i32", "i32"],
    result: "void",
  },

  bufferData: {
    parameters: ["i32", "i32", "pointer", "i32"],
    result: "void",
  },

  bufferSubData: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  copyBufferSubData: {
    parameters: ["i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  drawArraysInstanced: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  drawElements: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  drawElementsBaseVertex: {
    parameters: ["i32", "i32", "i32", "pointer", "i32"],
    result: "void",
  },

  drawElementsInstanced: {
    parameters: ["i32", "i32", "i32", "pointer", "i32"],
    result: "void",
  },

  drawElementsInstancedBaseVertex: {
    parameters: ["i32", "i32", "i32", "pointer", "i32", "i32"],
    result: "void",
  },

  drawRangeElements: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },

  drawRangeElementsBaseVertex: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "pointer", "i32"],
    result: "void",
  },

  enableVertexAttribArray: {
    parameters: ["i32"],
    result: "void",
  },

  vertexAttribPointer: {
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

  vertexAttribDivisor: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  drawArrays: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  disableVertexAttribArray: {
    parameters: ["i32"],
    result: "void",
  },

  deleteBuffers: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  flushMappedBufferRange: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  getBufferParameteriv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  getBufferPointerv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  getBufferSubData: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  getVertexAttribdv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getVertexAttribfv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getVertexAttribiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getVertexAttribIiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getVertexAttribIuiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getVertexAttribPointerv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  isBuffer: {
    parameters: ["u32"],
    result: "i32",
  },

  mapBuffer: {
    parameters: ["i32", "i32"],
    result: "pointer",
  },

  mapBufferRange: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "pointer",
  },

  multiDrawArrays: {
    parameters: ["i32", "pointer", "pointer", "i32"],
    result: "void",
  },

  multiDrawElements: {
    parameters: ["i32", "pointer", "i32", "pointer", "i32"],
    result: "void",
  },

  multiDrawElementsBaseVertex: {
    parameters: ["i32", "pointer", "i32", "pointer", "i32", "pointer"],
    result: "void",
  },

  primitiveRestartIndex: {
    parameters: ["u32"],
    result: "void",
  },

  provokingVertex: {
    parameters: ["i32"],
    result: "void",
  },

  unmapBuffer: {
    parameters: ["i32"],
    result: "i32",
  },

  vertexAttrib1f: {
    parameters: ["u32", "f32"],
    result: "void",
  },

  vertexAttrib1s: {
    parameters: ["u32", "i16"],
    result: "void",
  },

  vertexAttrib1d: {
    parameters: ["u32", "f64"],
    result: "void",
  },

  vertexAttribI1i: {
    parameters: ["u32", "i32"],
    result: "void",
  },

  vertexAttribI1ui: {
    parameters: ["u32", "u32"],
    result: "void",
  },

  vertexAttrib2f: {
    parameters: ["u32", "f32", "f32"],
    result: "void",
  },

  vertexAttrib2s: {
    parameters: ["u32", "i16", "i16"],
    result: "void",
  },

  vertexAttrib2d: {
    parameters: ["u32", "f64", "f64"],
    result: "void",
  },

  vertexAttribI2i: {
    parameters: ["u32", "i32", "i32"],
    result: "void",
  },

  vertexAttribI2ui: {
    parameters: ["u32", "u32", "u32"],
    result: "void",
  },

  vertexAttrib3f: {
    parameters: ["u32", "f32", "f32", "f32"],
    result: "void",
  },

  vertexAttrib3s: {
    parameters: ["u32", "i16", "i16", "i16"],
    result: "void",
  },

  vertexAttrib3d: {
    parameters: ["u32", "f64", "f64", "f64"],
    result: "void",
  },

  vertexAttribI3i: {
    parameters: ["u32", "i32", "i32", "i32"],
    result: "void",
  },

  vertexAttribI3ui: {
    parameters: ["u32", "u32", "u32", "u32"],
    result: "void",
  },

  vertexAttrib4f: {
    parameters: ["u32", "f32", "f32", "f32", "f32"],
    result: "void",
  },

  vertexAttrib4s: {
    parameters: ["u32", "i16", "i16", "i16", "i16"],
    result: "void",
  },

  vertexAttrib4d: {
    parameters: ["u32", "f64", "f64", "f64", "f64"],
    result: "void",
  },

  vertexAttrib4Nub: {
    parameters: ["u32", "u8", "u8", "u8", "u8"],
    result: "void",
  },

  vertexAttribI4i: {
    parameters: ["u32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  vertexAttribI4ui: {
    parameters: ["u32", "u32", "u32", "u32", "u32"],
    result: "void",
  },

  vertexAttrib1fv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib1sv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib1dv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI1iv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI1uiv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib2fv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib2sv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib2dv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI2iv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI2uiv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib3fv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib3sv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib3dv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI3iv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI3uiv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4fv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4sv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4dv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4iv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4bv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4ubv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4usv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4uiv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4Nbv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4Nsv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4Niv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4Nubv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4Nusv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttrib4Nuiv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI4bv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI4ubv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI4sv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI4usv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI4iv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribI4uiv: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  vertexAttribP1ui: {
    parameters: ["u32", "i32", "i32", "u32"],
    result: "void",
  },

  vertexAttribP2ui: {
    parameters: ["u32", "i32", "i32", "u32"],
    result: "void",
  },

  vertexAttribP3ui: {
    parameters: ["u32", "i32", "i32", "u32"],
    result: "void",
  },

  vertexAttribP4ui: {
    parameters: ["u32", "i32", "i32", "u32"],
    result: "void",
  },
  //#endregion

  //#region Textures
  activeTexture: {
    parameters: ["i32"],
    result: "void",
  },

  bindTexture: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  compressedTexImage1D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },

  compressedTexImage2D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },

  compressedTexImage3D: {
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

  compressedTexSubImage1D: {
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

  compressedTexSubImage2D: {
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

  compressedTexSubImage3D: {
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

  copyTexImage1D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  copyTexImage2D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  copyTexSubImage1D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  copyTexSubImage2D: {
    parameters: ["i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  deleteTextures: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  genTextures: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  getCompressedTexImage: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  getTexImage: {
    parameters: ["i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },

  getTexLevelParameterfv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  getTexLevelParameteriv: {
    parameters: ["i32", "i32", "i32", "pointer"],
    result: "void",
  },

  getTexParameterfv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  getTexParameteriv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  getTexParameterIiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  getTexParameterIuiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  isTexture: {
    parameters: ["u32"],
    result: "i32",
  },

  texBuffer: {
    parameters: ["i32", "i32", "u32"],
    result: "void",
  },

  texImage1D: {
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

  texImage2D: {
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

  texImage2DMultisample: {
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

  texImage3D: {
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

  texImage3DMultisample: {
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

  texParameterf: {
    parameters: ["i32", "i32", "f32"],
    result: "void",
  },

  texParameteri: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  texSubImage1D: {
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

  texSubImage2D: {
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

  texSubImage3D: {
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
  //#endregion

  //#region Vertex Array Objects
  genVertexArrays: {
    parameters: ["u32", "pointer"],
    result: "void",
  },

  deleteVertexArrays: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  bindVertexArray: {
    parameters: ["u32"],
    result: "void",
  },

  isVertexArray: {
    parameters: ["u32"],
    result: "i32",
  },
  //#endregion

  //#region Rendering
  clear: {
    parameters: ["i32"],
    result: "void",
  },

  clearColor: {
    parameters: ["f32", "f32", "f32", "f32"],
    result: "void",
  },

  clearBufferiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  clearBufferuiv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  clearBufferfv: {
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },

  clearBufferfi: {
    parameters: ["i32", "f32", "f32", "f32"],
    result: "void",
  },

  clearDepth: {
    parameters: ["f32"],
    result: "void",
  },

  clearStencil: {
    parameters: ["i32"],
    result: "void",
  },

  drawBuffer: {
    parameters: ["i32"],
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

  readBuffer: {
    parameters: ["i32"],
    result: "void",
  },

  readPixels: {
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
  //#endregion

  //#region State Management
  getError: {
    parameters: [],
    result: "u32",
  },

  // TODO: Use JS callback when FFI supports Callbacks
  debugMessageCallback: {
    parameters: [],
    result: "void",
  },

  enable: {
    parameters: ["i32"],
    result: "void",
  },

  blendColor: {
    parameters: ["f32", "f32", "f32", "f32"],
    result: "void",
  },

  blendEquation: {
    parameters: ["i32"],
    result: "void",
  },

  blendEquationSeparate: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  blendFunc: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  blendFuncSeparate: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  clampColor: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  colorMask: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  colorMaski: {
    parameters: ["u32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  cullFace: {
    parameters: ["i32"],
    result: "void",
  },

  depthFunc: {
    parameters: ["i32"],
    result: "void",
  },

  depthMask: {
    parameters: ["i32"],
    result: "void",
  },

  depthRange: {
    parameters: ["f32", "f32"],
    result: "void",
  },

  disable: {
    parameters: ["i32"],
    result: "void",
  },

  frontFace: {
    parameters: ["i32"],
    result: "void",
  },

  getBooleanv: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  getDoublev: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  getFloatv: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  getIntegerv: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  getInteger64v: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  getBooleani_v: {
    parameters: ["i32", "u32", "pointer"],
    result: "void",
  },

  getIntegeri_v: {
    parameters: ["i32", "u32", "pointer"],
    result: "void",
  },

  getInteger64i_v: {
    parameters: ["i32", "u32", "pointer"],
    result: "void",
  },

  hint: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  isEnabled: {
    parameters: ["i32"],
    result: "i32",
  },

  isEnabledi: {
    parameters: ["i32", "u32"],
    result: "i32",
  },

  enablei: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  disablei: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  lineWidth: {
    parameters: ["f32"],
    result: "void",
  },

  logicOp: {
    parameters: ["i32"],
    result: "void",
  },

  pixelStoref: {
    parameters: ["i32", "f32"],
    result: "void",
  },

  pixelStorei: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  pointParameterf: {
    parameters: ["i32", "f32"],
    result: "void",
  },

  pointParameteri: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  pointSize: {
    parameters: ["f32"],
    result: "void",
  },

  polygonMode: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  polygonOffset: {
    parameters: ["f32", "f32"],
    result: "void",
  },

  sampleCoverage: {
    parameters: ["f32", "i32"],
    result: "void",
  },

  scissor: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  stencilFunc: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  stencilFuncSeparate: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  stencilMask: {
    parameters: ["u32"],
    result: "void",
  },

  stencilMaskSeparate: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  stencilOp: {
    parameters: ["i32", "i32", "i32"],
    result: "void",
  },

  stencilOpSeparate: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },

  viewport: {
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },
  //#endregion

  //#region Shaders
  attachShader: {
    parameters: ["u32", "u32"],
    result: "void",
  },

  createShader: {
    parameters: ["i32"],
    result: "u32",
  },

  shaderSource: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  compileShader: {
    parameters: ["u32"],
    result: "void",
  },

  getShaderiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getShaderInfoLog: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  createProgram: {
    parameters: [],
    result: "u32",
  },

  linkProgram: {
    parameters: ["u32"],
    result: "void",
  },

  getProgramiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getProgramInfoLog: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  detachShader: {
    parameters: ["u32", "u32"],
    result: "void",
  },

  deleteShader: {
    parameters: ["u32"],
    result: "void",
  },

  getShaderPrecisionFormat: {
    parameters: ["i32", "i32", "pointer", "pointer"],
    result: "void",
  },

  useProgram: {
    parameters: ["u32"],
    result: "void",
  },

  bindAttribLocation: {
    parameters: ["u32", "u32", "pointer"],
    result: "void",
  },

  bindFragDataLocation: {
    parameters: ["u32", "u32", "pointer"],
    result: "void",
  },

  bindFragDataLocationIndexed: {
    parameters: ["u32", "u32", "u32", "pointer"],
    result: "void",
  },

  deleteProgram: {
    parameters: ["u32"],
    result: "void",
  },

  getUniformLocation: {
    parameters: ["u32", "pointer"],
    result: "u32",
  },

  getActiveAttrib: {
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

  getActiveUniform: {
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

  getActiveUniformBlockiv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  getActiveUniformBlockName: {
    parameters: ["u32", "u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  getActiveUniformName: {
    parameters: ["u32", "u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  getActiveUniformsiv: {
    parameters: ["u32", "i32", "pointer", "i32", "pointer"],
    result: "void",
  },

  getAttachedShaders: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  getAttribLocation: {
    parameters: ["u32", "pointer"],
    result: "i32",
  },

  getFragDataIndex: {
    parameters: ["u32", "pointer"],
    result: "i32",
  },

  getFragDataLocation: {
    parameters: ["u32", "pointer"],
    result: "i32",
  },

  getShaderSource: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  getUniformfv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getUniformiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getUniformuiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getUniformBlockIndex: {
    parameters: ["u32", "pointer"],
    result: "i32",
  },

  getUniformIndices: {
    parameters: ["u32", "i32", "pointer", "pointer"],
    result: "void",
  },

  isProgram: {
    parameters: ["u32"],
    result: "i32",
  },

  isShader: {
    parameters: ["u32"],
    result: "i32",
  },

  uniform1f: {
    parameters: ["u32", "f32"],
    result: "void",
  },

  uniform2f: {
    parameters: ["u32", "f32", "f32"],
    result: "void",
  },

  uniform3f: {
    parameters: ["u32", "f32", "f32", "f32"],
    result: "void",
  },

  uniform4f: {
    parameters: ["u32", "f32", "f32", "f32", "f32"],
    result: "void",
  },

  uniform1i: {
    parameters: ["u32", "i32"],
    result: "void",
  },

  uniform2i: {
    parameters: ["u32", "i32", "i32"],
    result: "void",
  },

  uniform3i: {
    parameters: ["u32", "i32", "i32", "i32"],
    result: "void",
  },

  uniform4i: {
    parameters: ["u32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  uniform1ui: {
    parameters: ["u32", "u32"],
    result: "void",
  },

  uniform2ui: {
    parameters: ["u32", "u32", "u32"],
    result: "void",
  },

  uniform3ui: {
    parameters: ["u32", "u32", "u32", "u32"],
    result: "void",
  },

  uniform4ui: {
    parameters: ["u32", "u32", "u32", "u32", "u32"],
    result: "void",
  },

  uniform1fv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform2fv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform3fv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform4fv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform1iv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform2iv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform3iv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform4iv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform1uiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform2uiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform3uiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniform4uiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix2fv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix3fv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix4fv: {
    parameters: ["u32", "u32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix2x3fv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix3x2fv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix2x4fv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix4x2fv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix3x4fv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  uniformMatrix4x3fv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },

  uniformBlockBinding: {
    parameters: ["u32", "u32", "u32"],
    result: "void",
  },

  validateProgram: {
    parameters: ["u32"],
    result: "void",
  },
  //#endregion

  //#region Samplers
  bindSampler: {
    parameters: ["u32", "u32"],
    result: "void",
  },

  deleteSamplers: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  genSamplers: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  getSamplerParameterfv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getSamplerParameteriv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getSamplerParameterIiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  getSamplerParameterIuiv: {
    parameters: ["u32", "i32", "pointer"],
    result: "void",
  },

  isSampler: {
    parameters: ["u32"],
    result: "i32",
  },

  samplerParameterf: {
    parameters: ["u32", "i32", "f32"],
    result: "void",
  },

  samplerParameteri: {
    parameters: ["u32", "i32", "i32"],
    result: "void",
  },
  //#endregion

  //#region Utility
  getString: {
    parameters: ["i32"],
    result: "pointer",
  },
  //#endregion

  //#region
  genFramebuffers: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  bindFramebuffer: {
    parameters: ["i32", "u32"],
    result: "void",
  },

  framebufferTexture2D: {
    parameters: ["i32", "i32", "i32", "u32", "i32"],
    result: "void",
  },

  checkFramebufferStatus: {
    parameters: ["i32"],
    result: "i32",
  },

  deleteFramebuffers: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  texStorage2D: {
    parameters: ["i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },
  //#endregion

  //#region Syncing
  clientWaitSync: {
    parameters: ["u32", "i32", "u64"],
    result: "i32",
  },

  deleteSync: {
    parameters: ["u32"],
    result: "void",
  },

  fenceSync: {
    parameters: ["i32", "i32"],
    result: "u32",
  },

  isSync: {
    parameters: ["u32"],
    result: "i32",
  },

  waitSync: {
    parameters: ["u32", "i32", "u64"],
    result: "void",
  },

  getSynciv: {
    parameters: ["u32", "i32", "i32", "pointer"],
    result: "void",
  },
  //#endregion
} as const;

export type Symbols = {
  -readonly [K in keyof typeof symbols]: {
    // Make non-readonly
    parameters: [...(typeof symbols)[K]["parameters"]];
    result: (typeof symbols)[K]["result"];
  };
};

const gl = { ...GL_CONST } as unknown as MapFFI<Symbols> & typeof GL_CONST;

function prefixGl(name: string) {
  return `gl${name[0].toUpperCase()}${name.slice(1)}`;
}

// TODO: Should FFI support dynamic calls (via pointers)?
export const LIB_PATH = new URL(
  `../dist/${OS_LIB_PREFIX}gl.${OS_LIB_SUFFIX}`,
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
        // if (glName != "glGetError") console.log(glName, args);
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
          Deno.exit();
        }
        return res;
      }) as any;
  }
}

export default gl;
