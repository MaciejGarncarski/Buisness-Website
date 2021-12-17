import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 2em;
  padding-bottom: 6em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
    padding: 8em 2em;
  }

  & > div:last-child {
    & a {
      cursor: pointer;
    }
    width: 100%;
    height: 100%;
    box-shadow: -1em 1em ${({ theme }) => theme.blue};
    border: 4px solid ${({ theme }) => theme.black};
    grid-column: 2;
  }
`;

export { Container };
