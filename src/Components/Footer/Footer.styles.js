import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
`;

export const WavesGroup = styled.div`
  
`;

export const SVG = styled.svg`
  position: absolute;
  z-index: ${props => props.zIndex};
  translate: 0 ${props => props.translateY + "px"};
  width: 100%;
`;