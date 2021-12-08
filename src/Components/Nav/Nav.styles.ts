import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled(motion.nav)<{ isSticked: boolean }>`
  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.darkYellow};
  border-top: 1px solid ${({ theme }) => theme.blue};
  border-bottom: 1px solid ${({ theme }) => theme.blue};
  position: ${({ isSticked }) => (isSticked ? 'fixed' : 'absolute')};
  left: 0;
  z-index: 1001;
  ${({ isSticked }) =>
    isSticked
      ? `
    top: 0;
  `
      : `
    bottom: 0;
  `}
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  @supports (gap: 10px) {
    gap: max(4.5vw, 3em);
  }
`;

const ListLink = styled.li`
  display: flex;
  justify-content: center;
  @supports (not (gap: 10px)) {
    margin: 0 max(4.5vw, 3em);
  }
`;

const LinkAnchor = styled.a`
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.green};
  border: 2px solid ${({ theme }) => theme.black};
  box-shadow: -0.25em 0.25em ${({ theme }) => theme.blue};
  text-decoration: none;
  display: block;
  padding: 0.4em 1.65em;
  width: 100%;
  height: 100%;
  transition: all ease-in-out 200ms;
  transition-property: outline, transform, color;
  &:hover,
  :focus {
    transform: scale(1.15);
    outline: 2px solid ${({ theme }) => theme.blue};
    outline-offset: -2px;
    color: ${({ theme }) => theme.blue};
    border-color: none;
  }
  & > svg {
    width: 1.6em;
    height: 100%;
  }
`;

export { NavContainer, List, ListLink, LinkAnchor };
