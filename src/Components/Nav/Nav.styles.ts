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
  border-top: 1.5px solid ${({ theme }) => theme.green};
  border-bottom: 1.5px solid ${({ theme }) => theme.green};
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
  gap: max(4.5vw, 3em);
`;

const ListLink = styled.li`
  background: ${({ theme }) => theme.green};
  border: 2px solid ${({ theme }) => theme.black};
  box-shadow: -0.25em 0.25em ${({ theme }) => theme.blue};
  display: flex;
  justify-content: center;
`;

const LinkAnchor = styled.a`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  display: block;
  padding: 0.4em 1.65em;
  width: 100%;
  height: 100%;
  & > svg {
    width: 1.6em;
    height: 100%;
  }
`;

export { NavContainer, List, ListLink, LinkAnchor };
