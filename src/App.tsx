import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import GlobalStyle from "./GlobalStyle";
import useDeviceWidth from "./hooks/useDeviceWidth";
import Nav from "./Components/Nav/Nav";
import Cursor from "./Components/Cursor/Cursor";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

type ThemeType = typeof Theme;

const Placeholder = styled.div`
  height: 100vh;
  width: 10em;
  padding-top: 7em;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15em;
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
        <About />
        <Placeholder id="test" />
      </MainContainer>
    </ThemeProvider>
  );
};

export type { ThemeType };
export default App;
