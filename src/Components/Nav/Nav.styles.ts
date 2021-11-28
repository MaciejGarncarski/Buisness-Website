import styled from "styled-components";

const NavContainer = styled.nav<{ isSticked: boolean }>`
  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  background: #dcd6c0;
  position: ${({ isSticked }) => (isSticked ? "fixed" : "absolute")};
  left: 0;
  ${({ isSticked }) =>
    isSticked
      ? `
    top: 0;
  `
      : `
    bottom: 0;
  `}
  z-index: 1;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.8em;
`;

const ListLink = styled.li`
  padding: 0.5em 1.6em;
  background: ${({ theme }) => theme.green};
  display: flex;
  justify-content: center;
  & > a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
    & > svg {
      width: 1.6em;
      height: 100%;
    }
  }
`;

export { NavContainer, List, ListLink };
