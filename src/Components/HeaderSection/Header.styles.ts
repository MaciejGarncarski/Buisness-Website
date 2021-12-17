import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  padding-bottom: 2em;
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
  padding: 0 0.5em;
  margin-top: 2em;
  line-height: 1.2;
  text-align: center;
  position: relative;
  &::before {
    content: '';
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    margin-top: 0;
    &::before {
      left: -5%;
      bottom: 0;
      width: 67%;
      height: 100%;
      z-index: -1;
      position: absolute;
      display: block;
      background-color: ${({ theme }) => theme.green};
    }
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2em;
  z-index: -1;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  padding: 0 1em;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding: 0 12em;
  }
`;

export { HeaderContainer, Description, H1 };
