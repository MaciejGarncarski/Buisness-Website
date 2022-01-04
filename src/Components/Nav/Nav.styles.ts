import styled from 'styled-components';

const NavContainer = styled.nav`
  @keyframes stick {
    from {
      transform: translateY(-1.3em);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes static {
    from {
      transform: translateY(5em);
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
  box-shadow: 0px 0px 10px ${({ theme }) => theme.green};
  z-index: 1001;
  position: absolute;
  left: 0;
  &.sticked {
    position: fixed;
    top: 0;
    animation: stick 300ms ease;
  }
  &.static {
    position: absolute;
    bottom: 0;
    animation: static 300ms ease;
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
