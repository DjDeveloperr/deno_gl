#include <stdio.h>
#include <stdint.h>

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

unsigned int glGetUniformLocation(unsigned int (*fnptr)(unsigned int, const char*), unsigned int program, const char* name) {
  (*fnptr)(program, name);
}

void glDepthFunc(void (*fnptr)(int), int func) {
  (*fnptr)(func);
}

void glActiveTexture(void (*fnptr)(int), int texture) {
  (*fnptr)(texture);
}

void glBindTexture(void (*fnptr)(int, unsigned int), int target, unsigned int texture) {
  (*fnptr)(target, texture);
}

void glCompressedTexImage1D(void (*fnptr)(int, int, int, int, int, int, const void*), int target, int level, int internalformat, int width, int border, int imageSize, const void* data) {
  (*fnptr)(target, level, internalformat, width, border, imageSize, data);
}

void glCompressedTexImage2D(void (*fnptr)(int, int, int, int, int, int, int, const void*), int target, int level, int internalformat, int width, int height, int border, int imageSize, const void* data) {
  (*fnptr)(target, level, internalformat, width, height, border, imageSize, data);
}

void glCompressedTexImage3D(void (*fnptr)(int, int, int, int, int, int, int, int, const void*), int target, int level, int internalformat, int width, int height, int depth, int border, int imageSize, const void* data) {
  (*fnptr)(target, level, internalformat, width, height, depth, border, imageSize, data);
}

void glCompressedTexSubImage1D(void (*fnptr)(int, int, int, int, int, int, const void*), int target, int level, int xoffset, int width, int format, int imageSize, const void* data) {
  (*fnptr)(target, level, xoffset, width, format, imageSize, data);
}

void glCompressedTexSubImage2D(void (*fnptr)(int, int, int, int, int, int, int, int, const void*), int target, int level, int xoffset, int yoffset, int width, int height, int format, int imageSize, const void* data) {
  (*fnptr)(target, level, xoffset, yoffset, width, height, format, imageSize, data);
}

