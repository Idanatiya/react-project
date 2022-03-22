import * as React from "react";
import styled from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";
import Routes from "routes/Routes";
import Provider from "./Provider";
import Sidebar from "layout/Sidebar";

function App() {
  return (
    <Provider>
      <AppWrapper>
        <Sidebar />
        <Main>
          <Routes />
        </Main>
      </AppWrapper>
      <GlobalStyle />
    </Provider>
  );
}

const AppWrapper = styled.div`
  display: flex;
`;

export const Main = styled.section`
  flex: 0.8;
  overflow-y: auto;
  ${({ theme }) => theme.utils.centerFlex}
  background: #f0f0f0;
`;

export default App;
