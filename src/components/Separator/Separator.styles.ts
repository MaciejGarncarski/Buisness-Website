import styled from 'styled-components';

const SeparatorStyle = styled.hr`
  width: 70%;
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.black};
  border-bottom: 1px solid ${({ theme }) => theme.black};
`;

export { SeparatorStyle };
