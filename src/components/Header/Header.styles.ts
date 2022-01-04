import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: hidden;
  display: flex;
  row-gap: 9em;
  font-size: 1rem;
  flex-direction: column;
  padding: 0 1em 2em 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    align-items: center;
    justify-content: center;
    padding-bottom: 5em;
    row-gap: 8em;
    font-size: 1em;
  }
`;

const H1 = styled.h1`
  position: relative;
  z-index: 1;
  margin-top: 2em;
  color: ${({ theme }) => theme.black};
  line-height: 1.2;
  font-weight: 700;
  font-size: 4em;
  text-align: center;
  text-transform: capitalize;

  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding: 0.05em 0.45em;
    margin-top: 0;
    box-shadow: -0.25em 0.25em ${({ theme }) => theme.blue};
    background-color: ${({ theme }) => theme.green};
    border: 2px solid ${({ theme }) => theme.black};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.black};
  z-index: -1;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  font-size: 2em;
  padding: 0 1em;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    padding: 0 12em;
  }
`;

export { HeaderContainer, Description, H1 };
