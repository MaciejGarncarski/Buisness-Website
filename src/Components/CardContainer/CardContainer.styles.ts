import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';

interface IProps {
  bg: string;
  border: string;
}

const TiltContainer = styled(Tilt)<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max(60vw, 18em);
  height: max(30vw, 25em);
  transform: translateZ(50px);
  background: ${({ bg, theme }) => theme[bg]};
  border: 4px solid ${({ theme }) => theme.black};
  box-shadow: -1em 1em ${({ border, theme }) => theme[border]};
  transform-style: preserve-3d;
`;

export default TiltContainer;
