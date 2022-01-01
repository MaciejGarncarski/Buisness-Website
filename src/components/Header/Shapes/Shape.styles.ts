import styled from 'styled-components';

const Container = styled.div.attrs({
  role: 'img',
  ariaLabel: 'Decoration shape',
  title: 'Decoration shape',
})`
  width: clamp(7.8em, 20vw, 10em);
  height: clamp(7.8em, 20vw, 10em);
  position: absolute;
  will-change: transform;
  -webkit-user-drag: none;
  user-select: none;
  overflow: hidden;
  z-index: -1;
`;

const TriangleContainer = styled(Container)`
  width: clamp(15em, 25vw, 20em);
  height: clamp(15em, 25vw, 20em);
  top: 3em;
  left: 0.5em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    width: auto;
    height: 28vw;
    left: 8vw;
  }
`;

const RectangleContainer = styled(Container)`
  top: 15em;
  right: 1.5em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    width: auto;
    height: 16vw;
    right: 10vw;
    top: 50vh;
  }
`;

const CircleContainer = styled(Container)`
  top: 1em;
  right: 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    width: auto;
    height: 16vw;
    right: 17vw;
  }
`;

export { TriangleContainer, RectangleContainer, CircleContainer };
