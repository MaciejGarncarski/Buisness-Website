import styled, { css } from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  /* padding-top: 22em; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const CardContainer = styled.article<IProps>`
//   background: ${({ bg, theme }) => theme[bg]};
//   width: 16em;
//   height: 25em;
//   position: relative;
//   border: 2px solid ${({ border, theme }) => theme[border]};
//   box-shadow: -0.75em 0.75em ${({ border, theme }) => theme[border]};
//   transform: translateZ(50px);

//   @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
//     width: 50vw;
//     height: 30em;
//     border: 5px solid ${({ border, theme }) => theme[border]};
//   } ;
// `;

const CardContainer = styled.article`
  width: 100%;
  height: 100%;
  transform: translateZ(90px) scale(0.8);
`;

const H3 = css`
  position: absolute;
  font-size: 2em;
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

export { Container, CardContainer, Heading, Label };
