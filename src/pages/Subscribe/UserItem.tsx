import * as React from "react";
import styled from "styled-components";
import { User } from "../../types/common.types";
import InputWithLabel from "../../components/InputWithLabel";

const UserItem = ({
  index,
  style,
  data,
}: {
  index: number;
  style: React.CSSProperties;
  data: {
    users: User[];
    selectedUsers: User[];
    onHandleChange: (
      ev: React.ChangeEvent<HTMLInputElement>,
      selectedUser: User
    ) => void;
  };
}) => {
  const { users, selectedUsers, onHandleChange } = data;
  const { lastName, firstName, id } = users[index];
  return (
    <Container style={style}>
      <Avatar src={`https://robohash.org/${id}`} />
      <InputWithLabel
        type="checkbox"
        label={`${firstName} ${lastName}`}
        checked={selectedUsers.some((u) => u.id === id)}
        onChange={(ev) => onHandleChange(ev, users[index])}
      />
    </Container>
  );
};

export const Avatar = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-block-start: 5px;
`;

export default UserItem;
