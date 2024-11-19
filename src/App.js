// FileName: App.js

import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./globalStyles";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensures the app takes full viewport height */
  padding: 20px; /* Adds spacing for smaller screens */
  background-color: #f4f4f9; /* Soft background color */
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #3b3b98; /* Accent color for the app name */
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #777;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Header>Expenzey</Header>
        <Tracker />
        <Footer>Designed & Built by Shubhankar</Footer>
      </Main>
    </>
  );
};

export default App;
