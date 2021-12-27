import { cstr, MapFFI, OS_LIB_PREFIX, OS_LIB_SUFFIX } from "./util.ts";
import { init } from "./opengl.ts";
import { GLFW_CONST } from "./const.ts";

export const symbols = {
  init: {
    parameters: [],
    result: "i32",
  },

  terminate: {
    parameters: [],
    result: "void",
  },

  windowHint: {
    parameters: ["i32", "i32"],
    result: "void",
  },

  createWindow: {
    parameters: [
      "i32",
      "i32",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: "pointer",
  },

  makeContextCurrent: {
    parameters: ["pointer"],
    result: "void",
  },

  setInputMode: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },

  swapBuffers: {
    parameters: ["pointer"],
    result: "void",
  },

  pollEvents: {
    parameters: [],
    result: "void",
  },

  windowShouldClose: {
    parameters: ["pointer"],
    result: "i32",
  },

  getProcAddress: {
    parameters: ["pointer"],
    result: "pointer",
  },

  defaultWindowHints: {
    parameters: [],
    result: "void",
  },

  windowHintString: {
    parameters: ["i32", "pointer"],
    result: "void",
  },

  setWindowShouldClose: {
    parameters: ["pointer", "i32"],
    result: "void",
  },

  setWindowTitle: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  setWindowIcon: {
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },

  getWindowPos: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  setWindowPos: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },

  getWindowSize: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  setWindowSizeLimits: {
    parameters: ["pointer", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  setWindowAspectRatio: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },

  setWindowSize: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },

  getFramebufferSize: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  getWindowFrameSize: {
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },

  getWindowContentScale: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  getWindowOpacity: {
    parameters: ["pointer"],
    result: "f32",
  },

  setWindowOpacity: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  iconifyWindow: {
    parameters: ["pointer"],
    result: "void",
  },

  restoreWindow: {
    parameters: ["pointer"],
    result: "void",
  },

  maximizeWindow: {
    parameters: ["pointer"],
    result: "void",
  },

  showWindow: {
    parameters: ["pointer"],
    result: "void",
  },

  hideWindow: {
    parameters: ["pointer"],
    result: "void",
  },

  focusWindow: {
    parameters: ["pointer"],
    result: "void",
  },

  requestWindowAttention: {
    parameters: ["pointer"],
    result: "void",
  },

  getWindowMonitor: {
    parameters: ["pointer"],
    result: "pointer",
  },

  setWindowMonitor: {
    parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
  },

  getWindowAttrib: {
    parameters: ["pointer", "i32"],
    result: "i32",
  },

  setWindowAttrib: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },

  setWindowUserPointer: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  getWindowUserPointer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  // TODO: callbacks

  setWindowPosCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  setWindowSizeCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  setWindowCloseCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  setWindowRefreshCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  setWindowFocusCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  setWindowIconifyCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  setWindowMaximizeCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  setFramebufferSizeCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  setWindowContentScaleCallback: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  waitEvents: {
    parameters: [],
    result: "void",
  },

  waitEventsTimeout: {
    parameters: ["f64"],
    result: "void",
  },

  postEmptyEvent: {
    parameters: [],
    result: "void",
  },

  getMonitors: {
    parameters: ["pointer"],
    result: "pointer",
  },

  getPrimaryMonitor: {
    parameters: [],
    result: "pointer",
  },

  getMonitorPos: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  getMonitorWorkarea: {
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },

  getMonitorPhysicalSize: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  getMonitorContentScale: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  getMonitorName: {
    parameters: ["pointer"],
    result: "pointer",
  },

  setMonitorUserPointer: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  getMonitorUserPointer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  setMonitorCallback: {
    parameters: ["pointer"],
    result: "pointer",
  },

  getVideoModes: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  getVideoMode: {
    parameters: ["pointer"],
    result: "pointer",
  },

  setGamma: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  getGammaRamp: {
    parameters: ["pointer"],
    result: "pointer",
  },

  setGammaRamp: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
} as const;

export type Symbols = {
  [K in keyof typeof symbols]: {
    // Make non-readonly
    parameters: [...(typeof symbols)[K]["parameters"]];
    result: (typeof symbols)[K]["result"];
  };
};

export const LIB_PATH = new URL(
  `../dist/${OS_LIB_PREFIX}glfw3.${OS_LIB_SUFFIX}`,
  import.meta.url,
);

function prefixGlfw(name: string) {
  return `glfw${name[0].toUpperCase()}${name.slice(1)}`;
}

export const lib = Deno.dlopen(
  LIB_PATH,
  Object.fromEntries(
    Object.entries(symbols).map(([name, def]) => {
      return [prefixGlfw(name), def];
    }),
  ) as unknown as Record<
    string,
    Deno.ForeignFunction
  >,
);

export function initGL() {
  init((name) =>
    lib.symbols.glfwGetProcAddress(cstr(name)) as Deno.UnsafePointer
  );
}

const glfw = Object.assign(
  Object.fromEntries(
    Object.keys(symbols).map((name) => [name, lib.symbols[prefixGlfw(name)]]),
  ),
  GLFW_CONST,
) as unknown as
  & MapFFI<Symbols>
  & typeof GLFW_CONST;

export default glfw;
