import styled from 'styled-components';

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
  padding: 0.4em 1.4em;
  width: 100%;
  height: 100%;
  transition: all ease-in-out 200ms;
  transition-property: box-shadow, color;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding: 0.45em 1.75em;
  }
  &:hover,
  :focus {
    box-shadow: 0em 0em transparent;
    outline: 2px solid ${({ theme }) => theme.black};
    outline-offset: -2px;
    border-color: transparent;
  }
  & > svg {
    width: 1.6em;
    height: 100%;
  }
`;

export { ListLink, LinkAnchor };
