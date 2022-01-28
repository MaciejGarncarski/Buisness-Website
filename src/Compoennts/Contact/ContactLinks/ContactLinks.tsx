import { motion } from 'framer-motion';

import { variants, item } from '../../../Assets/animations/contactlinks';
import { data } from '../../../Data/contactlinks';
import { Children } from '../../../Types/types';

import { ContactLink } from './ContactLink/ContactLink';
import { List } from './ContactLinks.styles';

const ListItem = ({ children }: Children) => {
  return <motion.li variants={item}>{children}</motion.li>;
};

const ContactLinks = () => {
  return (
    <List variants={variants} initial="hidden" whileInView="visible">
      {data.map(({ href, title, label, Icon, isLink }) => {
        return (
          <ListItem key={title}>
            <ContactLink href={href} title={title} label={label} icon={<Icon />} isLink={isLink} />
          </ListItem>
        );
      })}
    </List>
  );
};

export { ContactLinks };
