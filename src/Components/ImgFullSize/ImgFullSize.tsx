import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImgFullSize = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

type TImage = {
  src: string;
  alt: string;
  className?: string;
  variants?: {
    visible: object;
    hidden: object;
  };
};

const Img = ({ src, alt, className, variants }: TImage) => {
  return <ImgFullSize src={src} alt={alt} className={className} variants={variants} />;
};

export { Img };
