import React from "react";
import TiltContainer from "./CardTilt.styles";

interface TCardTilt {
  children: React.ReactNode;
  bg: string;
  border: string;
}

const CardTilt = function ({ children, bg, border }: TCardTilt) {
  return (
    <TiltContainer
      perspective={500}
      tiltMaxAngleY={3}
      tiltMaxAngleX={5}
      bg={bg}
      border={border}
      gyroscope
    >
      {children}
    </TiltContainer>
  );
};

export default CardTilt;
