import React from "react";
import {
  CardContainer,
  Label,
  Heading,
  IconContainer,
  CardDescription,
} from "./Card.styles";

interface TCard {
  label: string;
  heading: string;
  description: string;
  icon: React.ReactNode;
}

const Card = function ({ label, heading, description, icon }: TCard) {
  return (
    <CardContainer>
      <Label>0{label}.</Label>
      <Heading>{heading}.</Heading>
      <IconContainer>{icon}</IconContainer>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
