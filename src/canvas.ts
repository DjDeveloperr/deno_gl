// very hacky

import { GL_CONST } from "./const.ts";
import glfw, { initGL } from "./glfw.ts";
import gl from "./opengl.ts";
import { cstr } from "./util.ts";

export class WebGLTexture {
  constructor(public name: number) {}
}

export class WebGLBuffer {
  constructor(public name: number) {}
}

export class WebGLProgram {
  constructor(public name: number) {}
}

export class WebGLShader {
  constructor(public name: number) {}
}

export class WebGLFramebuffer {
  constructor(public name: number) {}
}

export class WebGLSync {
  constructor(public name: number) {}
}

export class WebGLVertexArrayObject {
  constructor(public name: number) {}
}

export class WebGLRenderbuffer {
  constructor(public name: number) {}
}

export class WebGLRenderingContext {
  constructor(public canvas: GlfwCanvas) {
    Object.assign(this, GL_CONST);
  }

  isContextLost() {
    // todo
    return false;
  }

  createTexture() {
    const tex = new Uint32Array(1);
    gl.genTextures(1, tex);
    return new WebGLTexture(tex[0]);
  }

  bindTexture(target: number, texture: WebGLTexture | null) {
    gl.bindTexture(target, texture?.name ?? 0);
  }

