import { useEffect, useState } from 'react';
import { FooterContainer, Author } from './Footer.styles';
import { Link } from '../Link/Link';

const Footer = function () {
  const [year, setYear] = useState(2021);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <FooterContainer>
      <Author>
        <Link
          href="https://github.com/maciejgarncarski"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="footer"
        >
          &copy; Maciej Garncarski
        </Link>
        , {year}
      </Author>
    </FooterContainer>
  );
};

export { Footer };
