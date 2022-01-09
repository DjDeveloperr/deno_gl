import { cstr, gl, glfw, initGL } from "../core/mod.ts";
import { WebGL2RenderingContext } from "./context.ts";
import { HTMLElement } from "./element.ts";

let init = false;

export class GlfwCanvas extends HTMLElement {
  handle: Deno.UnsafePointer;
  #title: string;

  constructor(title: string, width: number, height: number) {
    super();
    if (!init) {
      if (!glfw.init()) {
        throw new Error("Failed to initialize GLFW");
      }

      glfw.windowHint(glfw.SAMPLES, 4);
      glfw.windowHint(glfw.CLIENT_API, glfw.OPENGL_ES_API);
      glfw.windowHint(glfw.CONTEXT_VERSION_MAJOR, 3);
      glfw.windowHint(glfw.CONTEXT_VERSION_MINOR, 0);
      glfw.windowHint(glfw.RESIZABLE, glfw.FALSE);

      init = true;
    }

    this.#title = title;
    // glfw.windowHint(glfw.VISIBLE, glfw.FALSE);
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
    glfw.setInputMode(this.handle, glfw.CURSOR, glfw.CURSOR_NORMAL);

    glfw.makeContextCurrent(this.handle);
    initGL();

    gl.enable(gl.DEBUG_OUTPUT);
    gl.debugMessageCallback();
  }

  get title() {
    return this.#title;
  }

  set title(value: string) {
    glfw.setWindowTitle(this.handle, cstr(value));
    this.#title = value;
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

  getContext(type: string) {
    switch (type) {
      case "webgl":
      case "webgl2": {
        const ctx = new WebGL2RenderingContext(this, {
          alpha: false,
          depth: false,
          stencil: false,
          antialias: true,
          premultipliedAlpha: false,
          preserveDrawingBuffer: false,
          powerPreference: "default",
        });
        return new Proxy(ctx, {
          get: (t, p) => {
            const v = (t as any)[p];
            if (typeof v === "function") {
              return (...args: any[]) => {
                const result = v.apply(t, args);
                // console.log(p, args, "->", result);
                return result;
              };
            } else {
              if (v === undefined) {
                throw new Error(`${String(p)} is undefined`);
              }
              return v;
            }
          },
        });
        // return ctx;
      }

      default:
        return null;
    }
  }

  shouldClose() {
    return Boolean(glfw.windowShouldClose(this.handle));
  }

  swapBuffers() {
    glfw.swapBuffers(this.handle);
  }

  show() {
    glfw.showWindow(this.handle);
  }

  hide() {
    glfw.hideWindow(this.handle);
  }

  restore() {
    glfw.restoreWindow(this.handle);
  }

  maximize() {
    glfw.maximizeWindow(this.handle);
  }

  requestAttention() {
    glfw.requestWindowAttention(this.handle);
  }

  destroy() {
    glfw.destroyWindow(this.handle);
  }

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: this.width,
      height: this.height,
      right: this.width,
      bottom: this.height,
    };
  }

  state: any = {};

  getCurrentState() {
    const cursorPosX = new Float64Array(1);
    const cursorPosY = new Float64Array(1);
    glfw.getCursorPos(this.handle, cursorPosX, cursorPosY);
    return {
      mouseButtonLeft: Boolean(
        glfw.getMouseButton(this.handle, glfw.MOUSE_BUTTON_LEFT),
      ),
      mouseButtonRight: Boolean(glfw.getMouseButton(
        this.handle,
        glfw.MOUSE_BUTTON_RIGHT,
      )),
      mouseButtonMiddle: Boolean(glfw.getMouseButton(
        this.handle,
        glfw.MOUSE_BUTTON_MIDDLE,
      )),
      cursorX: cursorPosX[0],
      cursorY: cursorPosY[0],
    };
  }

  updateEvents() {
    const oldState = this.state;
    this.state = this.getCurrentState();
    const changed = [];
    for (const prop in oldState) {
      if (oldState[prop] !== this.state[prop]) {
        changed.push(prop);
      }
    }

    const oldPointerDown = oldState.mouseButtonLeft ||
      oldState.mouseButtonRight ||
      oldState.mouseButtonMiddle;
    const newPointerDown = this.state.mouseButtonLeft ||
      this.state.mouseButtonRight ||
      this.state.mouseButtonMiddle;

    if (changed.includes("cursorX") || changed.includes("cursorY")) {
      const data = {
        clientX: this.state.cursorX,
        clientY: this.state.cursorY,
        pageX: this.state.cursorX,
        pageY: this.state.cursorY,
      };
      this.dispatchEvent(Object.assign(new Event("pointermove"), data));
      this.dispatchEvent(Object.assign(new Event("mousemove"), data));
    }

    if (!oldPointerDown && newPointerDown) {
      const data = {
        clientX: this.state.cursorX,
        clientY: this.state.cursorY,
        pageX: this.state.cursorX,
        pageY: this.state.cursorY,
        button: this.state.mouseButtonLeft
          ? 0
          : this.state.mouseButtonMiddle
          ? 1
          : 2,
      };
      this.dispatchEvent(Object.assign(new Event("pointerdown"), data));
      this.dispatchEvent(Object.assign(new Event("mousedown"), data));
    }

    if (oldPointerDown && !newPointerDown) {
      const data = {
        clientX: this.state.cursorX,
        clientY: this.state.cursorY,
        pageX: this.state.cursorX,
        pageY: this.state.cursorY,
      };
      this.dispatchEvent(Object.assign(new Event("pointerup"), data));
      this.dispatchEvent(Object.assign(new Event("mouseup"), data));
    }
  }
}
