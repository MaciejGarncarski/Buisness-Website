import React from "react";
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
        Armed and geared cause I just broke out the prison charged by the system
        - for murdering the rhythm! Nightmares like Wes Craven people gunning,
        my third eye seen it coming, before it happened. Small change, they
        putting shame in the game.
      </Description>
      <ScrollMessage multiplayer={multiplayer} />
    </HeaderContainer>
  );
};

export default Header;
