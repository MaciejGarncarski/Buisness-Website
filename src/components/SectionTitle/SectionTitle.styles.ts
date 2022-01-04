import { motion } from 'framer-motion';
import styled from 'styled-components';

const Heading = styled(motion.h2)`
  position: absolute;
  top: 2em;
  left: 0.5em;
  font-size: 2.5rem;
  font-weight: 700;
  padding: 0 0.45em;
  color: ${({ theme }) => theme.black};
  text-transform: capitalize;
  box-shadow: -0.25em 0.25em ${({ theme }) => theme.blue};
  background-color: ${({ theme }) => theme.green};
  border: 2px solid ${({ theme }) => theme.black};
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    display: block;
    left: 3.5em;
  }
`;

export { Heading };
