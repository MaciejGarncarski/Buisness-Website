import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  gap: 9.5em;
  position: relative;
  overflow-y: hidden;
  scroll-padding-bottom: 1em;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.black};
  font-weight: 700;
  font-size: 4em;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.3em;
  text-align: center;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.black};
  padding: 0 8em;
  font-size: 2em;
  z-index: -1;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;

export { HeaderContainer, Description, H1 };
