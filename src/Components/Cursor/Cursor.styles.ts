import styled from "styled-components";

const PrimaryCursor = styled.div`
  width: 2em;
  height: 2em;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 50%;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  position: fixed;
  left: 0;
`;

const SecondaryCursor = styled.div`
  width: 4em;
  height: 4em;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 50%;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  position: fixed;
  left: 0;
`;

export { PrimaryCursor, SecondaryCursor };
