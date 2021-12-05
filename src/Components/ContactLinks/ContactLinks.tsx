import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import { Container, ContactLink } from './ContactLinks.styles';

const ContactLinks = () => {
  return (
    <Container>
      <ContactLink href="tel:1234">
        <AiOutlinePhone />
        <p>TROLOLOLOLO</p>
      </ContactLink>
      <ContactLink href="mailto:maciejg0220@gmail.com">
        <AiOutlineMail />
        <p>maciejg0220@gmail.com</p>
      </ContactLink>
      <ContactLink href="#">
        <AiOutlineClockCircle />
        <p>Pn-Pt: 8:00-16:00</p>
      </ContactLink>
    </Container>
  );
};

export default ContactLinks;
