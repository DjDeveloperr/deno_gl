# deno_gl

[WIP] OpenGL library for Deno.

TODO: Maybe higher level WebGL (2) API built on top of this?

## Building

This module is nowhere near to actual release yet. If you wanna try out,
then you can build it yourself.

1. Make `dist` directory.
2. Build `gl` helper module: `gcc -shared -o ./dist/[lib]gl.[so|dll|dylib] ./src/gl.c`;
3. Add `[lib]glfw3.[so|dll|dylib]` to `dist`.

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr
