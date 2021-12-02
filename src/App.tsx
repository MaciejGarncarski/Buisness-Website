import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { isMobile } from "react-device-detect";
import Theme from "./Theme";
import GlobalStyle from "./GlobalStyle";
import Nav from "./Components/Nav/Nav";
import Cursor from "./Components/Cursor/Cursor";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

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
  return (
    <ThemeProvider theme={Theme}>
      {!isMobile && <Cursor />}
      <MainContainer>
        <GlobalStyle />
        <Header />
        <Nav />
        <About />
        <Placeholder id="test" />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export type { ThemeType };
export default App;
