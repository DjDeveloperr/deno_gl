export const _name = Symbol("[[glObjectName]]");
export const _invalidated = Symbol("[[invalidated]]");

export class WebGLObject {
  [_name]: number;
  [_invalidated]: boolean = false;

  constructor(name: number) {
    this[_name] = name;
    if (name === 0) {
      console.log("warn: GL object created with zero name");
    }
  }

  [Symbol.for("Deno.customInspect")]() {
    return `GLObject(${this[_name]})`;
  }
}
