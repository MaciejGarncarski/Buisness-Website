import Tilt from 'react-parallax-tilt';
import styled, { css } from 'styled-components';
import Triangle from '../../Assets/Header/circle.svg';

interface Props {
  bg: string;
  border: string;
}

const TiltContainer = styled(Tilt)<Props>`
  width: max(60vw, 18em);
  height: max(30vh, 60vh);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(50px);
  transform-style: preserve-3d;
  background: ${({ bg, theme }) => theme[bg]};
  border: 4px solid ${({ theme }) => theme.black};
  box-shadow: -1em 1em ${({ border, theme }) => theme[border]};
`;

const CardContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateZ(130px) scale(0.73);
  gap: 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    display: grid;
    place-items: center;
    grid-template-columns: 30% 1fr;
    gap: 0;
  }
`;

const IconContainer = styled.div`
  width: max(10vw, 5em);
  color: ${({ theme }) => theme.black};
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const CardDescription = styled.p`
  padding: 0 0.5em;
  color: ${({ theme }) => theme.black};
  font-size: 2em;
  text-align: center;
`;

const H3 = css`
  position: absolute;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
`;

const Heading = styled.h3`
  ${H3};
  bottom: 0;
  left: 0;
`;

const Label = styled.h3`
  ${H3};
  top: 0;
  right: 0;
`;

export { TiltContainer, CardContainer, Heading, Label, IconContainer, CardDescription };
