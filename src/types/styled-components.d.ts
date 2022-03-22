import "styled-components";
import { Theme } from "../styles/styled";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
