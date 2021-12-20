import { useCursorContext } from '../../../../contexts/CursorContext';
import { ContactLink as ContactLinkTypes } from '../../../../types/types';
import { Link } from './ContactLink.styles';

const ContactLink = ({ href, title, label, icon }: ContactLinkTypes) => {
  const { setIsActive } = useCursorContext();
  return (
    <Link
      href={href}
      title={title}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {icon}
      <p>{label}</p>
    </Link>
  );
};

export { ContactLink };
