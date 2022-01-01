#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

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

/// OpenGL types

typedef unsigned long  GLenum;
typedef bool           GLboolean;
typedef unsigned long  GLbitfield;
typedef char           GLbyte;
typedef short          GLshort;
typedef long           GLint;
typedef long           GLsizei;
typedef long long      GLintptr;
typedef long long      GLsizeiptr;
typedef unsigned char  GLubyte;
typedef unsigned short GLushort;
typedef unsigned long  GLuint;
typedef float          GLfloat;
typedef float          GLclampf;
typedef void           GLvoid;
typedef char           GLchar;
typedef long long      GLint64;

/// 5.14.3 Setting and getting state

void glActiveTexture(
  void (*fnptr)(GLenum),
  GLenum texture
) {
  (*fnptr)(texture);
}

void glBlendColor(
  void (*fnptr)(GLfloat, GLfloat, GLfloat, GLfloat),
  GLfloat red,
  GLfloat green,
  GLfloat blue,
  GLfloat alpha
) {
  (*fnptr)(red, green, blue, alpha);
}

void glBlendEquation(
  void (*fnptr)(GLenum),
  GLenum mode
) {
  (*fnptr)(mode);
}

void glBlendEquationSeparate(
  void (*fnptr)(GLenum, GLenum),
  GLenum modeRGB,
  GLenum modeAlpha
) {
  (*fnptr)(modeRGB, modeAlpha);
}

void glBlendFunc(
  void (*fnptr)(GLuint, GLenum),
  GLuint sfactor,
  GLenum dfactor
) {
  (*fnptr)(sfactor, dfactor);
}

void glBlendFuncSeparate(
  void (*fnptr)(GLenum, GLenum, GLenum, GLenum),
  GLenum srcRGB,
  GLenum dstRGB,
  GLenum srcAlpha,
  GLenum dstAlpha
) {
  (*fnptr)(srcRGB, dstRGB, srcAlpha, dstAlpha);
}

void glClearColor(
  void (*fnptr)(GLfloat, GLfloat, GLfloat, GLfloat),
  GLfloat red,
  GLfloat green,
  GLfloat blue,
  GLfloat alpha
) {
  (*fnptr)(red, green, blue, alpha);
}

void glClearDepth(
  void (*fnptr)(GLclampf),
  GLclampf depth
) {
  (*fnptr)(depth);
}

void glClearStencil(
  void (*fnptr)(GLint),
  GLint s
) {
  (*fnptr)(s);
}

void glColorMask(
  void (*fnptr)(GLboolean, GLboolean, GLboolean, GLboolean),
  GLboolean red,
  GLboolean green,
  GLboolean blue,
  GLboolean alpha
) {
  (*fnptr)(red, green, blue, alpha);
}

void glCullFace(
  void (*fnptr)(GLenum),
  GLenum mode
) {
  (*fnptr)(mode);
}

void glDepthFunc(
  void (*fnptr)(GLenum),
  GLenum func
) {
  (*fnptr)(func);
}

void glDepthMask(
  void (*fnptr)(GLboolean),
  GLboolean flag
) {
  (*fnptr)(flag);
}

void glDepthRange(
  void (*fnptr)(GLclampf, GLclampf),
  GLclampf zNear,
  GLclampf zFar
) {
  (*fnptr)(zNear, zFar);
}

void glDisable(
  void (*fnptr)(GLenum),
  GLenum cap
) {
  (*fnptr)(cap);
}

void glEnable(
  void (*fnptr)(GLenum),
  GLenum cap
) {
  (*fnptr)(cap);
}

void glFrontFace(
  void (*fnptr)(GLenum),
  GLenum mode
) {
  (*fnptr)(mode);
}

void glGetIntegerv(
  void (*fnptr)(GLenum, GLint*),
  GLenum pname,
  GLint* params
) {
  (*fnptr)(pname, params);
}

void glGetFloatv(
  void (*fnptr)(GLenum, GLfloat*),
  GLenum pname,
  GLfloat* params
) {
  (*fnptr)(pname, params);
}

void glGetBooleanv(
  void (*fnptr)(GLenum, GLboolean*),
  GLenum pname,
  GLboolean* params
) {
  (*fnptr)(pname, params);
}

GLubyte* glGetString(
  GLubyte* (*fnptr)(GLenum),
  GLenum name
) {
  return (*fnptr)(name);
}

GLenum glGetError(
  GLenum (*fnptr)(void)
) {
  return (*fnptr)();
}

void glHint(
  void (*fnptr)(GLenum, GLenum),
  GLenum target,
  GLenum mode
) {
  (*fnptr)(target, mode);
}

GLboolean glIsEnabled(
  GLboolean (*fnptr)(GLenum),
  GLenum cap
) {
  return (*fnptr)(cap);
}

void glLineWidth(
  void (*fnptr)(GLfloat),
  GLfloat width
) {
  (*fnptr)(width);
}

void glPixelStorei(
  void (*fnptr)(GLenum, GLint),
  GLenum pname,
  GLint param
) {
  (*fnptr)(pname, param);
}

void glPolygonOffset(
  void (*fnptr)(GLfloat, GLfloat),
  GLfloat factor,
  GLfloat units
) {
  (*fnptr)(factor, units);
}

void glSampleCoverage(
  void (*fnptr)(GLclampf, GLboolean),
  GLclampf value,
  GLboolean invert
) {
  (*fnptr)(value, invert);
}

void glStencilFunc(
  void (*fnptr)(GLenum, GLint, GLuint),
  GLenum func,
  GLint ref,
  GLuint mask
) {
  (*fnptr)(func, ref, mask);
}

void glStencilFuncSeparate(
  void (*fnptr)(GLenum, GLenum, GLint, GLuint),
  GLenum face,
  GLenum func,
  GLint ref,
  GLuint mask
) {
  (*fnptr)(face, func, ref, mask);
}

void glStencilMask(
  void (*fnptr)(GLuint),
  GLuint mask
) {
  (*fnptr)(mask);
}

void glStencilMaskSeparate(
  void (*fnptr)(GLenum, GLuint),
  GLenum face,
  GLuint mask
) {
  (*fnptr)(face, mask);
}

void glStencilOp(
  void (*fnptr)(GLenum, GLenum, GLenum),
  GLenum fail,
  GLenum zfail,
  GLenum zpass
) {
  (*fnptr)(fail, zfail, zpass);
}

/// 5.14.4 Viewing and clipping

void glScissor(
  void (*fnptr)(GLint, GLint, GLsizei, GLsizei),
  GLint x,
  GLint y,
  GLsizei width,
  GLsizei height
) {
  (*fnptr)(x, y, width, height);
}

void glViewport(
  void (*fnptr)(GLint, GLint, GLsizei, GLsizei),
  GLint x,
  GLint y,
  GLsizei width,
  GLsizei height
) {
  (*fnptr)(x, y, width, height);
}

/// 5.14.5 Buffer objects

void glBindBuffer(
  void (*fnptr)(GLenum, GLuint),
  GLenum target,
  GLuint buffer
) {
  (*fnptr)(target, buffer);
}

void glBufferData(
  void (*fnptr)(GLenum, GLsizeiptr, const GLvoid*, GLenum),
  GLenum target,
  GLsizeiptr size,
  const GLvoid* data,
  GLenum usage
) {
  (*fnptr)(target, size, data, usage);
}

void glBufferSubData(
  void (*fnptr)(GLenum, GLintptr, GLsizeiptr, const GLvoid*),
  GLenum target,
  GLintptr offset,
  GLsizeiptr size,
  const GLvoid* data
) {
  (*fnptr)(target, offset, size, data);
}

void glGenBuffers(
  void (*fnptr)(GLsizei, GLuint*),
  GLsizei n,
  GLuint* buffers
) {
  (*fnptr)(n, buffers);
}

void glDeleteBuffers(
  void (*fnptr)(GLsizei, const GLuint*),
  GLsizei n,
  const GLuint* buffers
) {
  (*fnptr)(n, buffers);
}

void glGetBufferParameteriv(
  void (*fnptr)(GLenum, GLenum, GLint*),
  GLenum target,
  GLenum pname,
  GLint* params
) {
  (*fnptr)(target, pname, params);
}

GLboolean glIsBuffer(
  GLboolean (*fnptr)(GLuint),
  GLuint buffer
) {
  return (*fnptr)(buffer);
}

/// 5.14.6 Framebuffer objects

void glBindFramebuffer(
  void (*fnptr)(GLenum, GLuint),
  GLenum target,
  GLuint framebuffer
) {
  (*fnptr)(target, framebuffer);
}

GLenum glCheckFramebufferStatus(
  GLenum (*fnptr)(GLenum),
  GLenum target
) {
  return (*fnptr)(target);
}

void glGenFramebuffers(
  void (*fnptr)(GLsizei, GLuint*),
  GLsizei n,
  GLuint* framebuffers
) {
  (*fnptr)(n, framebuffers);
}

void glDeleteFramebuffers(
  void (*fnptr)(GLsizei, const GLuint*),
  GLsizei n,
  const GLuint* framebuffers
) {
  (*fnptr)(n, framebuffers);
}

void glFramebufferRenderbuffer(
  void (*fnptr)(GLenum, GLenum, GLenum, GLuint),
  GLenum target,
  GLenum attachment,
  GLenum renderbuffertarget,
  GLuint renderbuffer
) {
  (*fnptr)(target, attachment, renderbuffertarget, renderbuffer);
}

void glFramebufferTexture2D(
  void (*fnptr)(GLenum, GLenum, GLenum, GLuint, GLint),
  GLenum target,
  GLenum attachment,
  GLenum textarget,
  GLuint texture,
  GLint level
) {
  (*fnptr)(target, attachment, textarget, texture, level);
}

void glGetFramebufferAttachmentParameteriv(
  void (*fnptr)(GLenum, GLenum, GLenum, GLint*),
  GLenum target,
  GLenum attachment,
  GLenum pname,
  GLint* params
) {
  (*fnptr)(target, attachment, pname, params);
}

GLboolean glIsFramebuffer(
  GLboolean (*fnptr)(GLuint),
  GLuint framebuffer
) {
  return (*fnptr)(framebuffer);
}

/// 5.14.7 Renderbuffer objects

void glBindRenderbuffer(
  void (*fnptr)(GLenum, GLuint),
  GLenum target,
  GLuint renderbuffer
) {
  (*fnptr)(target, renderbuffer);
}

void glGenRenderbuffers(
  void (*fnptr)(GLsizei, GLuint*),
  GLsizei n,
  GLuint* renderbuffers
) {
  (*fnptr)(n, renderbuffers);
}

void glDeleteRenderbuffers(
  void (*fnptr)(GLsizei, const GLuint*),
  GLsizei n,
  const GLuint* renderbuffers
) {
  (*fnptr)(n, renderbuffers);
}

void glGetRenderbufferParameteriv(
  void (*fnptr)(GLenum, GLenum, GLint*),
  GLenum target,
  GLenum pname,
  GLint* params
) {
  (*fnptr)(target, pname, params);
}

GLboolean glIsRenderbuffer(
  GLboolean (*fnptr)(GLuint),
  GLuint renderbuffer
) {
  return (*fnptr)(renderbuffer);
}

void glRenderbufferStorage(
  void (*fnptr)(GLenum, GLenum, GLsizei, GLsizei),
  GLenum target,
  GLenum internalformat,
  GLsizei width,
  GLsizei height
) {
  (*fnptr)(target, internalformat, width, height);
}

/// 5.14.8 Texture objects

void glBindTexture(
  void (*fnptr)(GLenum, GLuint),
  GLenum target,
  GLuint texture
) {
  (*fnptr)(target, texture);
}

void glCompressedTexImage2D(
  void (*fnptr)(GLenum, GLint, GLenum, GLsizei, GLsizei, GLint, GLsizei, const GLvoid*),
  GLenum target,
  GLint level,
  GLenum internalformat,
  GLsizei width,
  GLsizei height,
  GLint border,
  GLsizei imageSize,
  const GLvoid* data
) {
  (*fnptr)(target, level, internalformat, width, height, border, imageSize, data);
}

void glCompressedTexSubImage2D(
  void (*fnptr)(GLenum, GLint, GLint, GLint, GLsizei, GLsizei, GLenum, GLsizei, const GLvoid*),
  GLenum target,
  GLint level,
  GLint xoffset,
  GLint yoffset,
  GLsizei width,
  GLsizei height,
  GLenum format,
  GLsizei imageSize,
  const GLvoid* data
) {
  (*fnptr)(target, level, xoffset, yoffset, width, height, format, imageSize, data);
}

void glCopyTexImage2D(
  void (*fnptr)(GLenum, GLint, GLenum, GLint, GLint, GLsizei, GLsizei, GLint),
  GLenum target,
  GLint level,
  GLenum internalformat,
  GLint x,
  GLint y,
  GLsizei width,
  GLsizei height,
  GLint border
) {
  (*fnptr)(target, level, internalformat, x, y, width, height, border);
}

void glCopyTexSubImage2D(
  void (*fnptr)(GLenum, GLint, GLint, GLint, GLint, GLint, GLsizei, GLsizei),
  GLenum target,
  GLint level,
  GLint xoffset,
  GLint yoffset,
  GLint x,
  GLint y,
  GLsizei width,
  GLsizei height
) {
  (*fnptr)(target, level, xoffset, yoffset, x, y, width, height);
}

void glGenTextures(
  void (*fnptr)(GLsizei, GLuint*),
  GLsizei n,
  GLuint* textures
) {
  (*fnptr)(n, textures);
}

void glDeleteTextures(
  void (*fnptr)(GLsizei, const GLuint*),
  GLsizei n,
  const GLuint* textures
) {
  (*fnptr)(n, textures);
}

void glGenerateMipmap(
  void (*fnptr)(GLenum),
  GLenum target
) {
  (*fnptr)(target);
}

void glGetTexParameteriv(
  void (*fnptr)(GLenum, GLenum, GLint*),
  GLenum target,
  GLenum pname,
  GLint* params
) {
  (*fnptr)(target, pname, params);
}

GLboolean glIsTexture(
  GLboolean (*fnptr)(GLuint),
  GLuint texture
) {
  return (*fnptr)(texture);
}

void glTexImage2D(
  void (*fnptr)(GLenum, GLint, GLint, GLsizei, GLsizei, GLint, GLenum, GLenum, const GLvoid*),
  GLenum target,
  GLint level,
  GLint internalformat,
  GLsizei width,
  GLsizei height,
  GLint border,
  GLenum format,
  GLenum type,
  const GLvoid* pixels
) {
  (*fnptr)(target, level, internalformat, width, height, border, format, type, pixels);
}

void glTexParameterf(
  void (*fnptr)(GLenum, GLenum, GLfloat),
  GLenum target,
  GLenum pname,
  GLfloat param
) {
  (*fnptr)(target, pname, param);
}

void glTexParameteri(
  void (*fnptr)(GLenum, GLenum, GLint),
  GLenum target,
  GLenum pname,
  GLint param
) {
  (*fnptr)(target, pname, param);
}

void glTexSubImage2D(
  void (*fnptr)(GLenum, GLint, GLint, GLint, GLsizei, GLsizei, GLenum, GLenum, const GLvoid*),
  GLenum target,
  GLint level,
  GLint xoffset,
  GLint yoffset,
  GLsizei width,
  GLsizei height,
  GLenum format,
  GLenum type,
  const GLvoid* pixels
) {
  (*fnptr)(target, level, xoffset, yoffset, width, height, format, type, pixels);
}

/// 5.14.9 Programs and Shaders

void glAttachShader(
  void (*fnptr)(GLuint, GLuint),
  GLuint program,
  GLuint shader
) {
  (*fnptr)(program, shader);
}

void glBindAttribLocation(
  void (*fnptr)(GLuint, GLuint, const GLchar*),
  GLuint program,
  GLuint index,
  const GLchar* name
) {
  (*fnptr)(program, index, name);
}

void glCompileShader(
  void (*fnptr)(GLuint),
  GLuint shader
) {
  (*fnptr)(shader);
}

GLuint glCreateProgram(
  GLuint (*fnptr)(void)
) {
  return (*fnptr)();
}

GLuint glCreateShader(
  GLuint (*fnptr)(GLenum),
  GLenum type
) {
  return (*fnptr)(type);
}

void glDeleteProgram(
  void (*fnptr)(GLuint),
  GLuint program
) {
  (*fnptr)(program);
}

void glDeleteShader(
  void (*fnptr)(GLuint),
  GLuint shader
) {
  (*fnptr)(shader);
}

void glDetachShader(
  void (*fnptr)(GLuint, GLuint),
  GLuint program,
  GLuint shader
) {
  (*fnptr)(program, shader);
}

void glGetAttachedShaders(
  void (*fnptr)(GLuint, GLsizei, GLsizei*, GLuint*),
  GLuint program,
  GLsizei maxCount,
  GLsizei* count,
  GLuint* shaders
) {
  (*fnptr)(program, maxCount, count, shaders);
}

void glGetProgramiv(
  void (*fnptr)(GLuint, GLenum, GLint*),
  GLuint program,
  GLenum pname,
  GLint* params
) {
  (*fnptr)(program, pname, params);
}

void glGetProgramInfoLog(
  void (*fnptr)(GLuint, GLsizei, GLsizei*, GLchar*),
  GLuint program,
  GLsizei bufSize,
  GLsizei* length,
  GLchar* infoLog
) {
  (*fnptr)(program, bufSize, length, infoLog);
}

void glGetShaderiv(
  void (*fnptr)(GLuint, GLenum, GLint*),
  GLuint shader,
  GLenum pname,
  GLint* params
) {
  (*fnptr)(shader, pname, params);
}

void glGetShaderPrecisionFormat(
  void (*fnptr)(GLenum, GLenum, GLint*, GLint*),
  GLenum shadertype,
  GLenum precisiontype,
  GLint* range,
  GLint* precision
) {
  (*fnptr)(shadertype, precisiontype, range, precision);
}

void glGetShaderInfoLog(
  void (*fnptr)(GLuint, GLsizei, GLsizei*, GLchar*),
  GLuint shader,
  GLsizei bufSize,
  GLsizei* length,
  GLchar* infoLog
) {
  (*fnptr)(shader, bufSize, length, infoLog);
}

void glGetShaderSource(
  void (*fnptr)(GLuint, GLsizei, GLsizei*, GLchar*),
  GLuint shader,
  GLsizei bufSize,
  GLsizei* length,
  GLchar* source
) {
  (*fnptr)(shader, bufSize, length, source);
}

GLboolean glIsProgram(
  GLboolean (*fnptr)(GLuint),
  GLuint program
) {
  return (*fnptr)(program);
}

GLboolean glIsShader(
  GLboolean (*fnptr)(GLuint),
  GLuint shader
) {
  return (*fnptr)(shader);
}

void glLinkProgram(
  void (*fnptr)(GLuint),
  GLuint program
) {
  (*fnptr)(program);
}

void glShaderSource(
  void (*fnptr)(GLuint, GLsizei, const GLchar**, const GLint*),
  GLuint shader,
  GLsizei count,
  const GLchar** string,
  const GLint* length
) {
  (*fnptr)(shader, count, string, length);
}

void glUseProgram(
  void (*fnptr)(GLuint),
  GLuint program
) {
  (*fnptr)(program);
}

void glValidateProgram(
  void (*fnptr)(GLuint),
  GLuint program
) {
  (*fnptr)(program);
}

/// 5.14.10 Uniforms and attributes

void glDisableVertexAttribArray(
  void (*fnptr)(GLuint),
  GLuint index
) {
  (*fnptr)(index);
}

void glEnableVertexAttribArray(
  void (*fnptr)(GLuint),
  GLuint index
) {
  (*fnptr)(index);
}

void glGetActiveAttrib(
  void (*fnptr)(GLuint, GLuint, GLsizei, GLsizei*, GLint*, GLenum*, GLchar*),
  GLuint program,
  GLuint index,
  GLsizei bufSize,
  GLsizei* length,
  GLint* size,
  GLenum* type,
  GLchar* name
) {
  (*fnptr)(program, index, bufSize, length, size, type, name);
}

void glGetActiveUniform(
  void (*fnptr)(GLuint, GLuint, GLsizei, GLsizei*, GLint*, GLenum*, GLchar*),
  GLuint program,
  GLuint index,
  GLsizei bufSize,
  GLsizei* length,
  GLint* size,
  GLenum* type,
  GLchar* name
) {
  (*fnptr)(program, index, bufSize, length, size, type, name);
}

GLint glGetAttribLocation(
  GLint (*fnptr)(GLuint, const GLchar*),
  GLuint program,
  const GLchar* name
) {
  return (*fnptr)(program, name);
}

void glGetUniformfv(
  void (*fnptr)(GLuint, GLint, GLfloat*),
  GLuint program,
  GLint location,
  GLfloat* params
) {
  (*fnptr)(program, location, params);
}

void glGetUniformiv(
  void (*fnptr)(GLuint, GLint, GLint*),
  GLuint program,
  GLint location,
  GLint* params
) {
  (*fnptr)(program, location, params);
}

GLint glGetUniformLocation(
  GLint (*fnptr)(GLuint, const GLchar*),
  GLuint program,
  const GLchar* name
) {
  return (*fnptr)(program, name);
}

void glGetVertexAttribfv(
  void (*fnptr)(GLuint, GLenum, GLfloat*),
  GLuint index,
  GLenum pname,
  GLfloat* params
) {
  (*fnptr)(index, pname, params);
}

void glGetVertexAttribiv(
  void (*fnptr)(GLuint, GLenum, GLint*),
  GLuint index,
  GLenum pname,
  GLint* params
) {
  (*fnptr)(index, pname, params);
}

void glGetVertexAttribPointerv(
  void (*fnptr)(GLuint, GLenum, void**),
  GLuint index,
  GLenum pname,
  void** pointer
) {
  (*fnptr)(index, pname, pointer);
}

void glUniform1f(
  void (*fnptr)(GLint, GLfloat),
  GLint location,
  GLfloat v0
) {
  (*fnptr)(location, v0);
}

void glUniform2f(
  void (*fnptr)(GLint, GLfloat, GLfloat),
  GLint location,
  GLfloat v0,
  GLfloat v1
) {
  (*fnptr)(location, v0, v1);
}

void glUniform3f(
  void (*fnptr)(GLint, GLfloat, GLfloat, GLfloat),
  GLint location,
  GLfloat v0,
  GLfloat v1,
  GLfloat v2
) {
  (*fnptr)(location, v0, v1, v2);
}

void glUniform4f(
  void (*fnptr)(GLint, GLfloat, GLfloat, GLfloat, GLfloat),
  GLint location,
  GLfloat v0,
  GLfloat v1,
  GLfloat v2,
  GLfloat v3
) {
  (*fnptr)(location, v0, v1, v2, v3);
}

void glUniform1i(
  void (*fnptr)(GLint, GLint),
  GLint location,
  GLint v0
) {
  (*fnptr)(location, v0);
}

void glUniform2i(
  void (*fnptr)(GLint, GLint, GLint),
  GLint location,
  GLint v0,
  GLint v1
) {
  (*fnptr)(location, v0, v1);
}

void glUniform3i(
  void (*fnptr)(GLint, GLint, GLint, GLint),
  GLint location,
  GLint v0,
  GLint v1,
  GLint v2
) {
  (*fnptr)(location, v0, v1, v2);
}

void glUniform4i(
  void (*fnptr)(GLint, GLint, GLint, GLint, GLint),
  GLint location,
  GLint v0,
  GLint v1,
  GLint v2,
  GLint v3
) {
  (*fnptr)(location, v0, v1, v2, v3);
}

void glUniform1fv(
  void (*fnptr)(GLint, GLsizei, const GLfloat*),
  GLint location,
  GLsizei count,
  const GLfloat* value
) {
  (*fnptr)(location, count, value);
}

void glUniform2fv(
  void (*fnptr)(GLint, GLsizei, const GLfloat*),
  GLint location,
  GLsizei count,
  const GLfloat* value
) {
  (*fnptr)(location, count, value);
}

void glUniform3fv(
  void (*fnptr)(GLint, GLsizei, const GLfloat*),
  GLint location,
  GLsizei count,
  const GLfloat* value
) {
  (*fnptr)(location, count, value);
}

void glUniform4fv(
  void (*fnptr)(GLint, GLsizei, const GLfloat*),
  GLint location,
  GLsizei count,
  const GLfloat* value
) {
  (*fnptr)(location, count, value);
}

void glUniform1iv(
  void (*fnptr)(GLint, GLsizei, const GLint*),
  GLint location,
  GLsizei count,
  const GLint* value
) {
  (*fnptr)(location, count, value);
}

void glUniform2iv(
  void (*fnptr)(GLint, GLsizei, const GLint*),
  GLint location,
  GLsizei count,
  const GLint* value
) {
  (*fnptr)(location, count, value);
}

void glUniform3iv(
  void (*fnptr)(GLint, GLsizei, const GLint*),
  GLint location,
  GLsizei count,
  const GLint* value
) {
  (*fnptr)(location, count, value);
}

void glUniform4iv(
  void (*fnptr)(GLint, GLsizei, const GLint*),
  GLint location,
  GLsizei count,
  const GLint* value
) {
  (*fnptr)(location, count, value);
}

void glUniformMatrix2fv(
  void (*fnptr)(GLint, GLsizei, GLboolean, const GLfloat*),
  GLint location,
  GLsizei count,
  GLboolean transpose,
  const GLfloat* value
) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix3fv(
  void (*fnptr)(GLint, GLsizei, GLboolean, const GLfloat*),
  GLint location,
  GLsizei count,
  GLboolean transpose,
  const GLfloat* value
) {
  (*fnptr)(location, count, transpose, value);
}

void glUniformMatrix4fv(
  void (*fnptr)(GLint, GLsizei, GLboolean, const GLfloat*),
  GLint location,
  GLsizei count,
  GLboolean transpose,
  const GLfloat* value
) {
  (*fnptr)(location, count, transpose, value);
}

void glVertexAttrib1f(
  void (*fnptr)(GLuint, GLfloat),
  GLuint index,
  GLfloat x
) {
  (*fnptr)(index, x);
}

void glVertexAttrib2f(
  void (*fnptr)(GLuint, GLfloat, GLfloat),
  GLuint index,
  GLfloat x,
  GLfloat y
) {
  (*fnptr)(index, x, y);
}

void glVertexAttrib3f(
  void (*fnptr)(GLuint, GLfloat, GLfloat, GLfloat),
  GLuint index,
  GLfloat x,
  GLfloat y,
  GLfloat z
) {
  (*fnptr)(index, x, y, z);
}

void glVertexAttrib4f(
  void (*fnptr)(GLuint, GLfloat, GLfloat, GLfloat, GLfloat),
  GLuint index,
  GLfloat x,
  GLfloat y,
  GLfloat z,
  GLfloat w
) {
  (*fnptr)(index, x, y, z, w);
}

void glVertexAttrib1fv(
  void (*fnptr)(GLuint, const GLfloat*),
  GLuint index,
  const GLfloat* v
) {
  (*fnptr)(index, v);
}

void glVertexAttrib2fv(
  void (*fnptr)(GLuint, const GLfloat*),
  GLuint index,
  const GLfloat* v
) {
  (*fnptr)(index, v);
}

void glVertexAttrib3fv(
  void (*fnptr)(GLuint, const GLfloat*),
  GLuint index,
  const GLfloat* v
) {
  (*fnptr)(index, v);
}

void glVertexAttrib4fv(
  void (*fnptr)(GLuint, const GLfloat*),
  GLuint index,
  const GLfloat* v
) {
  (*fnptr)(index, v);
}

void glVertexAttribPointer(
  void (*fnptr)(GLuint, GLint, GLenum, GLboolean, GLsizei, const void*),
  GLuint index,
  GLint size,
  GLenum type,
  GLboolean normalized,
  GLsizei stride,
  const void* pointer
) {
  (*fnptr)(index, size, type, normalized, stride, pointer);
}

/// 5.14.11 Writing to the drawing buffer

void glClear(
  void (*fnptr)(GLbitfield),
  GLbitfield mask
) {
  (*fnptr)(mask);
}

void glDrawArrays(
  void (*fnptr)(GLenum, GLint, GLsizei),
  GLenum mode,
  GLint first,
  GLsizei count
) {
  (*fnptr)(mode, first, count);
}

void glDrawElements(
  void (*fnptr)(GLenum, GLsizei, GLenum, const void*),
  GLenum mode,
  GLsizei count,
  GLenum type,
  const void* indices
) {
  (*fnptr)(mode, count, type, indices);
}

void glFinish(
  void (*fnptr)(void)
) {
  (*fnptr)();
}

void glFlush(
  void (*fnptr)(void)
) {
  (*fnptr)();
}

/// 5.14.12 Reading back pixels

void glReadPixels(
  void (*fnptr)(GLint, GLint, GLsizei, GLsizei, GLenum, GLenum, void*),
  GLint x,
  GLint y,
  GLsizei width,
  GLsizei height,
  GLenum format,
  GLenum type,
  void* pixels
) {
  (*fnptr)(x, y, width, height, format, type, pixels);
}

/// (WebGL 1) EXT: OES_vertex_array_object

void glBindVertexArrayOES(
  void (*fnptr)(GLuint),
  GLuint array
) {
  (*fnptr)(array);
}

GLuint glGenVertexArraysOES(
  GLuint (*fnptr)(GLuint, GLuint*),
  GLuint n,
  GLuint* arrays
) {
  return (*fnptr)(n, arrays);
}

void glDeleteVertexArraysOES(
  void (*fnptr)(GLuint, GLuint*),
  GLuint n,
  GLuint* arrays
) {
  (*fnptr)(n, arrays);
}

GLboolean glIsVertexArrayOES(
  GLboolean (*fnptr)(GLuint),
  GLuint array
) {
  return (*fnptr)(array);
}

/// WebGL 2

void glGetInteger64v(
  void (*fnptr)(GLenum, GLint64*),
  GLenum pname,
  GLint64* data
) {
  (*fnptr)(pname, data);
}

void glGetIntegeri_v(
  void (*fnptr)(GLenum, GLuint, GLint*),
  GLenum target,
  GLuint index,
  GLint* data
) {
  (*fnptr)(target, index, data);
}

void glGetInteger64i_v(
  void (*fnptr)(GLenum, GLuint, GLint64*),
  GLenum target,
  GLuint index,
  GLint64* data
) {
  (*fnptr)(target, index, data);
}

void glGetBufferParameteri64v(
  void (*fnptr)(GLenum, GLenum, GLint64*),
  GLenum target,
  GLenum pname,
  GLint64* params
) {
  (*fnptr)(target, pname, params);
}

void glCopyBufferSubData(
  void (*fnptr)(GLenum, GLenum, GLintptr, GLintptr, GLsizeiptr),
  GLenum readTarget,
  GLenum writeTarget,
  GLintptr readOffset,
  GLintptr writeOffset,
  GLsizeiptr size
) {
  (*fnptr)(readTarget, writeTarget, readOffset, writeOffset, size);
}

void glGetBufferSubData(
  void (*fnptr)(GLenum, GLintptr, GLsizeiptr, void*),
  GLenum target,
  GLintptr offset,
  GLsizeiptr size,
  void* data
) {
  (*fnptr)(target, offset, size, data);
}

/// 3.7.4 Framebuffer objects

void glBlitFramebuffer(
  void (*fnptr)(GLint, GLint, GLint, GLint, GLint, GLint, GLint, GLint, GLbitfield, GLenum),
  GLint srcX0,
  GLint srcY0,
  GLint srcX1,
  GLint srcY1,
  GLint dstX0,
  GLint dstY0,
  GLint dstX1,
  GLint dstY1,
  GLbitfield mask,
  GLenum filter
) {
  (*fnptr)(srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter);
}

void glFramebufferTextureLayer(
  void (*fnptr)(GLenum, GLenum, GLuint, GLint, GLint),
  GLenum target,
  GLenum attachment,
  GLuint texture,
  GLint level,
  GLint layer
) {
  (*fnptr)(target, attachment, texture, level, layer);
}

void glInvalidateFramebuffer(
  void (*fnptr)(GLenum, GLsizei, const GLenum*),
  GLenum target,
  GLsizei numAttachments,
  const GLenum* attachments
) {
  (*fnptr)(target, numAttachments, attachments);
}

void glInvalidateSubFramebuffer(
  void (*fnptr)(GLenum, GLsizei, const GLenum*, GLint, GLint, GLsizei, GLsizei),
  GLenum target,
  GLsizei numAttachments,
  const GLenum* attachments,
  GLint x,
  GLint y,
  GLsizei width,
  GLsizei height
) {
  (*fnptr)(target, numAttachments, attachments, x, y, width, height);
}

void glReadBuffer(
  void (*fnptr)(GLenum),
  GLenum src
) {
  (*fnptr)(src);
}

/// 3.7.5 Renderbuffer objects

void glGetInternalformativ(
  void (*fnptr)(GLenum, GLenum, GLenum, GLsizei, GLint*),
  GLenum target,
  GLenum internalformat,
  GLenum pname,
  GLsizei bufSize,
  GLint* params
) {
  (*fnptr)(target, internalformat, pname, bufSize, params);
}

void glRenderbufferStorageMultisample(
  void (*fnptr)(GLenum, GLsizei, GLenum, GLsizei, GLsizei),
  GLenum target,
  GLsizei samples,
  GLenum internalformat,
  GLsizei width,
  GLsizei height
) {
  (*fnptr)(target, samples, internalformat, width, height);
}

/// 3.7.6 Texture objects

void glGetTexParameterfv(
  void (*fnptr)(GLenum, GLenum, GLfloat*),
  GLenum target,
  GLenum pname,
  GLfloat* params
) {
  (*fnptr)(target, pname, params);
}

void glTexStorage2D(
  void (*fnptr)(GLenum, GLsizei, GLenum, GLsizei, GLsizei),
  GLenum target,
  GLsizei levels,
  GLenum internalformat,
  GLsizei width,
  GLsizei height
) {
  (*fnptr)(target, levels, internalformat, width, height);
}

void glTexStorage3D(
  void (*fnptr)(GLenum, GLsizei, GLenum, GLsizei, GLsizei, GLsizei),
  GLenum target,
  GLsizei levels,
  GLenum internalformat,
  GLsizei width,
  GLsizei height,
  GLsizei depth
) {
  (*fnptr)(target, levels, internalformat, width, height, depth);
}

/// 3.7.11 Multiple render targets

void glDrawBuffers(
  void (*fnptr)(GLsizei, const GLenum*),
  GLsizei n,
  const GLenum* bufs
) {
  (*fnptr)(n, bufs);
}

/// 3.7.17 Vertex Array objects

void glBindVertexArray(
  void (*fnptr)(GLuint),
  GLuint array
) {
  (*fnptr)(array);
}

void glDeleteVertexArrays(
  void (*fnptr)(GLsizei, const GLuint*),
  GLsizei n,
  const GLuint* arrays
) {
  (*fnptr)(n, arrays);
}

void glGenVertexArrays(
  void (*fnptr)(GLsizei, GLuint*),
  GLsizei n,
  GLuint* arrays
) {
  (*fnptr)(n, arrays);
}

GLboolean glIsVertexArray(
  GLboolean (*fnptr)(GLuint),
  GLuint array
) {
  return (*fnptr)(array);
}
