import styled from 'styled-components';

const ListLink = styled.li`
  display: flex;
  justify-content: center;
  @supports (not (gap: 10px)) {
    margin: 0 max(4.5vw, 3em);
  }
`;

const LinkAnchor = styled.a`
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.green};
  border: 2px solid ${({ theme }) => theme.black};
  box-shadow: -0.25em 0.25em 0 ${({ theme }) => theme.blue};
  transform: translate(0.25em, -0.25em);
  transition: all ease-in-out 200ms;
  transition-property: transform, box-shadow;
  padding: 0.5em 2em;

  &:focus {
    box-shadow: 0em 0em transparent;
    outline: 2px solid ${({ theme }) => theme.black};
    outline-offset: 2px;
    border-color: trnsparent;
    transform: translate(0, 0);
  }

  &:hover {
    transform: translate(0, 0);
    box-shadow: none;
    background-color: ${({ theme }) => theme.darkYellow};
  }

  & > svg {
    width: 2.25em;
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding: 0.45em 1.75em;

    & > svg {
      width: 1.5em;
    }
  }
`;

export { ListLink, LinkAnchor };
