import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { RouteEndpoints } from "routes/route";
import Icon from "components/Icon";
export const getRandEmoji = () => {
  const emojis = ["🦄", "💩", "🔥"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const Sidebar = () => {
  return (
    <Root>
      <NavLink to="/">
        <Header>
          <img src={Logo} alt="Logo" />
          <LogoTxt>🦄 Unicorn.io</LogoTxt>
        </Header>
      </NavLink>
      <LinksContainer>
        <StyledLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <Emoji>{getRandEmoji()}</Emoji>
          <Span>Home</Span>
        </StyledLink>
        {Object.values(RouteEndpoints).map((routeName) => (
          <StyledLink
            key={routeName}
            to={routeName}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <Emoji>{getRandEmoji()}</Emoji>
            <Span>{routeName}</Span>
          </StyledLink>
        ))}
      </LinksContainer>
    </Root>
  );
};

export const Root = styled.section`
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex: 0.2;
  height: 100vh;
  padding: 20px 0px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 30px;
`;

export const Span = styled.span`
  font-weight: bold;
  margin-left: 4px;
`;

export const LogoTxt = styled(Span)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const LinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const HomeIcon = styled(Icon)`
  width: 30px;
`;

export const Emoji = styled.span`
  font-size: 30px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
  &.active {
    background: #e1ebff;
    color: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 20px 5px;
    padding: 0 5px;
  }
`;

export default Sidebar;
