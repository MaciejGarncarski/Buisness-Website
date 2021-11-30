import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled(motion.nav)<{ isSticked: boolean }>`
  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  background: ${({ theme }) => theme.darkYellow};
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
  z-index: 3;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.8em;
`;

const ListLink = styled.li`
  background: ${({ theme }) => theme.green};
  border: 2px solid ${({ theme }) => theme.blue};
  box-shadow: -0.25em 0.25em ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.black};
  padding: 0.5em 1.6em;
  display: flex;
  justify-content: center;

  & > a {
    text-decoration: none;
  }

  & > svg {
    width: 1.6em;
    height: 100%;
  }
`;

export { NavContainer, List, ListLink };
