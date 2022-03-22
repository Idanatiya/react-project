import * as React from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props extends React.ComponentPropsWithRef<"input"> {
  hasIcon?: boolean;
}

const GenericInput = React.forwardRef<HTMLInputElement, Props>(
  ({ hasIcon = true, ...inputProps }, ref) => {
    return (
      <Container>
        {hasIcon && <FontAwesomeIcon icon={faSearch} />}
        <Input ref={ref} {...inputProps} />
      </Container>
    );
  }
);

export const Container = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.7rem;
  align-items: center;
  border: 1px solid black;
  padding: 5px;
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  padding-inline-start: 7px;
`;

export default GenericInput;
