import styled from "styled-components";

export const H1 = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: ${props => props.fontSize};
  letter-spacing: ${props => props.letterSpacing};
  text-align: justify;
  white-space: nowrap;
  
  user-select: none;
  overflow: hidden;
  translate: 0pt ${props => props.translateY};
  padding-left: calc(${props => props.paddingLeft} + env(safe-area-inset-left));
  
  color: #1b1f23;
`;
