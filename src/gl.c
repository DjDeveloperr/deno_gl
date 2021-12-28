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

void glBindSampler(void (*fnptr)(unsigned int, unsigned int), unsigned int unit, unsigned int sampler) {
  (*fnptr)(unit, sampler);
}

void glDeleteSamplers(void (*fnptr)(int, const unsigned int*), int count, const unsigned int* samplers) {
  (*fnptr)(count, samplers);
}

void glGenSamplers(void (*fnptr)(int, unsigned int*), int count, unsigned int* samplers) {
  (*fnptr)(count, samplers);
}

void glGetSamplerParameterfv(void (*fnptr)(unsigned int, unsigned int, float*), unsigned int sampler, unsigned int pname, float* params) {
  (*fnptr)(sampler, pname, params);
}

void glGetSamplerParameteriv(void (*fnptr)(unsigned int, unsigned int, int*), unsigned int sampler, unsigned int pname, int* params) {
  (*fnptr)(sampler, pname, params);
}

void glGetSamplerParameterIiv(void (*fnptr)(unsigned int, unsigned int, int*), unsigned int sampler, unsigned int pname, int* params) {
  (*fnptr)(sampler, pname, params);
}

void glGetSamplerParameterIuiv(void (*fnptr)(unsigned int, unsigned int, unsigned int*), unsigned int sampler, unsigned int pname, unsigned int* params) {
  (*fnptr)(sampler, pname, params);
}

int glIsSampler(int (*fnptr)(unsigned int), unsigned int sampler) {
  return (*fnptr)(sampler);
}

void glSamplerParameterf(void (*fnptr)(unsigned int, unsigned int, float), unsigned int sampler, unsigned int pname, float param) {
  (*fnptr)(sampler, pname, param);
}

void glSamplerParameteri(void (*fnptr)(unsigned int, unsigned int, int), unsigned int sampler, unsigned int pname, int param) {
  (*fnptr)(sampler, pname, param);
}

void glBindBufferBase(void (*fnptr)(int, unsigned int, unsigned int), int target, unsigned int index, unsigned int buffer) {
  (*fnptr)(target, index, buffer);
}

void glBindBufferRange(void (*fnptr)(int, unsigned int, unsigned int, int, int), int target, unsigned int index, unsigned int buffer, int offset, int size) {
  (*fnptr)(target, index, buffer, offset, size);
}

void glBufferSubData(void (*fnptr)(int, int, int, const void*), int target, int offset, int size, const void* data) {
  (*fnptr)(target, offset, size, data);
}

void glCopyBufferSubData(void (*fnptr)(int, int, int, int, int), int readTarget, int writeTarget, int readOffset, int writeOffset, int size) {
  (*fnptr)(readTarget, writeTarget, readOffset, writeOffset, size);
}

void glDrawArraysInstanced(void (*fnptr)(int, int, int, int), int mode, int first, int count, int instancecount) {
  (*fnptr)(mode, first, count, instancecount);
}

void glDrawElements(void (*fnptr)(int, int, int, const void*), int mode, int count, int type, const void* indices) {
  (*fnptr)(mode, count, type, indices);
}

void glDrawElementsBaseVertex(void (*fnptr)(int, int, int, const void*, int), int mode, int count, int type, const void* indices, int basevertex) {
  (*fnptr)(mode, count, type, indices, basevertex);
}

void glDrawElementsInstanced(void (*fnptr)(int, int, int, const void*, int), int mode, int count, int type, const void* indices, int instancecount) {
  (*fnptr)(mode, count, type, indices, instancecount);
}

void glDrawElementsInstancedBaseVertex(void (*fnptr)(int, int, int, const void*, int, int), int mode, int count, int type, const void* indices, int instancecount, int basevertex) {
  (*fnptr)(mode, count, type, indices, instancecount, basevertex);
}

void glDrawRangeElements(void (*fnptr)(int, unsigned int, unsigned int, int, int, const void*), int mode, unsigned int start, unsigned int end, int count, int type, const void* indices) {
  (*fnptr)(mode, start, end, count, type, indices);
}

void glDrawRangeElementsBaseVertex(void (*fnptr)(int, unsigned int, unsigned int, int, int, const void*, int), int mode, unsigned int start, unsigned int end, int count, int type, const void* indices, int basevertex) {
  (*fnptr)(mode, start, end, count, type, indices, basevertex);
}

void glFlushMappedBufferRange(void (*fnptr)(int, int, int), int target, int offset, int size) {
  (*fnptr)(target, offset, size);
}

void glGetBufferParameteriv(void (*fnptr)(int, int, int*), int target, int pname, int* params) {
  (*fnptr)(target, pname, params);
}

void glGetBufferParameteri64v(void (*fnptr)(int, int, int64_t*), int target, int pname, int64_t* params) {
  (*fnptr)(target, pname, params);
}

