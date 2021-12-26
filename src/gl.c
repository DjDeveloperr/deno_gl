#include <stdio.h>

void glClear(void (*fnptr)(int), int bit) {
  (*fnptr)(bit);
}

void glGenVertexArrays(void (*fnptr)(int, unsigned int*), unsigned int n, unsigned int* arrays) {
  (*fnptr)(n, arrays);
}

void glBindVertexArray(void (*fnptr)(unsigned int), unsigned int array) {
  (*fnptr)(array);
}

void glGenBuffers(void (*fnptr)(int, unsigned int*), int n, unsigned int* buffers) {
  (*fnptr)(n, buffers);
}

void glBindBuffer(void (*fnptr)(int, unsigned int), int target, unsigned int buffer) {
  (*fnptr)(target, buffer);
}

void glBufferData(void (*fnptr)(int, int, const void*, int), int target, int size, const void* data, int usage) {
  (*fnptr)(target, size, data, usage);
}

void glEnableVertexAttribArray(void (*fnptr)(unsigned int), unsigned int index) {
  (*fnptr)(index);
}

void glVertexAttribPointer(void (*fnptr)(unsigned int, int, int, int, int, const void*), unsigned int index, int size, int type, int normalized, int stride, const void* pointer) {
  (*fnptr)(index, size, type, normalized, stride, pointer);
}

void glDrawArrays(void (*fnptr)(int, int, int), int mode, int first, int count) {
  (*fnptr)(mode, first, count);
}

void glDisableVertexAttribArray(void (*fnptr)(unsigned int), unsigned int index) {
  (*fnptr)(index);
}

unsigned int glCreateShader(unsigned int (*fnptr)(int), int type) {
  return (*fnptr)(type);
}

void glShaderSource(
  void (*fnptr)(unsigned int, int, const char**, const int*),
  unsigned int shader,
  int count,
  const char** string,
  const int* length
) {
  (*fnptr)(shader, count, string, length);
}

void glCompileShader(void (*fnptr)(unsigned int), unsigned int shader) {
  (*fnptr)(shader);
}

void glGetShaderiv(void (*fnptr)(unsigned int, int, int*), unsigned int shader, int pname, int* params) {
  (*fnptr)(shader, pname, params);
}

void glGetShaderInfoLog(void (*fnptr)(unsigned int, int, int*, char*), unsigned int shader, int maxLength, int* length, char* infoLog) {
  (*fnptr)(shader, maxLength, length, infoLog);
}

unsigned int glCreateProgram(unsigned int (*fnptr)(void)) {
  return (*fnptr)();
}

void glAttachShader(void (*fnptr)(unsigned int, unsigned int), unsigned int program, unsigned int shader) {
  (*fnptr)(program, shader);
}

void glLinkProgram(void (*fnptr)(unsigned int), unsigned int program) {
  (*fnptr)(program);
}

void glGetProgramiv(void (*fnptr)(unsigned int, int, int*), unsigned int program, int pname, int* params) {
  (*fnptr)(program, pname, params);
}

void glGetProgramInfoLog(void (*fnptr)(unsigned int, int, int*, char*), unsigned int program, int maxLength, int* length, char* infoLog) {
  (*fnptr)(program, maxLength, length, infoLog);
}

void glDetachShader(void (*fnptr)(unsigned int, unsigned int), unsigned int program, unsigned int shader) {
  (*fnptr)(program, shader);
}

void glDeleteShader(void (*fnptr)(unsigned int), unsigned int shader) {
  (*fnptr)(shader);
}

void glUseProgram(void (*fnptr)(unsigned int), unsigned int program) {
  (*fnptr)(program);
}

void glClearColor(void (*fnptr)(float, float, float, float), float red, float green, float blue, float alpha) {
  (*fnptr)(red, green, blue, alpha);
}

unsigned int glGetError(unsigned int (*fnptr)(void)) {
  return (*fnptr)();
}

void glEnable(void (*fnptr)(int), int cap) {
  (*fnptr)(cap);
}

void MessageCallback(
  unsigned int source,
  unsigned int type,
  unsigned int id,
  unsigned int severity,
  int length,
  const char* message,
  const void* userParam
) {
  fprintf(
    stderr,
    "[%s] (type: 0x%x) (severity: 0x%x) %s\n",
    (type == 0x824C ? "ERROR" : ""),
    type,
    severity,
    message
  );
}

void glDebugMessageCallback(void (*fnptr)(void*)) {
  (*fnptr)((void*)MessageCallback);
}

void glDeleteBuffers(void (*fnptr)(int, unsigned int*), int n, unsigned int* buffers) {
  (*fnptr)(n, buffers);
}

void glDeleteVertexArrays(void (*fnptr)(int, unsigned int*), int n, unsigned int* arrays) {
  (*fnptr)(n, arrays);
}

void glDeleteProgram(void (*fnptr)(unsigned int), unsigned int program) {
  (*fnptr)(program);
}
