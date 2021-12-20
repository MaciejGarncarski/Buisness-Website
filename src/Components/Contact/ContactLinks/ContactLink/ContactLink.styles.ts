import styled from 'styled-components';

const Link = styled.a`
  color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 4px solid transparent;
  padding: 0.7em 0;
  font-weight: 700;
  font-size: 1.5em;
  text-decoration: none;
  transition: all ease-in-out 300ms;
  transition-property: transform;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    gap: 0.3em;
    width: 75%;
  }
  &:hover,
  &:focus {
    transform: scale(1.12);
  }
  & > svg {
    font-size: 1.5em;
  }
`;

export { Link };
