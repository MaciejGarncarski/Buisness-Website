import styled, { css } from 'styled-components';

const CardContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateZ(90px) scale(0.8);
  gap: 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    display: grid;
    place-items: center;
    grid-template-columns: 30% 1fr;
    gap: 0;
  }
`;

const IconContainer = styled.div`
  width: max(10vw, 5em);
  color: ${({ theme }) => theme.black};
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2em;
  text-align: center;
  padding: 0 0.5em;
`;

const H3 = css`
  position: absolute;
  font-size: 1.5em;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
`;

const Heading = styled.h3`
  ${H3};
  bottom: 0;
  left: 0;
`;

const Label = styled.h3`
  ${H3};
  top: 0;
  right: 0;
`;

export { CardContainer, Heading, Label, IconContainer, CardDescription };
