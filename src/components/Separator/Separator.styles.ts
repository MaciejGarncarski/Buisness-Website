import styled from 'styled-components';

const SeparatorStyle = styled.hr`
  width: 70%;
  margin: 0 auto;
  height: 0.1em;
  border: 0;
  border-radius: 1em;
  background: ${({ theme }) => theme.black};
`;

export { SeparatorStyle };
