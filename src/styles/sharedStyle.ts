import styled from "styled-components";

export const centerFlex = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p<{ size: "m" | "l" | "xl" }>`
  font-size: ${({ theme, size = "m" }) => theme.textSizes[size]}px;
`;
