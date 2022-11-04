import React, { useEffect, useState } from "react";
import useWebGL from "./useWebGL";
import { FPS30, FPS60 } from "./useWebGL";


const HeaderCanvas = () => {
  const [canvas, resizeCanvas] = useWebGL({
    initWidth: window.innerWidth,
    initHeight: 800,
    updateInterval: FPS30,
  })

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas)
  })

  return (
    <>
      {canvas}
    </>
  );
};

export default HeaderCanvas;