void glGetBufferPointerv(void (*fnptr)(int, int, void**), int target, int pname, void** params) {
  (*fnptr)(target, pname, params);
}

void glGetBufferSubData(void (*fnptr)(int, int, int, void*), int target, int offset, int size, void* data) {
  (*fnptr)(target, offset, size, data);
}

void glGetVertexAttribdv(void (*fnptr)(unsigned int, int, double*), unsigned int index, int pname, double* params) {
  (*fnptr)(index, pname, params);
}

void glGetVertexAttribfv(void (*fnptr)(unsigned int, int, float*), unsigned int index, int pname, float* params) {
  (*fnptr)(index, pname, params);
}

void glGetVertexAttribiv(void (*fnptr)(unsigned int, int, int*), unsigned int index, int pname, int* params) {
  (*fnptr)(index, pname, params);
}

void glGetVertexAttribIiv(void (*fnptr)(unsigned int, int, int*), unsigned int index, int pname, int* params) {
  (*fnptr)(index, pname, params);
}

void glGetVertexAttribIuiv(void (*fnptr)(unsigned int, int, unsigned int*), unsigned int index, int pname, unsigned int* params) {
  (*fnptr)(index, pname, params);
}

void glGetVertexAttribPointerv(void (*fnptr)(unsigned int, int, void**), unsigned int index, int pname, void** pointer) {
  (*fnptr)(index, pname, pointer);
}

int glIsBuffer(int (*fnptr)(unsigned int), unsigned int buffer) {
  return (*fnptr)(buffer);
}

void* glMapBuffer(void* (*fnptr)(int, int), int target, int access) {
  return (*fnptr)(target, access);
}

void* glMapBufferRange(void* (*fnptr)(int, int, int, int), int target, int offset, int length, int access) {
  return (*fnptr)(target, offset, length, access);
}

void glMultiDrawArrays(void (*fnptr)(int, const int*, const int*, int), int mode, const int* first, const int* count, int drawcount) {
  (*fnptr)(mode, first, count, drawcount);
}

void glMultiDrawElements(void (*fnptr)(int, const int*, int, const void* const*, int), int mode, const int* count, int type, const void* const* indices, int drawcount) {
  (*fnptr)(mode, count, type, indices, drawcount);
}

void glMultiDrawElementsBaseVertex(void (*fnptr)(int, const int*, int, const void* const*, int, const int*), int mode, const int* count, int type, const void* const* indices, int drawcount, const int* basevertex) {
  (*fnptr)(mode, count, type, indices, drawcount, basevertex);
}

void glPrimitiveRestartIndex(void (*fnptr)(unsigned int), unsigned int index) {
  (*fnptr)(index);
}

void glProvokingVertex(void (*fnptr)(int), int mode) {
  (*fnptr)(mode);
}

void glUnmapBuffer(int (*fnptr)(int), int target) {
  (*fnptr)(target);
}

void glVertexAttribDivisor(void (*fnptr)(unsigned int, unsigned int), unsigned int index, unsigned int divisor) {
  (*fnptr)(index, divisor);
}

void glVertexAttrib1f(void (*fnptr)(unsigned int, float), unsigned int index, float x) {
  (*fnptr)(index, x);
}

void glVertexAttrib1s(void (*fnptr)(unsigned int, short), unsigned int index, short x) {
  (*fnptr)(index, x);
}

void glVertexAttrib1d(void (*fnptr)(unsigned int, double), unsigned int index, double x) {
  (*fnptr)(index, x);
}

void glVertexAttribI1i(void (*fnptr)(unsigned int, int), unsigned int index, int x) {
  (*fnptr)(index, x);
}

void glVertexAttribI1ui(void (*fnptr)(unsigned int, unsigned int), unsigned int index, unsigned int x) {
  (*fnptr)(index, x);
}

void glVertexAttrib2f(void (*fnptr)(unsigned int, float, float), unsigned int index, float x, float y) {
  (*fnptr)(index, x, y);
}

void glVertexAttrib2s(void (*fnptr)(unsigned int, short, short), unsigned int index, short x, short y) {
  (*fnptr)(index, x, y);
}

void glVertexAttrib2d(void (*fnptr)(unsigned int, double, double), unsigned int index, double x, double y) {
  (*fnptr)(index, x, y);
}

void glVertexAttribI2i(void (*fnptr)(unsigned int, int, int), unsigned int index, int x, int y) {
  (*fnptr)(index, x, y);
}

void glVertexAttribI2ui(void (*fnptr)(unsigned int, unsigned int, unsigned int), unsigned int index, unsigned int x, unsigned int y) {
  (*fnptr)(index, x, y);
}

void glVertexAttrib3f(void (*fnptr)(unsigned int, float, float, float), unsigned int index, float x, float y, float z) {
  (*fnptr)(index, x, y, z);
}

