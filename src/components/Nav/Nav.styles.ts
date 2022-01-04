import styled from 'styled-components';

const NavContainer = styled.nav`
  @keyframes stick {
    from {
      transform: translateY(-0.75em);
    }
    to {
      transform: translateY(0);
    }
  }

  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.darkYellow};
  box-shadow: 0px 0px 20px ${({ theme }) => theme.darkYellow};
  z-index: 1001;
  position: absolute;
  left: 0;
  &.sticked {
    position: fixed;
    top: 0;
    animation: stick 600ms ease;
  }
  &.static {
    position: absolute;
    bottom: 0;
  }
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
