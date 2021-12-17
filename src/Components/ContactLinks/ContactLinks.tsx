import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import { useCursorContext } from '../../Contexts/CursorContext';
import { Container, ContactLink as ContactLinkStyle } from './ContactLinks.styles';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const item = {
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hidden: { rotate: 5, opacity: 0 },
};

type TListItem = {
  children: ReactNode;
};

const ListItem = ({ children }: TListItem) => {
  return <motion.li variants={item}>{children}</motion.li>;
};

type TContactLink = {
  href: string;
  title: string;
  label: string;
  icon: ReactNode;
};

const ContactLink = ({ href, title, label, icon }: TContactLink) => {
  const { setIsActive } = useCursorContext();
  return (
    <ContactLinkStyle
      href={href}
      title={title}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {icon}
      <p>{label}</p>
    </ContactLinkStyle>
  );
};

const ContactLinks = () => {
  return (
    <Container variants={variants} initial="hidden" whileInView="visible">
      <ListItem>
        <ContactLink
          href="tel:+48000000000"
          title="Phone number"
          label="+48-000-000-000"
          icon={<AiOutlinePhone />}
        />
      </ListItem>
      <ListItem>
        <ContactLink
          href="mailto:contactemail@email.com"
          title="Business email"
          label="contactemail@email.com"
          icon={<AiOutlineMail />}
        />
      </ListItem>
      <ListItem>
        <ContactLink
          href="#contact"
          title="We are open"
          label="Monday - Friday : 8:00-16:00"
          icon={<AiOutlineClockCircle />}
        />
      </ListItem>
    </Container>
  );
};

export { ContactLinks };
