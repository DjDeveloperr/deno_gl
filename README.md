## Note

I'm no longer working on this project because I have just realized macOS does
not support OpenGL ES API, and adding Desktop GL backend to this module is a lot
of work which I'm not going to do right now. And just dropping macOS support is
not an option for me. Feel free to contribute Desktop GL support if you wanna
work on it.

# deno_gl

WebGL API implementation for Deno, built on GLFW using FFI.

## TODO

There are couple of bugs to fix yet. Most of them are unknown, which simply
cause libraries like Tensorflow.js WebGL backend to return values zeroed out.

## Usage

1. Make `dist` directory if it doesn't exist.
2. Download GLFW from [its website](https://www.glfw.org/) and place
   `[lib]glfw3.[so|dll|dylib]` in `dist`.

## License

Apache-2.0. Check [LICENSE](LICENSE) for more info.

Copyright 2022 © DjDeveloperr
