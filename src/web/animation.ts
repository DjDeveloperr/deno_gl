import glfw from "../core/glfw.ts";

let lastTime = 0;

export function requestAnimationFrame(callback: (delta: number) => void) {
  const currTime = performance.now();
  const timeToCall = Math.max(0, 1000 / 60 - (currTime - lastTime));
  const id = window.setTimeout(function () {
    callback(currTime + timeToCall);
    glfw.pollEvents();
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
}

export function cancelAnimationFrame(id: number) {
  clearTimeout(id);
}

declare global {
  interface Window {
    innerHeight: number;
    innerWidth: number;
    devicePixelRatio: number;
    pageXOffset: number;
    pageYOffset: number;

    requestAnimationFrame: typeof requestAnimationFrame;
    cancelAnimationFrame: typeof cancelAnimationFrame;
  }
}

Object.defineProperties(window, {
  requestAnimationFrame: {
    value: requestAnimationFrame,
    writable: false,
  },
  cancelAnimationFrame: {
    value: cancelAnimationFrame,
    writable: false,
  },
  devicePixelRatio: {
    value: 1,
  },
  pageXOffset: {
    value: 0,
  },
  pageYOffset: {
    value: 0,
  },
  innerHeight: {
    value: 600,
    writable: true,
  },
  innerWidth: {
    value: 800,
    writable: true,
  },
});
