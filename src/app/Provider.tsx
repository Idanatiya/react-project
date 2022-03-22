import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "../styles/ThemeProvider";

const Provider: React.FC = ({ children }) => (
  <BrowserRouter>
    <ThemeProvider>{children}</ThemeProvider>
  </BrowserRouter>
);

export default Provider;
