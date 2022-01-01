import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10em 0;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    height: 100vh;
    padding: 0;
  }
`;

export { Container };
