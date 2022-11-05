import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  overflow-x: clip;
  `;

export const WavesGroup = styled.div`
  
`;

export const SVG = styled.svg`
  position: absolute;
  z-index: ${props => props.zIndex};
  translate: 0 ${props => props.translateY + "px"};
  /* height: 12em; */
  width: max(1920px, 100%);
  transform-origin: 0% 50%;
`;