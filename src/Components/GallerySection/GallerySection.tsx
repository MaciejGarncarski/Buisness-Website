import { Container } from './GallerySection.styles';
import { TypeId } from '../../Types/types';
import { Img } from '../ImgFullSize/ImgFullSize';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { data } from './Gallery.data';

const variants = {
  hidden: {
    blur: 1,
    transition: {
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.75,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const item = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  hidden: { opacity: 0 },
};

const GallerySection = ({ id }: TypeId) => {
  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <SectionHeading labelText="Gallery" />
      {data.map(({ src, id, alt }) => (
        <Img variants={item} src={src} key={id} alt={alt} className={`img--${id}`} />
      ))}
    </Container>
  );
};

export { GallerySection };
