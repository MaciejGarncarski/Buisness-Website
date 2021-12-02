import React from "react";
import TiltContainer from "./CardTilt.styles";
import useReducedMotion from "../../hooks/useReducedMotion";

interface TCardTilt {
  children: React.ReactNode;
  bg: string;
  border: string;
}

const CardTilt = function ({ children, bg, border }: TCardTilt) {
  const usesReducedMotion = useReducedMotion();
  let tiltY = 0;
  let tiltX = 0;
  if (!usesReducedMotion) {
    tiltY = 3;
    tiltX = 5;
  }
  return (
    <TiltContainer
      perspective={500}
      tiltMaxAngleY={tiltY}
      tiltMaxAngleX={tiltX}
      bg={bg}
      border={border}
      gyroscope
    >
      {children}
    </TiltContainer>
  );
};

export default CardTilt;
