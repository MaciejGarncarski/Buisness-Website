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
  multiply: number;
};

const Triangle = function ({ multiply }: ShapeProp) {
  return (
    <TriangleContainer
      style={{
        transform: `translate3d(0, ${multiply}px, 0)`,
      }}
    >
      <ImgScaled src={triangle} alt="Triangle" />
    </TriangleContainer>
  );
};

const Rectangle = function ({ multiply }: ShapeProp) {
  return (
    <RectangleContainer
      style={{
        transform: `translate3d(0, ${multiply}px, 0)`,
      }}
    >
      <ImgScaled src={rectangle} alt="Triangle" />
    </RectangleContainer>
  );
};

const Circle = function ({ multiply }: ShapeProp) {
  return (
    <CircleContainer style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
      <ImgScaled src={circle} alt="Triangle" />
    </CircleContainer>
  );
};

export { Triangle, Rectangle, Circle };
