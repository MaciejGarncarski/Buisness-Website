import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { isMobile } from "react-device-detect";
import Theme from "./styledcomponets/Theme";
import GlobalStyle from "./styledcomponets/GlobalStyle";
import Nav from "./Nav/Nav";
import Cursor from "./Cursor/Cursor";
import Header from "./Header/Header";
import About from "./AboutSection/AboutSection";
import Footer from "./Footer/Footer";

type ThemeType = typeof Theme;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15em;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
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
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export type { ThemeType };
export default App;
