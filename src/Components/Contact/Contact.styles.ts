import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ContactLink = styled.a`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  transition: background-color 300ms ease-in-out;
  padding: 2em 0;
  font-weight: 700;
  font-size: clamp(1em, 4vw, 1.5em);
  & > svg {
    font-size: 1.5em;
  }
  &:hover {
    background-color: ${({ theme }) => theme.green};
  }
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    width: 75%;
  }
`;

export { Container, ContactLink };
