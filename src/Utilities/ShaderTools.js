export const getAttributeLocation = (gl, program, name) => {
  var attributeLocation = gl.getAttribLocation(program, name);
  if (attributeLocation === -1) {
    throw new Error("Cannot find attribute " + name + ".");
  }
  return attributeLocation;
}

export const compileShader = (gl, shaderSource, shaderType) => {
  var shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error("Shader compile failed with: " + gl.getShaderInfoLog(shader));
  }

  return shader;
}

export const getUniformLocation = (gl, program, name) => {
  const attributeLocation = gl.getUniformLocation(program, name);
  if (attributeLocation === -1) {
    throw new Error("Cannot find uniform  " + name + ".");
  }
  return attributeLocation;
}