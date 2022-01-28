import styled from 'styled-components';

const Anchor = styled.a`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2));
  font-weight: 700;
`;

export { Anchor };
