import React from "react";
import { CardContainer, Label, Heading } from "./Card.styles";

interface TCard {
  label: string;
  heading: string;
}

const Card = function ({ label, heading }: TCard) {
  return (
    <CardContainer>
      <Label>0{label}.</Label>
      <Heading>{heading}.</Heading>
    </CardContainer>
  );
};

export default Card;
