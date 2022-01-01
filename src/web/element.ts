import type { GlfwCanvas } from "./canvas.ts";
import type { FakeDocument } from "./document.ts";

export class Element extends EventTarget {
  clientTop = 0;
  clientLeft = 0;
  children = [];

  get ownerDocument(): FakeDocument {
    return (globalThis as unknown as { document: FakeDocument }).document;
  }

  appendChild(element: Element) {
    // if (element.constructor.name === "GlfwCanvas") {
    //   (element as GlfwCanvas).show();
    // }
  }
}

export class HTMLElement extends Element {
  style: Record<string, string> = {};

  get title() {
    return "";
  }
  set title(_value: string) {}

  setPointerCapture() {}
  releasePointerCapture() {}
}
