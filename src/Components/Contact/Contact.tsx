import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import styled from 'styled-components';
import Separator from '../Separator/Separator';
import { Container, ContactLink } from './Contact.styles';

const Contact = () => {
  return (
    <Container>
      <ContactLink href="tel:1234">
        <AiOutlinePhone />
        <p>TROLOLOLOLO</p>
      </ContactLink>
      <Separator />
      <ContactLink href="mailto:maciejg0220@gmail.com">
        <AiOutlineMail />
        <p>maciejg0220@gmail.com</p>
      </ContactLink>
      <Separator />
      <ContactLink href="#">
        <AiOutlineClockCircle />
        <p>Pn-Pt: 8:00-16:00</p>
      </ContactLink>
    </Container>
  );
};

export default Contact;
