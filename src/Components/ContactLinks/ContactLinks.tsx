import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import { useCursorContext } from '../../context/cursorHoverContext';
import { TChildren } from '../../types/types';
import { Container, ContactLink as ContactLinkStyle } from './ContactLinks.styles';

type TChildrenHref = TChildren & {
  href: string;
};

const ContactLink = ({ children, href }: TChildrenHref) => {
  const cursorHoverState = useCursorContext();
  return (
    <ContactLinkStyle
      href={href}
      onMouseOver={() => cursorHoverState.dispatch({ type: 'active' })}
      onMouseLeave={() => cursorHoverState.dispatch({ type: 'static' })}
    >
      {children}
    </ContactLinkStyle>
  );
};

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
        <ContactLink href="#contact">
          <AiOutlineClockCircle />
          <p>Pn-Pt: 8:00-16:00</p>
        </ContactLink>
      </li>
    </Container>
  );
};

export default ContactLinks;
