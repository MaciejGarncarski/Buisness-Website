import styled from 'styled-components';

const NavContainer = styled.nav<{ isSticked: boolean }>`
  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.darkYellow};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.green};
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
    gap: 3.5vw;
    @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
      gap: calc(2em + 2vw);
    }
  }
`;

export { NavContainer, List };
