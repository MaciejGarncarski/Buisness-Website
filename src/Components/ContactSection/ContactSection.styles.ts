import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 40em;
  padding: 0em 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
    height: 30em;
  }
  & > div:last-child {
    width: 100%;
    height: 100%;
    box-shadow: -1em 1em ${({ theme }) => theme.blue};
    border: 4px solid ${({ theme }) => theme.black};
  }
`;

export default Container;
