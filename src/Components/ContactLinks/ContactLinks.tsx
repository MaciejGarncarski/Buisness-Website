import { useCursorContext } from '../../Contexts/CursorContext';
import { Container, ContactLink as ContactLinkStyle } from './ContactLinks.styles';
import { motion } from 'framer-motion';
import { ListItem as ListItemTypes, ContactLink as ContactLinkTypes } from '../../Types/types';
import { data } from './ContactLinks.data';

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

const ListItem = ({ children }: ListItemTypes) => {
  return <motion.li variants={item}>{children}</motion.li>;
};

const ContactLink = ({ href, title, label, icon }: ContactLinkTypes) => {
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
      {data.map(({ href, title, label, Icon }) => {
        return (
          <ListItem key={title}>
            <ContactLink href={href} title={title} label={label} icon={<Icon />} />
          </ListItem>
        );
      })}
    </Container>
  );
};

export { ContactLinks };
