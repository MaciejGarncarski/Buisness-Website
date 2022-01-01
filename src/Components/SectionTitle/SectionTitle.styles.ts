import { motion } from 'framer-motion';
import styled from 'styled-components';

const Heading = styled(motion.h2)`
  position: absolute;
  top: 2em;
  left: 2em;
  font-size: 2.5rem;
  font-weight: 700;
  padding: 0 0.2em;
  color: ${({ theme }) => theme.black};
  text-transform: capitalize;
  &::before {
    content: '';
    width: 120%;
    height: 100%;
    background: ${({ theme }) => theme.green};
    position: absolute;
    left: -20%;
    bottom: 0;
    z-index: -1;
  }
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    display: block;
    left: 3.5em;
  }
`;

export { Heading };
