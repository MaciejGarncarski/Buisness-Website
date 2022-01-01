import { motion } from 'framer-motion';

import { variants, item } from '../../../assets/animations/contactlinks';
import { data } from '../../../data/contactlinks';
import { ListItem as ListItemTypes } from '../../../types/types';

import { ContactLink } from './ContactLink/ContactLink';
import { List } from './ContactLinks.styles';

const ListItem = ({ children }: ListItemTypes) => {
  return <motion.li variants={item}>{children}</motion.li>;
};

const ContactLinks = () => {
  return (
    <List variants={variants} initial="hidden" whileInView="visible">
      {data.map(({ href, title, label, Icon }) => {
        return (
          <ListItem key={title}>
            <ContactLink href={href} title={title} label={label} icon={<Icon />} />
          </ListItem>
        );
      })}
    </List>
  );
};

export { ContactLinks };
