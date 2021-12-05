import styled, { css } from 'styled-components';
import triangle from '../../Assets/Header/triangle.svg';
import square from '../../Assets/Header/rectangle.svg';

const pseudoElement = css`
  content: '';
  position: absolute;
  z-index: -1;
`;

const bgSizeRepeat = css`
  background-size: cover;
  background-repeat: no-repeat;
`;

const Container = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
      left: 5vw;
      top: 0;
      width: 17vw;
      height: 18.5vw;
    }

    &::after {
      display: block;
      width: 14vw;
      height: 14vw;
      right: 5vw;
      bottom: 3vh;
      background: url('${square}');
      ${bgSizeRepeat};
      ${pseudoElement};
    }
  }
`;

const ContactLink = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  transition: background-color 200ms ease;
  padding: 1.5em 0;
  font-weight: 700;
  font-size: 1.3em;
  & > svg {
    font-size: 1.5em;
  }
  &:hover {
    background-color: ${({ theme }) => theme.darkYellow};
  }
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    gap: 0.3em;
    width: 75%;
    justify-content: center;
    flex-direction: column;
  }
`;

export { Container, ContactLink };
