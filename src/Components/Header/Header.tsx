import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { HeaderContainer, H1, Description } from "./Header.styles";
import { Triangle, Rectangle, Circle } from "../Shapes/Shapes";
import ScrollMessage from "../ScrollMessage/ScrollMessage";
import useScrollPosition from "../../hooks/useScrollPosition";
import useReducedMotion from "../../hooks/useReducedMotion";

const Header: React.FC<{ id: string }> = function ({ id }) {
  const { offsetY } = useScrollPosition();
  const usesReducedMotion = useReducedMotion();

  let multiply = 0;
  if (usesReducedMotion) {
    multiply = 0;
  } else if (isMobile && !usesReducedMotion) {
    multiply = Math.floor(offsetY * 0.2);
  } else if (!isMobile && !usesReducedMotion) {
    multiply = Math.floor(offsetY * 0.45);
  }

  return (
    <HeaderContainer id={id}>
      <H1 style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
        Business
      </H1>
      <Triangle multiply={multiply} />
      <Rectangle multiply={multiply} />
      <Circle multiply={multiply} />
      <Description style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
        Armed and geared cause I just broke out the prison charged by the system
        - for murdering the rhythm! Nightmares like Wes Craven people gunning,
        my third eye seen it coming, before it happened. Small change, they
        putting shame in the game.
      </Description>
      <ScrollMessage multiply={multiply} />
    </HeaderContainer>
  );
};

export default Header;
