import Tilt from "react-parallax-tilt";
import styled from "styled-components";

interface IProps {
  bg: string;
  border: string;
}

const TiltContainer = styled(Tilt)<IProps>`
  width: 16em;
  height: 25em;
  transform: translateZ(50px);
  background: ${({ bg, theme }) => theme[bg]};
  border: 2px solid ${({ border, theme }) => theme[border]};
  box-shadow: -0.75em 0.75em ${({ border, theme }) => theme[border]};
  transform-style: preserve-3d;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    width: 50vw;
    height: 30em;
    border: 5px solid ${({ border, theme }) => theme[border]};
  }
`;

export default TiltContainer;
