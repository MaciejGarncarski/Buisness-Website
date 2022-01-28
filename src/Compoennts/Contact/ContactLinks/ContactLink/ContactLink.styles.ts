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
  font-size: 1.7em;
  text-decoration: none;
  transition: all ease-in-out 300ms;
  transition-property: transform, box-shadow, background-color, border-color;
  width: 100%;

  &:hover,
  &:focus {
    transform: scale(1.05);
    outline: 2px solid ${({ theme }) => theme.black};
  }

  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    gap: 0.3em;
    width: 75%;
    font-size: 1.5em;
    background-color: none;
    border: 2px solid transparent;
    &:hover {
      border-color: ${({ theme }) => theme.black};
      background-color: ${({ theme }) => theme.darkYellow};
      box-shadow: -0.5em 0.5em ${({ theme }) => theme.black};
      transform: translate(0.5em, -0.5em);
    }
    &:focus {
      transform: scale(1);
      outline-offset: 5px;
    }
  }

  & > svg {
    font-size: 2em;
  }
`;

export { Link };
