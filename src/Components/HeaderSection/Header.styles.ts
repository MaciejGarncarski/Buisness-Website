import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: hidden;
  display: flex;
  row-gap: 5em;
  flex-direction: column;
  padding: 0 1em 2em 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    align-items: center;
    justify-content: center;
    padding-bottom: 5em;
    row-gap: 8em;
  }
`;

const H1 = styled.h1`
  position: relative;
  z-index: 1;
  margin: 2em auto 0 auto;
  padding: 0 0.5em;
  color: ${({ theme }) => theme.black};
  line-height: 1.2;
  font-weight: 700;
  font-size: 4em;
  text-align: center;
  &::before {
    content: '';
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    margin-top: 0;
    &::before {
      width: 67%;
      height: 100%;
      display: block;
      position: absolute;
      left: -5%;
      bottom: 0;
      z-index: -1;
      background-color: ${({ theme }) => theme.green};
    }
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.black};
  z-index: -1;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  text-align: center;
  font-size: 2em;
  padding: 0 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding: 0 12em;
  }
`;

export { HeaderContainer, Description, H1 };
