import React from "react";
import Tilt from "react-parallax-tilt";
import { HeaderContainer, H1, Description } from "./Header.styles";
import { Triangle, Rectangle, Circle } from "../Shapes/Shapes";
import useScrollPosition from "../../hooks/useScrollPosition";
import ScrollMessage from "../ScrollMessage/ScrollMessage";

const Header = function () {
  const { offsetY } = useScrollPosition();
  const multiplayer = Math.floor(offsetY * 0.45);
  return (
    <HeaderContainer id="header">
      <H1 style={{ transform: `translate3d(0, ${multiplayer}px, 0)` }}>
        Business
      </H1>
      <Triangle multiplayer={multiplayer} />
      <Rectangle multiplayer={multiplayer} />
      <Circle multiplayer={multiplayer} />
      <Description style={{ transform: `translate3d(0, ${multiplayer}px, 0)` }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta rerum
        quos nostrum asperiores exercitationem quo mollitia unde aut illo,
        officia cum pariatur obcaecati qui saepe tempora ipsum eos dolorem at?
      </Description>
      <ScrollMessage multiplayer={multiplayer} />
    </HeaderContainer>
  );
};

export default Header;
