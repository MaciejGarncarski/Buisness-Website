import { Container } from './GallerySection.styles';
import { Anchor } from '../../Types/types';
import { ImgFill } from '../ImgFill/ImgFill';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { data } from './Gallery.data';

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const item = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { x: 20, opacity: 0 },
};

const GallerySection = ({ id }: Anchor) => {
  return (
    <Container id={id} variants={variants} initial="hidden" whileInView="visible">
      <SectionHeading labelText="Gallery" />
      {data.map(({ src, id, alt }) => (
        <ImgFill variants={item} src={src} key={id} alt={alt} className={`img--${id}`} />
      ))}
    </Container>
  );
};

export { GallerySection };
