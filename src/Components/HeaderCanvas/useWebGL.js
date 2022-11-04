import React, { useEffect } from 'react'
import { useRef } from 'react'
import { compileShader, getAttributeLocation, getUniformLocation } from "../../Utilities/ShaderTools"
import { fragmentSource, vertexSource } from './ColorDistortionShaders';

export const FPS30 = 1000 / 30;
export const FPS60 = 1000 / 60;

const useWebGL = ({ initWidth, initHeight, onInit, onResize }) => {
  const canvasRef = useRef(null);
  const programRef = useRef(null);
  const timeHandleRef = useRef(null);
  const widthHandleRef = useRef(null);
  const heightHandleRef = useRef(null);

  // Fire only on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const vertexShader = compileShader(gl, vertexSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fragmentSource, gl.FRAGMENT_SHADER);

    programRef.current = gl.createProgram();
    const program = programRef.current;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    var vertexData = new Float32Array([
      -1.0, 1.0,
      -1.0, -1.0,
      1.0, 1.0,
      1.0, -1.0,
    ]);

    var vertexDataBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

    var positionHandle = getAttributeLocation(gl, program, "position");
    timeHandleRef.current = getUniformLocation(gl, program, 'time');
    widthHandleRef.current = getUniformLocation(gl, program, 'width');
    heightHandleRef.current = getUniformLocation(gl, program, 'height');

    gl.enableVertexAttribArray(positionHandle);
    gl.vertexAttribPointer(
      positionHandle,
      2,
      gl.FLOAT,
      false,
      2 * 4,
      0
    )

    var time = 0.0;
    gl.uniform1f(widthHandleRef.current, window.screen.width);
    gl.uniform1f(heightHandleRef.current, window.screen.height);

    var lastFrame = Date.now();
    const draw = () => {
      // console.log('attempting to render')
      let thisFrame = Date.now();
      time += (thisFrame - lastFrame) / 770;
      lastFrame = thisFrame;
      gl.uniform1f(timeHandleRef.current, time);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      requestAnimationFrame(draw);
    }

    draw();

    console.log('init occurred')

  }, []);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    canvas.width = window.innerWidth;
    gl.viewport(0, 0, canvas.width, initHeight);
    gl.uniform1f(widthHandleRef.current, window.screen.width);
  }

  return [
    <canvas
      ref={canvasRef}
      width={initWidth}
      height={initHeight}
    />,
    resizeCanvas
  ]
}

export default useWebGL;