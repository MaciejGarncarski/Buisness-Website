import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import { Container, ContactLink } from './ContactLinks.styles';

const ContactLinks = () => {
  return (
    <Container>
      <li>
        <ContactLink href="tel:+48000000000">
          <AiOutlinePhone />
          <p>+48-000-000-000</p>
        </ContactLink>
      </li>
      <li>
        <ContactLink href="mailto:maciejg0220@gmail.com">
          <AiOutlineMail />
          <p>maciejg0220@gmail.com</p>
        </ContactLink>
      </li>
      <li>
        <ContactLink href="#">
          <AiOutlineClockCircle />
          <p>Pn-Pt: 8:00-16:00</p>
        </ContactLink>
      </li>
    </Container>
  );
};

export default ContactLinks;
