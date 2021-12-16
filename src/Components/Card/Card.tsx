import { CardContainer, Label, Heading, IconContainer, CardDescription } from './Card.styles';

import { TCard } from '../../Types/types';

const Card = ({ label, heading, description, icon }: TCard) => {
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
