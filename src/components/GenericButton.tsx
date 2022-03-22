import * as React from "react";
import styled, { css } from "styled-components";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  mode?: "primary" | "outline";
  text: string;
  icon?: React.ReactElement | string;
  disabled?: boolean;
}

const GenericButton = ({
  text,
  icon,
  mode = "outline",
  disabled = false,
  ...props
}: Props) => {
  return (
    <Button mode={mode} disabled={disabled} {...props}>
      {icon && { icon }}
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default GenericButton;

export const Button = styled.button<{ mode: "primary" | "outline" }>`
  display: flex;
  align-items: center;
  min-width: 100px;
  min-height: 30px;
  font-size: 1.1rem
  width: 100%;
  transition: 0.5s ease;
  ${({ theme }) => theme.utils.centerFlex}
  &:disabled {
      background:  #697171;
      cursor:  not-allowed;
  }
  &:hover {
    opacity: 0.8;
  }
  ${({ mode }) =>
    mode &&
    {
      outline: css`
        background: transparent;
        border: 1px solid ${({ theme }) => theme.colors.primary};
      `,
      primary: css`
        background: ${({ theme }) => theme.colors.primary};
        color: white;
      `,
    }[mode]}

`;

export const ButtonText = styled.span``;