void glCompressedTexSubImage3D(void (*fnptr)(int, int, int, int, int, int, int, int, int, int, const void*), int target, int level, int xoffset, int yoffset, int zoffset, int width, int height, int depth, int format, int imageSize, const void* data) {
  (*fnptr)(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
}

void glCopyTexImage1D(void (*fnptr)(int, int, int, int, int, int, int), int target, int level, int internalformat, int x, int y, int width, int border) {
  (*fnptr)(target, level, internalformat, x, y, width, border);
}

void glCopyTexImage2D(void (*fnptr)(int, int, int, int, int, int, int, int), int target, int level, int internalformat, int x, int y, int width, int height, int border) {
  (*fnptr)(target, level, internalformat, x, y, width, height, border);
}

void glCopyTexSubImage1D(void (*fnptr)(int, int, int, int, int, int), int target, int level, int xoffset, int x, int y, int width) {
  (*fnptr)(target, level, xoffset, x, y, width);
}

void glCopyTexSubImage2D(void (*fnptr)(int, int, int, int, int, int, int, int), int target, int level, int xoffset, int yoffset, int x, int y, int width, int height) {
  (*fnptr)(target, level, xoffset, yoffset, x, y, width, height);
}

void glDeleteTextures(void (*fnptr)(int, unsigned int*), int n, unsigned int* textures) {
  (*fnptr)(n, textures);
}

void glGenTextures(void (*fnptr)(int, unsigned int*), int n, unsigned int* textures) {
  (*fnptr)(n, textures);
}

void glGetCompressedTexImage(void (*fnptr)(int, int, void*), int target, int level, void* img) {
  (*fnptr)(target, level, img);
}

void glGetTexImage(void (*fnptr)(int, int, int, int, void*), int target, int level, int format, int ty, void* img) {
  (*fnptr)(target, level, format, ty, img);
}

void glGetTexLevelParameterfv(void (*fnptr)(int, int, int, float*), int target, int level, int pname, float* params) {
  (*fnptr)(target, level, pname, params);
}

void glGetTexLevelParameteriv(void (*fnptr)(int, int, int, int*), int target, int level, int pname, int* params) {
  (*fnptr)(target, level, pname, params);
}

void glGetTexParameterfv(void (*fnptr)(int, int, float*), int target, int pname, float* params) {
  (*fnptr)(target, pname, params);
}

void glGetTexParameteriv(void (*fnptr)(int, int, int*), int target, int pname, int* params) {
  (*fnptr)(target, pname, params);
}

void glGetTexParameterIiv(void (*fnptr)(int, int, int*), int target, int pname, int* params) {
  (*fnptr)(target, pname, params);
}

void glGetTexParameterIuiv(void (*fnptr)(int, int, unsigned int*), int target, int pname, unsigned int* params) {
  (*fnptr)(target, pname, params);
}

int glIsTexture(int (*fnptr)(unsigned int), unsigned int texture) {
  return (*fnptr)(texture);
}

void glTexBuffer(void (*fnptr)(int, int, unsigned int), int target, int internalformat, unsigned int buffer) {
  (*fnptr)(target, internalformat, buffer);
}

void glTexImage1D(void (*fnptr)(int, int, int, int, int, int, int, const void*), int target, int level, int internalformat, int width, int border, int format, int ty, const void* data) {
  (*fnptr)(target, level, internalformat, width, border, format, ty, data);
}

void glTexImage2D(void (*fnptr)(int, int, int, int, int, int, int, int, const void*), int target, int level, int internalformat, int width, int height, int border, int format, int ty, const void* data) {
  (*fnptr)(target, level, internalformat, width, height, border, format, ty, data);
}

void glTexImage2DMultisample(void (*fnptr)(int, int, int, int, int, int), int target, int samples, int internalformat, int width, int height, int fixedsamplelocations) {
  (*fnptr)(target, samples, internalformat, width, height, fixedsamplelocations);
}

void glTexImage3D(void (*fnptr)(int, int, int, int, int, int, int, int, int, const void*), int target, int level, int internalformat, int width, int height, int depth, int border, int format, int ty, const void* data) {
  (*fnptr)(target, level, internalformat, width, height, depth, border, format, ty, data);
}

void glTexImage3DMultisample(void (*fnptr)(int, int, int, int, int, int, int), int target, int samples, int internalformat, int width, int height, int depth, int fixedsamplelocations) {
  (*fnptr)(target, samples, internalformat, width, height, depth, fixedsamplelocations);
}

void glTexParameterf(void (*fnptr)(int, int, float), int target, int pname, float param) {
  (*fnptr)(target, pname, param);
}

void glTexParameteri(void (*fnptr)(int, int, int), int target, int pname, int param) {
  (*fnptr)(target, pname, param);
}

void glTexSubImage1D(void (*fnptr)(int, int, int, int, int, int, const void*), int target, int level, int xoffset, int width, int format, int ty, const void* data) {
  (*fnptr)(target, level, xoffset, width, format, ty, data);
}

void glTexSubImage2D(void (*fnptr)(int, int, int, int, int, int, int, int, const void*), int target, int level, int xoffset, int yoffset, int width, int height, int format, int ty, const void* data) {
  (*fnptr)(target, level, xoffset, yoffset, width, height, format, ty, data);
}

void glTexSubImage3D(void (*fnptr)(int, int, int, int, int, int, int, int, int, int, const void*), int target, int level, int xoffset, int yoffset, int zoffset, int width, int height, int depth, int format, int ty, const void* data) {
  (*fnptr)(target, level, xoffset, yoffset, zoffset, width, height, depth, format, ty, data);
}

int glIsVertexArray(int (*fnptr)(unsigned int), unsigned int array) {
  return (*fnptr)(array);
}

void glClearBufferiv(void (*fnptr)(int, int, const int*), int buffer, int drawbuffer, const int* value) {
  (*fnptr)(buffer, drawbuffer, value);
}

void glClearBufferuiv(void (*fnptr)(int, int, const unsigned int*), int buffer, int drawbuffer, const unsigned int* value) {
  (*fnptr)(buffer, drawbuffer, value);
}

void glClearBufferfv(void (*fnptr)(int, int, const float*), int buffer, int drawbuffer, const float* value) {
  (*fnptr)(buffer, drawbuffer, value);
}

void glClearBufferfi(void (*fnptr)(int, int, float, int), int buffer, int drawbuffer, float depth, int stencil) {
  (*fnptr)(buffer, drawbuffer, depth, stencil);
}

void glClearDepth(void (*fnptr)(float), float d) {
  (*fnptr)(d);
}

void glClearStencil(void (*fnptr)(int), int s) {
  (*fnptr)(s);
}

void glDrawBuffer(void (*fnptr)(int), int buf) {
  (*fnptr)(buf);
}

void glFinish(void (*fnptr)(void)) {
  (*fnptr)();
}

void glFlush(void (*fnptr)(void)) {
  (*fnptr)();
}

void glReadBuffer(void (*fnptr)(int), int src) {
  (*fnptr)(src);
}

void glReadPixels(void (*fnptr)(int, int, int, int, int, int, void*), int x, int y, int width, int height, int format, int ty, void* pixels) {
  (*fnptr)(x, y, width, height, format, ty, pixels);
}

void glBlendColor(void (*fnptr)(float, float, float, float), float red, float green, float blue, float alpha) {
  (*fnptr)(red, green, blue, alpha);
}

void glBlendEquation(void (*fnptr)(int), int mode) {
  (*fnptr)(mode);
}

void glBlendEquationSeparate(void (*fnptr)(int, int), int modeRGB, int modeAlpha) {
  (*fnptr)(modeRGB, modeAlpha);
}

void glBlendFunc(void (*fnptr)(int, int), int sfactor, int dfactor) {
  (*fnptr)(sfactor, dfactor);
}

void glBlendFuncSeparate(void (*fnptr)(int, int, int, int), int srcRGB, int dstRGB, int srcAlpha, int dstAlpha) {
  (*fnptr)(srcRGB, dstRGB, srcAlpha, dstAlpha);
}

void glClampColor(void (*fnptr)(int, int), int target, int clamp) {
  (*fnptr)(target, clamp);
}

void glColorMask(void (*fnptr)(int, int, int, int), int red, int green, int blue, int alpha) {
  (*fnptr)(red, green, blue, alpha);
}

void glColorMaski(void (*fnptr)(unsigned int, int, int, int, int), unsigned int index, int r, int g, int b, int a) {
  (*fnptr)(index, r, g, b, a);
}

void glCullFace(void (*fnptr)(int), int mode) {
  (*fnptr)(mode);
}

void glDepthMask(void (*fnptr)(int), int flag) {
  (*fnptr)(flag);
}

void glDepthRange(void (*fnptr)(float, float), float n, float f) {
  (*fnptr)(n, f);
}

void glDisable(void (*fnptr)(int), int cap) {
  (*fnptr)(cap);
}

void glFrontFace(void (*fnptr)(int), int mode) {
  (*fnptr)(mode);
}

void glGetBooleanv(void (*fnptr)(int, int*), int pname, int* params) {
  (*fnptr)(pname, params);
}

void glGetDoublev(void (*fnptr)(int, double*), int pname, double* params) {
  (*fnptr)(pname, params);
}

void glGetFloatv(void (*fnptr)(int, float*), int pname, float* params) {
  (*fnptr)(pname, params);
}

void glGetIntegerv(void (*fnptr)(int, int*), int pname, int* params) {
  (*fnptr)(pname, params);
}

void glGetInteger64v(void (*fnptr)(int, int64_t*), int pname, int64_t* params) {
  (*fnptr)(pname, params);
}

void glGetBooleani_v(void (*fnptr)(int, unsigned int, int*), int target, unsigned int index, int* data) {
  (*fnptr)(target, index, data);
}

void glGetIntegeri_v(void (*fnptr)(int, unsigned int, int*), int target, unsigned int index, int* data) {
  (*fnptr)(target, index, data);
}

void glGetInteger64i_v(void (*fnptr)(int, unsigned int, int64_t*), int target, unsigned int index, int64_t* data) {
  (*fnptr)(target, index, data);
}

void glHint(void (*fnptr)(int, int), int target, int mode) {
  (*fnptr)(target, mode);
}

int glIsEnabled(int (*fnptr)(int), int cap) {
  return (*fnptr)(cap);
}

int glIsEnabledi(int (*fnptr)(int, unsigned int), int target, unsigned int index) {
  return (*fnptr)(target, index);
}

void glEnablei(void (*fnptr)(int, unsigned int), int target, unsigned int index) {
  (*fnptr)(target, index);
}

void glDisablei(void (*fnptr)(int, unsigned int), int target, unsigned int index) {
  (*fnptr)(target, index);
}

void glLineWidth(void (*fnptr)(float), float width) {
  (*fnptr)(width);
}

void glLogicOp(void (*fnptr)(int), int opcode) {
  (*fnptr)(opcode);
}

void glPixelStoref(void (*fnptr)(int, float), int pname, float param) {
  (*fnptr)(pname, param);
}

void glPixelStorei(void (*fnptr)(int, int), int pname, int param) {
  (*fnptr)(pname, param);
}

void glPointParameterf(void (*fnptr)(int, float), int pname, float param) {
  (*fnptr)(pname, param);
}

void glPointParameteri(void (*fnptr)(int, int), int pname, int param) {
  (*fnptr)(pname, param);
}

void glPointSize(void (*fnptr)(float), float size) {
  (*fnptr)(size);
}

void glPolygonMode(void (*fnptr)(int, int), int face, int mode) {
  (*fnptr)(face, mode);
}

void glPolygonOffset(void (*fnptr)(float, float), float factor, float units) {
  (*fnptr)(factor, units);
}

void glSampleCoverage(void (*fnptr)(float, int), float value, int invert) {
  (*fnptr)(value, invert);
}

void glScissor(void (*fnptr)(int, int, int, int), int x, int y, int width, int height) {
  (*fnptr)(x, y, width, height);
}

void glStencilFunc(void (*fnptr)(int, int, unsigned int), int func, int ref, unsigned int mask) {
  (*fnptr)(func, ref, mask);
}

void glStencilFuncSeparate(void (*fnptr)(int, int, unsigned int, int), int face, int func, int ref, unsigned int mask) {
  (*fnptr)(face, func, ref, mask);
}

void glStencilMask(void (*fnptr)(unsigned int), unsigned int mask) {
  (*fnptr)(mask);
}

void glStencilMaskSeparate(void (*fnptr)(int, unsigned int), int face, unsigned int mask) {
  (*fnptr)(face, mask);
}

void glStencilOp(void (*fnptr)(int, int, int), int fail, int zfail, int zpass) {
  (*fnptr)(fail, zfail, zpass);
}

void glStencilOpSeparate(void (*fnptr)(int, int, int, int), int face, int sfail, int dpfail, int dppass) {
  (*fnptr)(face, sfail, dpfail, dppass);
}

void glViewport(void (*fnptr)(int, int, int, int), int x, int y, int width, int height) {
  (*fnptr)(x, y, width, height);
}

void glValidateProgram(void (*fnptr)(unsigned int), unsigned int program) {
  (*fnptr)(program);
}

void glBindAttribLocation(void (*fnptr)(unsigned int, unsigned int, const char*), unsigned int program, unsigned int index, const char* name) {
  (*fnptr)(program, index, name);
}

void glBindFragDataLocation(void (*fnptr)(unsigned int, unsigned int, const char*), unsigned int program, unsigned int color, const char* name) {
  (*fnptr)(program, color, name);
}

void glBindFragDataLocationIndexed(void (*fnptr)(unsigned int, unsigned int, unsigned int, const char*), unsigned int program, unsigned int colorNumber, unsigned int index, const char* name) {
  (*fnptr)(program, colorNumber, index, name);
}

void glGetActiveAttrib(void (*fnptr)(unsigned int, unsigned int, int, int*, int*, int*, char*), unsigned int program, unsigned int index, int bufSize, int* length, int* size, int* type, char* name) {
  (*fnptr)(program, index, bufSize, length, size, type, name);
}

void glGetActiveUniform(void (*fnptr)(unsigned int, unsigned int, int, int*, int*, int*, char*), unsigned int program, unsigned int index, int bufSize, int* length, int* size, int* type, char* name) {
  (*fnptr)(program, index, bufSize, length, size, type, name);
}

void glGetActiveUniformBlockiv(void (*fnptr)(unsigned int, unsigned int, int, int*), unsigned int program, unsigned int uniformBlockIndex, int pname, int* params) {
  (*fnptr)(program, uniformBlockIndex, pname, params);
}

void glGetActiveUniformBlockName(void (*fnptr)(unsigned int, unsigned int, int, int*, char*), unsigned int program, unsigned int uniformBlockIndex, int bufSize, int* length, char* uniformBlockName) {
  (*fnptr)(program, uniformBlockIndex, bufSize, length, uniformBlockName);
}

void glGetActiveUniformName(void (*fnptr)(unsigned int, unsigned int, int, int*, char*), unsigned int program, unsigned int uniformIndex, int bufSize, int* length, char* uniformName) {
  (*fnptr)(program, uniformIndex, bufSize, length, uniformName);
}

void glGetActiveUniformsiv(void (*fnptr)(unsigned int, int, unsigned int*, int, int*), unsigned int program, int uniformCount, unsigned int* uniformIndices, int pname, int* params) {
  (*fnptr)(program, uniformCount, uniformIndices, pname, params);
}

void glGetAttachedShaders(void (*fnptr)(unsigned int, int, int*, unsigned int*), unsigned int program, int maxCount, int* count, unsigned int* shaders) {
  (*fnptr)(program, maxCount, count, shaders);
}

int glGetAttribLocation(int (*fnptr)(unsigned int, const char*), unsigned int program, const char* name) {
  return (*fnptr)(program, name);
}

int glGetFragDataIndex(int (*fnptr)(unsigned int, const char*), unsigned int program, const char* name) {
  return (*fnptr)(program, name);
}

int glGetFragDataLocation(int (*fnptr)(unsigned int, const char*), unsigned int program, const char* name) {
  return (*fnptr)(program, name);
}

void glGetShaderSource(void (*fnptr)(unsigned int, int, int*, char*), unsigned int shader, int bufSize, int* length, char* source) {
  (*fnptr)(shader, bufSize, length, source);
}

void glGetUniformfv(void (*fnptr)(unsigned int, int, float*), unsigned int program, int location, float* params) {
  (*fnptr)(program, location, params);
}

void glGetUniformiv(void (*fnptr)(unsigned int, int, int*), unsigned int program, int location, int* params) {
  (*fnptr)(program, location, params);
}

void glGetUniformuiv(void (*fnptr)(unsigned int, int, unsigned int*), unsigned int program, int location, unsigned int* params) {
  (*fnptr)(program, location, params);
}

unsigned int glGetUniformBlockIndex(unsigned int (*fnptr)(unsigned int, const char*), unsigned int program, const char* uniformBlockName) {
  (*fnptr)(program, uniformBlockName);
}

void glGetUniformIndices(void (*fnptr)(unsigned int, int, const char**, unsigned int*), unsigned int program, int uniformCount, const char** uniformNames, unsigned int* uniformIndices) {
  (*fnptr)(program, uniformCount, uniformNames, uniformIndices);
}

int glIsProgram(int (*fnptr)(unsigned int), unsigned int program) {
  return (*fnptr)(program);
}

int glIsShader(int (*fnptr)(unsigned int), unsigned int shader) {
  return (*fnptr)(shader);
}

void glUniform1f(void (*fnptr)(int, float), int location, float v0) {
  (*fnptr)(location, v0);
}

void glUniform2f(void (*fnptr)(int, float, float), int location, float v0, float v1) {
  (*fnptr)(location, v0, v1);
}

void glUniform3f(void (*fnptr)(int, float, float, float), int location, float v0, float v1, float v2) {
  (*fnptr)(location, v0, v1, v2);
}

void glUniform4f(void (*fnptr)(int, float, float, float, float), int location, float v0, float v1, float v2, float v3) {
  (*fnptr)(location, v0, v1, v2, v3);
}

void glUniform1i(void (*fnptr)(int, int), int location, int v0) {
  (*fnptr)(location, v0);
}

void glUniform2i(void (*fnptr)(int, int, int), int location, int v0, int v1) {
  (*fnptr)(location, v0, v1);
}

void glUniform3i(void (*fnptr)(int, int, int, int), int location, int v0, int v1, int v2) {
  (*fnptr)(location, v0, v1, v2);
}

void glUniform4i(void (*fnptr)(int, int, int, int, int), int location, int v0, int v1, int v2, int v3) {
  (*fnptr)(location, v0, v1, v2, v3);
}

void glUniform1ui(void (*fnptr)(int, unsigned int), int location, unsigned int v0) {
  (*fnptr)(location, v0);
}

void glUniform2ui(void (*fnptr)(int, unsigned int, unsigned int), int location, unsigned int v0, unsigned int v1) {
  (*fnptr)(location, v0, v1);
}

void glUniform3ui(void (*fnptr)(int, unsigned int, unsigned int, unsigned int), int location, unsigned int v0, unsigned int v1, unsigned int v2) {
  (*fnptr)(location, v0, v1, v2);
}

void glUniform4ui(void (*fnptr)(int, unsigned int, unsigned int, unsigned int, unsigned int), int location, unsigned int v0, unsigned int v1, unsigned int v2, unsigned int v3) {
  (*fnptr)(location, v0, v1, v2, v3);
}

void glUniform1fv(void (*fnptr)(int, int, const float*), int location, int count, const float* value) {
  (*fnptr)(location, count, value);
}

void glUniform2fv(void (*fnptr)(int, int, const float*), int location, int count, const float* value) {
  (*fnptr)(location, count, value);
}

void glUniform3fv(void (*fnptr)(int, int, const float*), int location, int count, const float* value) {
  (*fnptr)(location, count, value);
}

void glUniform4fv(void (*fnptr)(int, int, const float*), int location, int count, const float* value) {
  (*fnptr)(location, count, value);
}

void glUniform1iv(void (*fnptr)(int, int, const int*), int location, int count, const int* value) {
  (*fnptr)(location, count, value);
}

void glUniform2iv(void (*fnptr)(int, int, const int*), int location, int count, const int* value) {
  (*fnptr)(location, count, value);
}

void glUniform3iv(void (*fnptr)(int, int, const int*), int location, int count, const int* value) {
  (*fnptr)(location, count, value);
}

void glUniform4iv(void (*fnptr)(int, int, const int*), int location, int count, const int* value) {
  (*fnptr)(location, count, value);
}

void glUniform1uiv(void (*fnptr)(int, int, const unsigned int*), int location, int count, const unsigned int* value) {
  (*fnptr)(location, count, value);
}

void glUniform2uiv(void (*fnptr)(int, int, const unsigned int*), int location, int count, const unsigned int* value) {
  (*fnptr)(location, count, value);
}

void glUniform3uiv(void (*fnptr)(int, int, const unsigned int*), int location, int count, const unsigned int* value) {
  (*fnptr)(location, count, value);
}

void glUniform4uiv(void (*fnptr)(int, int, const unsigned int*), int location, int count, const unsigned int* value) {
  (*fnptr)(location, count, value);
}

void glUniformMatrix1fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix2fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix3fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix4fv(void (*fnptr)(int, int, int, const float*), int loc, int count, int transpose, const float* value) {
  (*fnptr)(loc, count, transpose, value);
}

void glUniformMatrix2x3fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix3x2fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix2x4fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix4x2fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix3x4fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix4x3fv(void (*fnptr)(int, int, int, const float*), int location, int count, int transpose, const float* value) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformBlockBinding(void (*fnptr)(unsigned int, unsigned int, unsigned int), unsigned int program, unsigned int uniformBlockIndex, unsigned int uniformBlockBinding) {
  (*fnptr)(program, uniformBlockIndex, uniformBlockBinding);
}
