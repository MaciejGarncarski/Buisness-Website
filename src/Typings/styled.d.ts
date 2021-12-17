import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: string;
    yellow: string;
    green: string;
    blue: string;
    black: string;
    darkYellow: string;
  }
}
