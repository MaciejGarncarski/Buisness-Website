import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 2em;
  padding-bottom: 6em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
    padding: 10em 2em;
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

export default Container;
