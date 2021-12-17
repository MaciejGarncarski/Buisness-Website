import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  min-height: 50vh;
  position: relative;
  column-gap: 0.75em;
  padding: 8em 7em;
  column-count: 4;

  & > img {
    margin: 0 0 0.75em;
    height: auto;
  }
`;

export { Container };
