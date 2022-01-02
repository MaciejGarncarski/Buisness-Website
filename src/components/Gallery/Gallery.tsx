import { variants, item } from '../../assets/animations/gallery';
import { data } from '../../data/gallery';
import { Anchor } from '../../types/types';
import { ImgFill } from '../ImgFill/ImgFill.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import { Container } from './Gallery.styles';

const Gallery = ({ id }: Anchor) => {
  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <SectionTitle labelText="Gallery" />
      {data.map(({ src, id, alt }) => (
        <ImgFill
          variants={item}
          width="300px"
          height="160px"
          src={src}
          key={id}
          alt={alt}
          className={`img--${id}`}
          loading="lazy"
        />
      ))}
    </Container>
  );
};

export { Gallery };
