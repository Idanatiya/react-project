import * as React from "react";
import Icon from "components/Icon";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Title } from "styles/sharedStyle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import GenericButton from "components/GenericButton";
const About = () => {
  const navigate = useNavigate();
  return (
    <Root>
      <Title size="xl">This Project is a frontend challenge from Cycode</Title>
      <Container>
        <Title size="l">Check me out on</Title>
        <a href="https://www.linkedin.com/in/idan-atiya-0505911b2/">
          <LinkedinIcon icon={faLinkedin} />
        </a>
      </Container>
      <GenericButton
        mode="primary"
        text="Go back"
        onClick={() => navigate("/")}
      />
    </Root>
  );
};

export default About;

const Root = styled.section``;

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const LinkedinIcon = styled(Icon)`
  margin-inline-start: 10px;
  font-size: 30px;
  color: #0e76a8;
`;
