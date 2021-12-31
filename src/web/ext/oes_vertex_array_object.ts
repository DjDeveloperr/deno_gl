import gl from "../../core/opengl.ts";
import { _name, WebGLObject } from "../webgl_object.ts";

export class WebGLVertexArrayObjectOES extends WebGLObject {}

export class OESVertexArrayObject {
  VERTEX_ARRAY_BINDING_OES = 0x85B5;

  bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES) {
    gl.bindVertexArrayOES(arrayObject[_name]);
  }

  createVertexArrayOES() {
    const vao = new Uint32Array(1);
    gl.genVertexArraysOES(1, vao);
    return new WebGLVertexArrayObjectOES(vao[0]);
  }

  deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES) {
    gl.deleteVertexArraysOES(1, new Uint32Array([arrayObject[_name]]));
  }

  isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES) {
    return Boolean(gl.isVertexArrayOES(arrayObject[_name]));
  }
}
