import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.darkYellow};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
`;

const Para = styled.p`
  color: ${({ theme }) => theme.black};
`;

export { FooterContainer, Para };
