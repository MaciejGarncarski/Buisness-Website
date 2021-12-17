import { css } from 'styled-components';

const ScrollBar = css`
  html {
    scrollbar-color: ${({ theme }) => theme.blue} ${({ theme }) => theme.darkYellow};
  }
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.darkYellow};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.green};
    border: 4px solid ${({ theme }) => theme.black};
    transition: background-color 2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.blue};
    }
  }
`;

export { ScrollBar };
