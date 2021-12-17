import { useEffect, useState } from 'react';
import { FooterContainer, Para } from './Footer.styles';
import { Link } from '../Link/Link';

const Footer = function () {
  const [year, setYear] = useState(2021);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <FooterContainer>
      <Para>
        <Link href="https://github.com/maciejgarncarski" target="_blank" rel="noopener noreferrer">
          Maciej Garncarski
        </Link>
        , {year}
      </Para>
    </FooterContainer>
  );
};

export { Footer };