void glVertexAttrib3s(void (*fnptr)(unsigned int, short, short, short), unsigned int index, short x, short y, short z) {
  (*fnptr)(index, x, y, z);
}

void glVertexAttrib3d(void (*fnptr)(unsigned int, double, double, double), unsigned int index, double x, double y, double z) {
  (*fnptr)(index, x, y, z);
}

void glVertexAttribI3i(void (*fnptr)(unsigned int, int, int, int), unsigned int index, int x, int y, int z) {
  (*fnptr)(index, x, y, z);
}

void glVertexAttribI3ui(void (*fnptr)(unsigned int, unsigned int, unsigned int, unsigned int), unsigned int index, unsigned int x, unsigned int y, unsigned int z) {
  (*fnptr)(index, x, y, z);
}

void glVertexAttrib4f(void (*fnptr)(unsigned int, float, float, float, float), unsigned int index, float x, float y, float z, float w) {
  (*fnptr)(index, x, y, z, w);
}

void glVertexAttrib4s(void (*fnptr)(unsigned int, short, short, short, short), unsigned int index, short x, short y, short z, short w) {
  (*fnptr)(index, x, y, z, w);
}

void glVertexAttrib4d(void (*fnptr)(unsigned int, double, double, double, double), unsigned int index, double x, double y, double z, double w) {
  (*fnptr)(index, x, y, z, w);
}

void glVertexAttrib4Nub(void (*fnptr)(unsigned int, unsigned char, unsigned char, unsigned char, unsigned char), unsigned int index, unsigned char x, unsigned char y, unsigned char z, unsigned char w) {
  (*fnptr)(index, x, y, z, w);
}

void glVertexAttribI4i(void (*fnptr)(unsigned int, int, int, int, int), unsigned int index, int x, int y, int z, int w) {
  (*fnptr)(index, x, y, z, w);
}

void glVertexAttribI4ui(void (*fnptr)(unsigned int, unsigned int, unsigned int, unsigned int, unsigned int), unsigned int index, unsigned int x, unsigned int y, unsigned int z, unsigned int w) {
  (*fnptr)(index, x, y, z, w);
}

