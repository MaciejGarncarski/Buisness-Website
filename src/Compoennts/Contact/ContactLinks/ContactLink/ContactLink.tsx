import { ReactNode } from 'react';

import { useCursorContext } from '../../../../Contexts/CursorContext';

import { Link } from './ContactLink.styles';

interface ContactLinkTypes {
  href: string;
  title: string;
  label: string;
  icon: ReactNode;
  isLink: boolean;
}

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
