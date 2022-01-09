import { glfw } from "../core/mod.ts";
import { GlfwCanvas } from "./canvas.ts";
import { HTMLElement } from "./element.ts";
import { Image } from "./image.ts";

export class DocumentBody extends HTMLElement {}

export class DocumentElement extends HTMLElement {}

export class FakeDocument {
  documentElement = new DocumentElement();

  createElement(tagName: string) {
    if (tagName === "img") {
      return new Image();
    } else if (tagName === "canvas") {
      glfw.windowHint(glfw.VISIBLE, glfw.FALSE);
      return new GlfwCanvas("GLFW Canvas", 800, 600);
    } else {
      return new HTMLElement();
    }
  }

  createElementNS(_namespace: string, tagName: string) {
    return this.createElement(tagName);
  }

  getElementById(_id: string) {
    return new HTMLElement();
  }
}

export const document = new FakeDocument();

declare global {
  interface globalThis {
    document: typeof document;
  }
}

Object.defineProperty(globalThis, "document", {
  value: document,
  writable: false,
});
