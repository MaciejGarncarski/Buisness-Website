import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  min-height: 50vh;
  position: relative;
  column-gap: 0.75em;
  padding: 9em 9em;
  column-count: 4;

  & > img {
    margin-top: 0.5em;
    height: auto;
  }
`;

export { Container };
