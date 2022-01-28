import { variants, item } from '../../Assets/animations/gallery';
import { useCursorContext } from '../../Contexts/CursorContext';
import { data } from '../../Data/gallery';
import { ImgFill } from '../ImgFill/ImgFill.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import { Container } from './Gallery.styles';

type Anchor = {
  id?: string;
};

const Gallery = ({ id }: Anchor) => {
  const { setIsActive } = useCursorContext();
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
          onMouseOver={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        />
      ))}
    </Container>
  );
};

export { Gallery };
