import { CardContainer as CardContainerProps } from '../../../types/types';

import {
  TiltContainer,
  CardContainer,
  Label,
  Heading,
  IconContainer,
  CardDescription,
} from './Card.styles';

const Card = ({ bg, border, label, heading, Icon, description }: CardContainerProps) => {
  return (
    <TiltContainer tiltMaxAngleX={3} tiltMaxAngleY={1} perspective={500} bg={bg} border={border}>
      <CardContainer>
        <Label>0{label}.</Label>
        <Heading>{heading}.</Heading>
        <IconContainer>{Icon}</IconContainer>
        <CardDescription>{description}</CardDescription>
      </CardContainer>
    </TiltContainer>
  );
};

export { Card };