  texParameteri(target: number, pname: number, param: number) {
    gl.texParameteri(target, pname, param);
  }

  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    width: number,
    height: number,
    border: number,
    format: number,
    type: number,
    pixels: Uint8Array | Uint8ClampedArray | null,
  ): void;
  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    format: number,
    type: number,
    img: any,
  ): void;
  texImage2D(...args: any[]) {
    if (args.length === 9) {
      const [
        target,
        level,
        internalformat,
        width,
        height,
        border,
        format,
        type,
        pixels,
      ] = args as [
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        pixels: Uint8Array | Uint8ClampedArray | null,
      ];
      gl.texImage2D(
        target,
        level,
        internalformat ?? 0,
        width,
        height,
        border,
        format,
        type,
        pixels,
      );
    } else if (args.length === 6) {
      const [target, level, internalformat, format, type, img] = args as [
        target: number,
        level: number,
        internalformat: number,
        format: number,
        type: number,
        img: any,
      ];
      gl.texImage2D(
        target,
        level,
        internalformat,
        img.width,
        img.height,
        0,
        format,
        type,
        img.rawData,
      );
    } else {
      throw new Error("Invalid arguments");
    }
  }

  clearColor(r: number, g: number, b: number, a: number) {
    gl.clearColor(r, g, b, a);
  }

  clearDepth(depth: number) {
    gl.clearDepth(depth);
  }

  clearStencil(s: number) {
    gl.clearStencil(s);
  }

  enable(id: number) {
    gl.enable(id);
  }

  depthFunc(func: number) {
    gl.depthFunc(func);
  }

  frontFace(mode: number) {
    gl.frontFace(mode);
  }

  cullFace(mode: number) {
    gl.cullFace(mode);
  }

  getContextAttributes() {
    return {
      alpha: true,
      antialias: true,
      depth: true,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      desynchronized: false,
    };
  }

  viewport(x: number, y: number, width: number, height: number) {
    gl.viewport(x, y, width, height);
  }

  createBuffer() {
    const buf = new Uint32Array(1);
    gl.genBuffers(1, buf);
    return new WebGLBuffer(buf[0]);
  }

  bindBuffer(target: number, buffer: WebGLBuffer | null) {
    gl.bindBuffer(target, buffer?.name ?? 0);
  }

  bufferData(
    target: number,
    data: Uint8Array | Float32Array | Uint16Array | number,
    usage: number,
  ) {
    data = typeof data === "number" ? new Uint8Array([data]) : data;
    gl.bufferData(target, data.byteLength, data, usage);
  }

  clear(mask: number) {
    gl.clear(mask);
  }

  createProgram() {
    return new WebGLProgram(gl.createProgram());
  }

  createShader(type: number) {
    return new WebGLShader(gl.createShader(type));
  }

  // i = 0;

  shaderSource(shader: WebGLShader, source: string) {
    // Deno.writeTextFileSync(`shader${this.i++}.glsl`, source);
    const ptr = new BigUint64Array(1);
    ptr[0] = Deno.UnsafePointer.of(cstr(source)).value;
    gl.shaderSource(shader.name, 1, ptr, null);
  }

  compileShader(shader: WebGLShader) {
    gl.compileShader(shader.name);
  }

  attachShader(program: WebGLProgram, shader: WebGLShader) {
    gl.attachShader(program.name, shader.name);
  }

  detachShader(program: WebGLProgram, shader: WebGLShader) {
    gl.detachShader(program.name, shader.name);
  }

  linkProgram(program: WebGLProgram) {
    gl.linkProgram(program.name);
  }

  getProgramInfoLog(program: WebGLProgram) {
    const infoLogLength = new Uint32Array(1);
    gl.getProgramiv(
      program.name,
      gl.INFO_LOG_LENGTH,
      infoLogLength,
    );
    if (infoLogLength[0] === 0) {
      return "";
    }
    const log = new Uint8Array(infoLogLength[0]);
    gl.getProgramInfoLog(program.name, log.byteLength, null, log);
    return new TextDecoder().decode(log);
  }

  getShaderInfoLog(shader: WebGLShader) {
    const infoLogLength = new Uint32Array(1);
    gl.getShaderiv(shader.name, gl.INFO_LOG_LENGTH, infoLogLength);
    if (infoLogLength[0] === 0) {
      return "";
    }
    const log = new Uint8Array(infoLogLength[0]);
    gl.getShaderInfoLog(shader.name, log.byteLength, null, log);
    return new TextDecoder().decode(log);
  }

  getProgramParameter(program: WebGLProgram, pname: number) {
    const params = new Int32Array(1);
    gl.getProgramiv(program.name, pname, params);
    return params[0];
  }

  deleteShader(shader: WebGLShader) {
    gl.deleteShader(shader.name);
  }

  useProgram(program: WebGLProgram | null) {
    gl.useProgram(program?.name ?? 0);
  }

  depthMask(flag: number) {
    gl.depthMask(Number(flag));
  }

  deleteBuffer(buffer: WebGLBuffer) {
    gl.deleteBuffers(1, new Uint32Array([buffer.name]));
  }

  deleteProgram(program: WebGLProgram) {
    gl.deleteProgram(program.name);
  }

  colorMask(r: number, g: number, b: number, a: number) {
    gl.colorMask(Number(r), Number(g), Number(b), Number(a));
  }

  disable(id: number) {
    gl.disable(id);
  }

  drawElements(
    mode: number,
    count: number,
    type: number,
    offset: number,
  ) {
    gl.drawElements(mode, count, type, new Deno.UnsafePointer(BigInt(offset)));
  }

  drawArrays(mode: number, first: number, count: number) {
    gl.drawArrays(mode, first, count);
  }

  getActiveUniform(program: WebGLProgram, index: number) {
    const buf = new Uint8Array(256);
    const length = new Uint32Array(1);
    const size = new Uint32Array(1);
    const type = new Uint32Array(1);
    gl.getActiveUniform(
      program.name,
      index,
      buf.byteLength,
      length,
      size,
      type,
      buf,
    );
    return {
      name: new TextDecoder().decode(buf.subarray(0, length[0])),
      size: size[0],
      type: type[0],
    };
  }

  getUniformLocation(program: WebGLProgram, name: string) {
    return gl.getUniformLocation(program.name, cstr(name));
  }

  uniformMatrix4fv(
    location: number,
    transpose: number,
    value: Float32Array,
  ) {
    gl.uniformMatrix4fv(
      location,
      1,
      Number(transpose),
      value,
    );
  }

  uniform1f(location: number, v0: number) {
    gl.uniform1f(location, isNaN(v0) ? 0 : v0);
  }

  uniform1fv(location: number, value: Float32Array) {
    gl.uniform1fv(location, 1, value);
  }

  uniform3f(location: number, v0: number, v1: number, v2: number) {
    gl.uniform3f(location, v0, v1, v2);
  }

  activeTexture(texture: number) {
    gl.activeTexture(texture);
  }

  uniform1i(location: number, v0: number) {
    gl.uniform1i(location, Number(v0));
  }

  uniform2iv(location: number, value: Int32Array) {
    gl.uniform2iv(location, 1, new Int32Array(value));
  }

  uniform3fv(location: number, value: Float32Array) {
    gl.uniform3fv(location, 1, new Float32Array(value));
  }

  readPixels(
    x: number,
    y: number,
    width: number,
    height: number,
    format: number,
    type: number,
    pixels: Float32Array | Uint8Array | number,
  ) {
    gl.readPixels(
      x,
      y,
      width,
      height,
      format,
      type,
      typeof pixels === "number"
        ? new Deno.UnsafePointer(BigInt(pixels))
        : pixels,
    );

    return pixels;
  }

  texSubImage2D(
    target: number,
    level: number,
    xoffset: number,
    yoffset: number,
    width: number,
    height: number,
    format: number,
    type: number,
    pixels: Uint8Array,
  ) {
    gl.texSubImage2D(
      target,
      level,
      xoffset,
      yoffset,
      width,
      height,
      format,
      type,
      pixels,
    );
  }

  uniform3iv(location: number, value: Int32Array) {
    gl.uniform3iv(location, value.length, new Int32Array(value));
  }

  uniformMatrix3fv(
    location: number,
    transpose: number,
    value: Float32Array,
  ) {
    gl.uniformMatrix3fv(
      location,
      1,
      Number(transpose),
      value,
    );
  }

  getActiveAttrib(program: WebGLProgram, index: number) {
    const buf = new Uint8Array(256);
    const length = new Uint32Array(1);
    const size = new Uint32Array(1);
    const type = new Uint32Array(1);
    gl.getActiveAttrib(
      program.name,
      index,
      buf.byteLength,
      length,
      size,
      type,
      buf,
    );
    return {
      name: new TextDecoder().decode(buf.subarray(0, length[0])),
      size: size[0],
      type: type[0],
    };
  }

  getAttribLocation(program: WebGLProgram, name: string) {
    return gl.getAttribLocation(program.name, cstr(name));
  }

  enableVertexAttribArray(index: number) {
    gl.enableVertexAttribArray(index);
  }

  vertexAttribPointer(
    index: number,
    size: number,
    type: number,
    normalized: number,
    stride: number,
    offset: number,
  ) {
    gl.vertexAttribPointer(
      index,
      size,
      type,
      Number(normalized),
      stride,
      new Deno.UnsafePointer(BigInt(offset)),
    );
  }

  createFramebuffer() {
    const fb = new Uint32Array(1);
    gl.genFramebuffers(1, fb);
    return new WebGLFramebuffer(fb[0]);
  }

  bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null) {
    gl.bindFramebuffer(target, framebuffer?.name ?? 0);
  }

  framebufferTexture2D(
    target: number,
    attachment: number,
    textarget: number,
    texture: WebGLTexture | null,
    level: number,
  ) {
    gl.framebufferTexture2D(
      target,
      attachment,
      textarget,
      texture?.name ?? 0,
      level,
    );
  }

  checkFramebufferStatus(target: number) {
    return gl.checkFramebufferStatus(target);
  }

  deleteTexture(texture: WebGLTexture) {
    gl.deleteTextures(1, new Uint32Array([texture.name]));
  }

  deleteFramebuffer(framebuffer: WebGLFramebuffer) {
    gl.deleteFramebuffers(1, new Uint32Array([framebuffer.name]));
  }

  createRenderbuffer() {
    const rb = new Uint32Array(1);
    gl.genRenderbuffers(1, rb);
    return new WebGLRenderbuffer(rb[0]);
  }

  bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer | null) {
    gl.bindRenderbuffer(target, renderbuffer?.name ?? 0);
  }

  renderbufferStorage(
    target: number,
    internalformat: number,
    width: number,
    height: number,
  ) {
    gl.renderbufferStorage(target, internalformat, width, height);
  }

  framebufferRenderbuffer(
    target: number,
    attachment: number,
    renderbuffertarget: number,
    renderbuffer: WebGLRenderbuffer | null,
  ) {
    gl.framebufferRenderbuffer(
      target,
      attachment,
      renderbuffertarget,
      renderbuffer?.name ?? 0,
    );
  }

  pixelStorei(pname: number, param: number) {
    gl.pixelStorei(Number(pname), Number(param));
  }

  texParameterf(
    target: number,
    pname: number,
    param: number,
  ) {
    gl.texParameterf(target, pname, param);
  }

  texStorage2D(
    target: number,
    levels: number,
    internalformat: number,
    width: number,
    height: number,
  ) {
    gl.texStorage2D(
      target,
      levels,
      internalformat,
      width,
      height,
    );
  }

  getShaderParameter(shader: WebGLShader, pname: number) {
    const params = new Int32Array(1);
    gl.getShaderiv(shader.name, pname, params);
    return params[0];
  }

  scissor(x: number, y: number, width: number, height: number) {
    gl.scissor(x, y, width, height);
  }

  fenceSync(condition: number, flags: number) {
    const sync = gl.fenceSync(condition, flags);
    return new WebGLSync(sync);
  }

  flush() {
    gl.flush();
  }

  clientWaitSync(sync: WebGLSync, flags: number, timeout: number) {
    return gl.clientWaitSync(sync.name, flags, timeout);
  }

  getBufferSubData(
    target: number,
    srcByteOffset: number,
    dstData: ArrayBufferView,
    dstOffset?: number,
    length?: number,
  ) {
    dstOffset = dstOffset ?? dstData.byteOffset;
    length = length ?? dstData.byteLength;
    const u8 = new Uint8Array(dstData.buffer, dstOffset, length);
    gl.getBufferSubData(
      target,
      srcByteOffset,
      length,
      u8,
    );
  }

  getShaderPrecisionFormat(
    shadertype: number,
    precisiontype: number,
  ) {
    const range = new Int32Array(2);
    const precision = new Int32Array(1);
    gl.getShaderPrecisionFormat(shadertype, precisiontype, range, precision);
    return {
      rangeLow: range[0],
      rangeHigh: range[1],
      precision,
    };
  }

  generateMipmap(target: number) {
    gl.generateMipmap(target);
  }

  getExtension(name: string) {
    if (!glfw.extensionSupported(cstr("GL_" + name))) {
      return null;
    }

    switch (name) {
      case "EXT_color_buffer_float":
      case "OES_texture_float":
      case "OES_texture_half_float":
      case "OES_texture_half_float_linear":
      case "OES_standard_derivatives":
      case "OES_element_index_uint":
      case "OES_texture_float_linear":
      case "EXT_color_buffer_half_float":
      case "EXT_blend_minmax":
      case "EXT_frag_depth":
      case "EXT_shader_texture_lod":
        return {};

      case "EXT_texture_filter_anisotropic":
        return {
          TEXTURE_MAX_ANISOTROPY_EXT: 0x84FE,
          MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84FF,
        };

      case "OES_vertex_array_object":
        return {
          createVertexArrayOES: () => {
            const vbo = new Uint32Array(1);
            gl.genVertexArrays(1, vbo);
            return new WebGLVertexArrayObject(vbo[0]);
          },

          bindVertexArrayOES: (vao: WebGLVertexArrayObject | null) => {
            gl.bindVertexArray(vao?.name ?? 0);
          },
        };

      default:
        throw new Error("Unsupported extension: " + name);
    }
  }

  getParameter(name: number) {
    switch (name) {
      case undefined:
        throw new Error("Invalid parameter name: undefined");

      case gl.MAX_TEXTURE_SIZE:
      case gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS:
      case gl.MAX_CUBE_MAP_TEXTURE_SIZE:
      case gl.MAX_VERTEX_ATTRIBS:
      case gl.MAX_VERTEX_UNIFORM_VECTORS:
      case gl.MAX_VARYING_VECTORS:
      case gl.MAX_FRAGMENT_UNIFORM_VECTORS:
      case gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS:
      case gl.IMPLEMENTATION_COLOR_READ_FORMAT:
      case gl.IMPLEMENTATION_COLOR_READ_TYPE:
      case gl.MAX_TEXTURE_MAX_ANISOTROPY:
      case gl.MAX_TEXTURE_IMAGE_UNITS: {
        const v = new Uint32Array(1);
        gl.getIntegerv(name, v);
        return v[0];
      }

      case gl.SCISSOR_BOX: {
        const v = new Int32Array(4);
        gl.getIntegerv(name, v);
        return v;
      }

      case gl.VIEWPORT: {
        const v = new Int32Array(4);
        gl.getIntegerv(name, v);
        return v;
      }

      case gl.VERSION: {
        return new Deno.UnsafePointerView(gl.getString(gl.VERSION))
          .getCString();
      }

      default: {
        const v = Object.entries(gl).find(([, v]) => v === name)?.[0] ??
          "Unknown";
        throw new Error(
          `[gl::stub] getParameter(${name}) not implemented: ${v} (${name}, 0x${
            name.toString(16)
          })`,
        );
      }
    }
  }
}

