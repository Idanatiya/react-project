import React from "react";
import GenericButton from "components/GenericButton";
import GenericModal from "components/GenericModal";
import InputWithLabel from "components/InputWithLabel";
import { Dropdown, DropdownRef } from "components/Dropdown";
import styled from "styled-components";
import { useToggle } from "custom-hooks/useToggle";
import mockData from "mock.json";
import GenericInput from "components/GenericInput";
import useDebounce from "custom-hooks/useDebounce";
import { FixedSizeList as List } from "react-window";
import { trimTransform } from "utils/common";
import { useNavigate } from "react-router";
import { User } from "types/common.types";
import UserItem from "./UserItem";
import { useLocalStorage } from "custom-hooks/useLocalStorage";

export const STORAGE_KEY = "subscriptions";

const Subscribe = () => {
  const [isOpen, toggleModal] = useToggle();
  const [orgId, setOrgId] = React.useState("");
  const [orgUsers, setOrgUsers] = React.useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = React.useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const dropdown1 = React.useRef<DropdownRef>(null);
  const dropdown2 = React.useRef<DropdownRef>(null);
  const navigate = useNavigate();
  const { saveToStorage, loadFromStorage } = useLocalStorage();

  const onHandleChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>, selectedUser: User) => {
      const isChecked = ev.target.checked;
      if (isChecked) {
        setSelectedUsers((prevUsers) => [...prevUsers, selectedUser]);
      } else {
        const filtered = selectedUsers.filter(
          ({ id }) => id !== selectedUser.id
        );
        setSelectedUsers(filtered);
      }
    },
    [setSelectedUsers]
  );

  const onPickOrganization = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (searchTerm) setSearchTerm("");
    const orgId = ev.target.value;
    setOrgId(orgId);
    dropdown1?.current?.toggleDropdown();
    dropdown2?.current?.toggleDropdown();

    const organizationUsers = mockData.users.filter(
      ({ organizationId }) => organizationId === orgId
    );
    setOrgUsers(organizationUsers);
  };

  useDebounce(
    searchTerm,
    500,
    React.useCallback(() => {
      const term = trimTransform(searchTerm, "toLowerCase");
      if (!term) return setFilteredUsers(orgUsers);
      const newUsers = orgUsers.filter(({ firstName, lastName }) => {
        const fName = firstName.toLowerCase();
        const lName = lastName.toLowerCase();
        return [
          fName.startsWith(term),
          lName.startsWith(term),
          fName.includes(term),
          lName.includes(term),
        ].some(Boolean);
      });
      setFilteredUsers(newUsers);
    }, [searchTerm, orgUsers, setFilteredUsers])
  );

  const onSubmitForm = () => {
    const payload = {
      organizationName: mockData.organizations.find((org) => org.id === orgId)
        ?.name,
      users: selectedUsers,
    };
    const subscriptions = loadFromStorage(STORAGE_KEY);
    if (!subscriptions) saveToStorage(STORAGE_KEY, [payload]);
    else saveToStorage(STORAGE_KEY, [payload, ...subscriptions]);
    navigate("/");
  };

  return (
    <>
      <GenericButton onClick={toggleModal} mode="primary" text="Subscribe" />
      <GenericModal
        withCloseBtn
        hasBackdrop
        isOpen={isOpen}
        toggleModal={toggleModal}
      >
        <ModalContent>
          <Dropdown ref={dropdown1} title="Organizations" hasIcon>
            {mockData.organizations.map(({ id, name }) => (
              <InputWithLabel
                key={id}
                label={name}
                type="radio"
                checked={id === orgId}
                value={id}
                onChange={onPickOrganization}
              />
            ))}
          </Dropdown>
          <Dropdown ref={dropdown2} title="Users" hasIcon>
            <InputContainer>
              <GenericInput
                type="text"
                value={searchTerm}
                onChange={(ev) => setSearchTerm(ev.target.value)}
                placeholder="Search..."
                hasIcon
              />
            </InputContainer>
            {filteredUsers.length === 0 && searchTerm && (
              <span>No user match search..</span>
            )}
            {filteredUsers.length > 0 && (
              <>
                <List
                  width={230}
                  itemSize={35}
                  itemCount={filteredUsers.length}
                  height={150}
                  itemData={{
                    users: filteredUsers,
                    selectedUsers,
                    onHandleChange,
                  }}
                >
                  {(props) => <UserItem {...props} />}
                </List>
              </>
            )}
          </Dropdown>
        </ModalContent>
        <SubscribeButtn
          onClick={onSubmitForm}
          mode="primary"
          text="Submit"
          disabled={!orgId || selectedUsers.length === 0}
        />
      </GenericModal>
    </>
  );
};

export const SubscribeButtn = styled(GenericButton)`
  justify-content: center;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40px;
`;

export const ModalContent = styled.div`
  margin-block-start: 20px;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
  justify-content: space-around;
`;

export const InputContainer = styled.section`
  margin-block-end: 5px;
`;

export default Subscribe;
