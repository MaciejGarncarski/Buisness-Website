import React from 'react';
import Map from '../Map/Map';
import Container from './ContactSection.styles';
import Contact from '../Contact/Contact';

const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Container id={id}>
      <Contact />
      <Map />
    </Container>
  );
};

export default ContactSection;
