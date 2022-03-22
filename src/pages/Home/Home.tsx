import * as React from "react";
import styled from "styled-components";
import GenericButton from "components/GenericButton";
import { useNavigate } from "react-router";
import { User } from "types/common.types";
import { Avatar, Container } from "pages/Subscribe/UserItem";
import { Title } from "styles/sharedStyle";
import { useLocalStorage } from "custom-hooks/useLocalStorage";

interface Subscription {
  users: User[];
  organizationName: string;
}

const Home = () => {
  const navigate = useNavigate();
  const { loadFromStorage } = useLocalStorage();
  const subscriptions: Subscription[] | undefined =
    loadFromStorage("subscriptions");

  return (
    <Root>
      {subscriptions ? (
        <>
          <Title size="xl">🦄🦄🦄🦄 Subscribed!! 🦄🦄🦄🦄</Title>
          <CardContainer>
            {subscriptions.map((sub, index) => (
              <Card key={`${sub.organizationName}-${index}`}>
                <Title size="l">{sub.organizationName}</Title>
                <Title size="l"> Subscribed Users ({sub.users.length}):</Title>
                {sub?.users.map(({ lastName, firstName, id }) => (
                  <SubbedUser key={id}>
                    <Avatar src={`https://robohash.org/${id}`} />
                    <span>
                      {firstName} {lastName}
                    </span>
                  </SubbedUser>
                ))}
              </Card>
            ))}
          </CardContainer>
        </>
      ) : (
        <>
          <Title size="xl">Welcome to Unicorn.io</Title>
          <GenericButton
            onClick={() => navigate("/subscribe", { replace: true })}
            mode="outline"
            text="Click here to start"
          />
        </>
      )}
    </Root>
  );
};

export const CardContainer = styled.main`
  ${({ theme }) => theme.utils.centerFlex};
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Root = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Card = styled.section`
  height: 250px;
  overflow-y: auto;
  padding: 10px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

const SubbedUser = styled(Container)`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export default Home;
