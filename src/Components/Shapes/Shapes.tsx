import React from "react";
import {
  TriangleContainer,
  RectangleContainer,
  CircleContainer,
} from "./Shape.styles";
import ImgScaled from "../ImgScaled/ImgScaled";
import triangle from "../../Assets/Header/triangle.svg";
import circle from "../../Assets/Header/circle.svg";
import rectangle from "../../Assets/Header/rectangle.svg";

type ShapeProp = {
  multiplayer: number;
};

const Triangle = function ({ multiplayer }: ShapeProp) {
  return (
    <TriangleContainer
      style={{
        transform: `translate3d(0, ${multiplayer}px, 0)`,
      }}
    >
      <ImgScaled
        src={triangle}
        alt="Triangle"
        initial={{ x: -150, y: 40 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
      />
    </TriangleContainer>
  );
};

const Rectangle = function ({ multiplayer }: ShapeProp) {
  return (
    <RectangleContainer
      style={{
        transform: `translate3d(0, ${multiplayer}px, 0)`,
      }}
    >
      <ImgScaled
        src={rectangle}
        alt="Triangle"
        initial={{ x: 150, y: 70 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
      />
    </RectangleContainer>
  );
};

const Circle = function ({ multiplayer }: ShapeProp) {
  return (
    <CircleContainer
      style={{ transform: `translate3d(0, ${multiplayer}px, 0)` }}
    >
      <ImgScaled
        src={circle}
        alt="Triangle"
        initial={{ x: 150, y: -40 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
      />
    </CircleContainer>
  );
};

export { Triangle, Rectangle, Circle };
