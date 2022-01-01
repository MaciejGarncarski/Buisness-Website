import { Container } from './Gallery.styles';
import { Anchor } from '../../types/types';
import { ImgFill } from '../ImgFill/ImgFill.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { data } from '../../data/gallery';
import { variants, item } from '../../assets/animations/gallery';

const Gallery = ({ id }: Anchor) => {
  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <SectionTitle labelText="Gallery" />
      {data.map(({ src, id, alt }) => (
        <ImgFill variants={item} src={src} key={id} alt={alt} className={`img--${id}`} />
      ))}
    </Container>
  );
};

export { Gallery };
