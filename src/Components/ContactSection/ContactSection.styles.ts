import styled from 'styled-components';

const Container = styled.section`
  width: max(70vw, 20em);
  height: max(70vh, 30em);
  & > div {
    box-shadow: -1em 1em 0 ${({ theme }) => theme.blue};
    border: 5px solid ${({ theme }) => theme.black};
  }
`;

export default Container;
