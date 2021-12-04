import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 35em;
  padding: 0em 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  & > div:last-child {
    width: 100%;
    height: 100%;
    box-shadow: -1em 1em ${({ theme }) => theme.blue};
    border: 4px solid ${({ theme }) => theme.black};
  }
`;

export default Container;
