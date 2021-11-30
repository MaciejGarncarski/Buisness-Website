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
      tiltMaxAngleY={6}
      tiltMaxAngleX={6}
      className="trackOnWindow"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      bg={bg}
      border={border}
    >
      {children}
    </TiltContainer>
  );
};

export default CardTilt;
