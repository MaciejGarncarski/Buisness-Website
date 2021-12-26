import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  position: relative;
  column-count: 3;
  padding: 7em 2em;
  column-gap: 0.75em;
  & > img {
    margin-top: 0.5em;
    height: auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    column-gap: 0.75em;
    padding: 12em 9em 6em 9em;
    column-count: 4;
    & > img {
      margin-top: 0.7em;
    }
  }
`;

export { Container };
