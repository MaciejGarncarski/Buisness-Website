import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    [key: string]: string;
    color: string;
    yellow: string;
    green: string;
    blue: string;
    black: string;
    darkYellow: string;
  }
}