export class GlfwCanvas {
  handle: Deno.UnsafePointer;
  style: any = {};

  constructor(title: string, width: number, height: number) {
    this.handle = glfw.createWindow(width, height, cstr(title), null, null);
    if (this.handle.value === 0n) {
      const errptr = new BigUint64Array(1);
      throw new Error(
        `Failed to create window ${glfw.getError(errptr)} ${
          new Deno.UnsafePointerView(new Deno.UnsafePointer(errptr[0]))
            .getCString()
        }`,
      );
    }
    glfw.setInputMode(this.handle, glfw.STICKY_KEYS, gl.TRUE);
    glfw.makeContextCurrent(this.handle);
    initGL();
    gl.enable(gl.DEBUG_OUTPUT);
    gl.debugMessageCallback();
  }

  get width() {
    const width = new Int32Array(1);
    const height = new Int32Array(1);
    glfw.getWindowSize(this.handle, width, height);
    return width[0];
  }

  set width(value: number) {
    if (isNaN(value)) {
      throw new Error("width must be a number");
    }
    glfw.setWindowSize(this.handle, value, this.height);
  }

  get height() {
    const width = new Int32Array(1);
    const height = new Int32Array(1);
    glfw.getWindowSize(this.handle, width, height);
    return height[0];
  }

  set height(value: number) {
    if (isNaN(value)) {
      throw new Error("height must be a number");
    }
    glfw.setWindowSize(this.handle, this.width, value);
  }

  getContext(_type: string) {
    const ctx = new WebGLRenderingContext(this);
    // return ctx;
    return new Proxy(ctx, {
      get: (t, p, r) => {
        if (!(p in t)) {
          throw new Error(`${String(p)} not in t`);
        } else {
          return (t as any)[p];
        }
      },
    });
  }

  destroy() {
    glfw.destroyWindow(this.handle);
  }

  addEventListener(type: string, listener: any) {
    console.log("[canvas::stub] addEventListener", type);
  }
}