void glVertexAttrib1fv(void (*fnptr)(unsigned int, const float*), unsigned int index, const float* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib1sv(void (*fnptr)(unsigned int, const short*), unsigned int index, const short* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib1dv(void (*fnptr)(unsigned int, const double*), unsigned int index, const double* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI1iv(void (*fnptr)(unsigned int, const int*), unsigned int index, const int* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI1uiv(void (*fnptr)(unsigned int, const unsigned int*), unsigned int index, const unsigned int* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib2fv(void (*fnptr)(unsigned int, const float*), unsigned int index, const float* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib2sv(void (*fnptr)(unsigned int, const short*), unsigned int index, const short* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib2dv(void (*fnptr)(unsigned int, const double*), unsigned int index, const double* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI2iv(void (*fnptr)(unsigned int, const int*), unsigned int index, const int* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI2uiv(void (*fnptr)(unsigned int, const unsigned int*), unsigned int index, const unsigned int* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib3fv(void (*fnptr)(unsigned int, const float*), unsigned int index, const float* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib3sv(void (*fnptr)(unsigned int, const short*), unsigned int index, const short* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib3dv(void (*fnptr)(unsigned int, const double*), unsigned int index, const double* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI3iv(void (*fnptr)(unsigned int, const int*), unsigned int index, const int* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI3uiv(void (*fnptr)(unsigned int, const unsigned int*), unsigned int index, const unsigned int* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4fv(void (*fnptr)(unsigned int, const float*), unsigned int index, const float* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4sv(void (*fnptr)(unsigned int, const short*), unsigned int index, const short* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4dv(void (*fnptr)(unsigned int, const double*), unsigned int index, const double* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4iv(void (*fnptr)(unsigned int, const int*), unsigned int index, const int* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4bv(void (*fnptr)(unsigned int, const unsigned char*), unsigned int index, const unsigned char* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4ubv(void (*fnptr)(unsigned int, const unsigned char*), unsigned int index, const unsigned char* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4usv(void (*fnptr)(unsigned int, const unsigned short*), unsigned int index, const unsigned short* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4uiv(void (*fnptr)(unsigned int, const unsigned int*), unsigned int index, const unsigned int* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4Nbv(void (*fnptr)(unsigned int, const unsigned char*), unsigned int index, const unsigned char* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4Nsv(void (*fnptr)(unsigned int, const short*), unsigned int index, const short* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4Niv(void (*fnptr)(unsigned int, const int*), unsigned int index, const int* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4Nubv(void (*fnptr)(unsigned int, const unsigned char*), unsigned int index, const unsigned char* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4Nusv(void (*fnptr)(unsigned int, const unsigned short*), unsigned int index, const unsigned short* v) {
  (*fnptr)(index, v);
}

void glVertexAttrib4Nuiv(void (*fnptr)(unsigned int, const unsigned int*), unsigned int index, const unsigned int* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI4bv(void (*fnptr)(unsigned int, const unsigned char*), unsigned int index, const unsigned char* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI4ubv(void (*fnptr)(unsigned int, const unsigned char*), unsigned int index, const unsigned char* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI4sv(void (*fnptr)(unsigned int, const short*), unsigned int index, const short* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI4usv(void (*fnptr)(unsigned int, const unsigned short*), unsigned int index, const unsigned short* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI4iv(void (*fnptr)(unsigned int, const int*), unsigned int index, const int* v) {
  (*fnptr)(index, v);
}

void glVertexAttribI4uiv(void (*fnptr)(unsigned int, const unsigned int*), unsigned int index, const unsigned int* v) {
  (*fnptr)(index, v);
}

void glVertexAttribP1ui(void (*fnptr)(unsigned int, int, int, unsigned int), unsigned int index, int type, int normalized, unsigned int value) {
  (*fnptr)(index, type, normalized, value);
}

void glVertexAttribP2ui(void (*fnptr)(unsigned int, int, int, unsigned int), unsigned int index, int type, int normalized, unsigned int value) {
  (*fnptr)(index, type, normalized, value);
}

void glVertexAttribP3ui(void (*fnptr)(unsigned int, int, int, unsigned int), unsigned int index, int type, int normalized, unsigned int value) {
  (*fnptr)(index, type, normalized, value);
}

void glVertexAttribP4ui(void (*fnptr)(unsigned int, int, int, unsigned int), unsigned int index, int type, int normalized, unsigned int value) {
  (*fnptr)(index, type, normalized, value);
}

char* glGetStringi(char* (*fnptr)(unsigned int, unsigned int, unsigned int*), unsigned int name, unsigned int index) {
  return (*fnptr)(name, index, 0);
}

char* glGetString(char* (*fnptr)(unsigned int, char*), unsigned int name) {
  return (*fnptr)(name, 0);
}

void glGenFramebuffers(void (*fnptr)(unsigned int, unsigned int*), unsigned int n, unsigned int* framebuffers) {
  (*fnptr)(n, framebuffers);
}

void glBindFramebuffer(void (*fnptr)(unsigned int, unsigned int), unsigned int target, unsigned int framebuffer) {
  (*fnptr)(target, framebuffer);
}

void glFramebufferTexture2D(void (*fnptr)(unsigned int, unsigned int, unsigned int, unsigned int, int), unsigned int target, unsigned int attachment, unsigned int textarget, unsigned int texture, int level) {
  (*fnptr)(target, attachment, textarget, texture, level);
}

int glCheckFramebufferStatus(int (*fnptr)(unsigned int), unsigned int target) {
  return (*fnptr)(target);
}

void glDeleteFramebuffers(void (*fnptr)(unsigned int, unsigned int*), unsigned int n, unsigned int* framebuffers) {
  (*fnptr)(n, framebuffers);
}

void glTexStorage2D(void (*fnptr)(unsigned int, int, unsigned int, unsigned int, unsigned int), unsigned int target, int levels, unsigned int internalformat, unsigned int width, unsigned int height) {
  (*fnptr)(target, levels, internalformat, width, height);
}

int glClientWaitSync(int (*fnptr)(unsigned int, unsigned int, uint64_t), unsigned int sync, unsigned int flags, uint64_t timeout) {
  return (*fnptr)(sync, flags, timeout);
}

void glDeleteSync(void (*fnptr)(unsigned int), unsigned int sync) {
  (*fnptr)(sync);
}

unsigned int glFenceSync(unsigned int (*fnptr)(unsigned int, unsigned int), unsigned int condition, unsigned int flags) {
  return (*fnptr)(condition, flags);
}

void glGetSynciv(void (*fnptr)(unsigned int, unsigned int, unsigned int, unsigned int*, int*), unsigned int sync, unsigned int pname, unsigned int bufSize, unsigned int* length, int* values) {
  (*fnptr)(sync, pname, bufSize, length, values);
}

int glIsSync(int (*fnptr)(unsigned int), unsigned int sync) {
  return (*fnptr)(sync);
}

void glTextureBarrier(void (*fnptr)(void)) {
  (*fnptr)();
}

void glWaitSync(void (*fnptr)(unsigned int, unsigned int, uint64_t), unsigned int sync, unsigned int flags, uint64_t timeout) {
  (*fnptr)(sync, flags, timeout);
}

void glGetShaderPrecisionFormat(void (*fnptr)(unsigned int, unsigned int, int*, int*), unsigned int shadertype, unsigned int precisiontype, int* range, int* precision) {
  (*fnptr)(shadertype, precisiontype, range, precision);
}
