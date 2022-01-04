import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import square from '../../../assets/images/header/rectangle.svg';
import triangle from '../../../assets/images/header/triangle.svg';
const pseudoElement = css`
  content: '';
  position: absolute;
  z-index: -1;
  opacity: 0.8;
  display: block;
`;

const bgSizeRepeat = css`
  background-size: cover;
  background-repeat: no-repeat;
`;

const List = styled(motion.ul)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  list-style: none;
  & > li {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &::before {
    ${pseudoElement};
    left: 2em;
    top: 0em;
    width: 15em;
    height: 16.5em;
    background: url('${triangle}');
    ${bgSizeRepeat};
  }
  &::after {
    display: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    gap: 1em;

    &::before {
      left: 1vw;
      top: 0;
      width: 17vw;
      height: 18.5vw;
    }

    &::after {
      display: block;
      width: 13.5vw;
      height: 13.5vw;
      right: -0.5vw;
      bottom: 3vh;
      background: url('${square}');
      ${bgSizeRepeat};
      ${pseudoElement};
    }
  }
`;

export { List };
