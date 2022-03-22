import * as React from "react";
import styled from "styled-components";

interface Props extends React.ComponentPropsWithRef<"input"> {
  label: string;
}

const InputWithLabel = ({ label, ...inputProps }: Props) => {
  return (
    <Container>
      <Label>
        <Input {...inputProps} />
      </Label>
      <span>{label}</span>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  align-items: center;
`;

export const Label = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Input = styled.input``;

export default React.memo(InputWithLabel);
