import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Tilt from "react-parallax-tilt";
import GlobalStyle from "./GlobalStyle";
import Nav from "./Components/Nav/Nav";
import Cursor from "./Components/Cursor/Cursor";
import Header from "./Components/Header/Header";
import Theme from "./Theme";
import useDeviceWidth from "./hooks/useDeviceWidth";

const Placeholder = styled.div`
  height: 100vh;
  width: 10em;
  padding-top: 7em;
`;

type ThemeType = typeof Theme;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > nav {
    color: ${({ theme }) => theme.color};
  }
`;
const App = function () {
  const { isSmallDevice } = useDeviceWidth();
  return (
    <ThemeProvider theme={Theme}>
      {!isSmallDevice && <Cursor />}
      <MainContainer>
        <GlobalStyle />
        <Header />
        <Nav />
        <Placeholder />
        <Placeholder id="test" />
      </MainContainer>
    </ThemeProvider>
  );
};

export type { ThemeType };
export default App;
