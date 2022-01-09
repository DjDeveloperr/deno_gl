import * as JPEG from "https://deno.land/x/jpegts@1.1/mod.ts";
import * as PNG from "https://deno.land/x/pngs@0.1.1/mod.ts";
import { HTMLElement } from "./element.ts";

export class Image extends HTMLElement {
  #src = "";
  #width = 0;
  #height = 0;
  #data = new Uint8Array(0);

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get src() {
    return this.#src;
  }

  set src(src) {
    this.#src = src;
    fetch(src)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const u8 = new Uint8Array(buffer);
        // hack
        const img = src.endsWith(".png") ? PNG.decode(u8) : JPEG.decode(u8);
        this.#width = img.width;
        this.#height = img.height;
        this.#data = "data" in img ? img.data : img.image;
        this.dispatchEvent(new Event("load", { cancelable: false }));
      })
      .catch((e) => {
        this.dispatchEvent(new Event("error", { cancelable: false }));
      });
  }

  // Non-standard.
  get rawData() {
    return this.#data;
  }

  set onload(callback: EventListenerOrEventListenerObject) {
    this.addEventListener("load", callback);
  }

  set onerror(callback: EventListenerOrEventListenerObject) {
    this.addEventListener("error", callback);
  }
}
