import styled from "styled-components";

const Container = styled.div`
  width: clamp(7.8em, 20vw, 10em);
  height: clamp(7.8em, 20vw, 10em);
  position: absolute;
  will-change: transform;
`;

const TriangleContainer = styled(Container)`
  width: clamp(15em, 25vw, 20em);
  height: clamp(15em, 25vw, 20em);
  top: 3em;
  left: 0.5em;
`;

const RectangleContainer = styled(Container)`
  top: 15em;
  right: 1.5em;
`;

const CircleContainer = styled(Container)`
  top: 1em;
  right: 1em;
`;

export { TriangleContainer, RectangleContainer, CircleContainer };
