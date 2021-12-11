import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import { useCursorContext } from '../../Contexts/CursorContext';
import { TChildren } from '../../Types/types';
import { Container, ContactLink as ContactLinkStyle } from './ContactLinks.styles';

type TChildrenHref = TChildren & {
  href: string;
  title: string;
};

const ContactLink = ({ children, href, title }: TChildrenHref) => {
  const { setIsActive } = useCursorContext();
  return (
    <ContactLinkStyle
      href={href}
      title={title}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {children}
    </ContactLinkStyle>
  );
};

const ContactLinks = () => {
  return (
    <Container>
      <li>
        <ContactLink href="tel:+48000000000 " title="Phone number">
          <AiOutlinePhone />
          <p>+48-000-000-000</p>
        </ContactLink>
      </li>
      <li>
        <ContactLink href="mailto:contactemail@email.com" title="Email">
          <AiOutlineMail />
          <p>contactemail@email.com</p>
        </ContactLink>
      </li>
      <li>
        <ContactLink href="#contact" title="Opened in this hours">
          <AiOutlineClockCircle />
          <p>Monday - Friday : 8:00-16:00</p>
        </ContactLink>
      </li>
    </Container>
  );
};

export default ContactLinks;
