import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import { useCursorContext } from '../../Contexts/CursorContext';
import { TChildren } from '../../Types/types';
import { Container, ContactLink as ContactLinkStyle } from './ContactLinks.styles';
import { motion } from 'framer-motion';

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

const variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
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
  visible: { rotate: 0, opacity: 1 },
  hidden: { rotate: -20, opacity: 0 },
};

const ContactLinks = () => {
  return (
    <Container variants={variants} initial="hidden" whileInView="visible">
      <motion.li variants={item}>
        <ContactLink href="tel:+48000000000" title="Phone number">
          <AiOutlinePhone />
          <p>+48-000-000-000</p>
        </ContactLink>
      </motion.li>
      <motion.li variants={item}>
        <ContactLink href="mailto:contactemail@email.com" title="Business email">
          <AiOutlineMail />
          <p>contactemail@email.com</p>
        </ContactLink>
      </motion.li>
      <motion.li variants={item}>
        <ContactLink href="#contact" title="We are open">
          <AiOutlineClockCircle />
          <p>Monday - Friday : 8:00-16:00</p>
        </ContactLink>
      </motion.li>
    </Container>
  );
};

export default ContactLinks;
