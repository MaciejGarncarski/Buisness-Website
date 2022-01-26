import { useCursorContext } from '../../../../contexts/CursorContext';
import { ContactLink as ContactLinkTypes } from '../../../../types/types';

import { Link } from './ContactLink.styles';

const ContactLink = ({ href, title, label, icon, isLink }: ContactLinkTypes) => {
  const { setIsActive } = useCursorContext();
  if (!isLink) {
    return (
      <Link
        as="span"
        title={title}
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        {icon}
        <p>{label}</p>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      title={title}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {icon}
      {label}
    </Link>
  );
};

export { ContactLink };
