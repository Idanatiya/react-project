import * as React from "react";
import { ThemeProvider as StyledComponentProvider } from "styled-components";
import theme from "./theme";

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyledComponentProvider theme={theme}>{children}</StyledComponentProvider>
  );
};

export default ThemeProvider;
