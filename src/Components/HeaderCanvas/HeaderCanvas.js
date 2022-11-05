import React, { useEffect, useState } from "react";
import TitleHeader from "../TitleHeader/TitleHeader";
import { Container, H1 } from "./HeaderCanvas.styles";
import useWebGL from "./useWebGL";
import { FPS30, FPS60 } from "./useWebGL";


const HeaderCanvas = () => {
  const [canvas, resizeCanvas] = useWebGL({
    initWidth: window.innerWidth,
    initHeight: 400,
    updateInterval: FPS30,
  })

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas)
  })

  return (
    <Container>
      {canvas}
      <TitleHeader text={"Some Resources"} />
    </Container>
  );
};

export default HeaderCanvas;