import { DefaultTheme } from "styled-components";
import { centerFlex } from "./sharedStyle";

const theme: DefaultTheme = {
  utils: {
    centerFlex,
  },
  colors: {
    primary: "#130b43",
    light: "#fbfcfe",
    lightBlue: "#2e57e8",
  },
  alerts: {
    success: "#1DB954",
    error: "#E60023",
    info: "#36C5F0",
    warning: "#ECB22E",
  },
  spacing: {
    s: 4,
    m: 6,
    l: 8,
    xl: 12,
  },
  textSizes: {
    s: 8,
    m: 12,
    l: 16,
    xl: 22,
  },
};

export default theme;
