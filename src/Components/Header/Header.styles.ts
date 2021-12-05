import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  row-gap: 8em;
  position: relative;
  overflow-y: hidden;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    align-items: center;
    justify-content: center;
    padding-bottom: 5em;
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.black};
  font-weight: 700;
  font-size: 4em;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.4em;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding-top: 0;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2em;
  z-index: -1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;

  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding: 0 12em;
    text-align: center;
  }
`;

export { HeaderContainer, Description, H1 };
