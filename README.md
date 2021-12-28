# deno_gl

WIP Low-level OpenGL (GLFW) bindings and WebGL API implementation for Deno.

## Building

1. Make `dist` directory.
2. Build `gl` helper module: `gcc -shared -o ./dist/[lib]gl.[so|dll|dylib] ./src/gl.c`;
3. Add `[lib]glfw3.[so|dll|dylib]` to `dist`.

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr
