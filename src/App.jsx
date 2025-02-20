import styled from "styled-components";
import "./styles/basic.css";
import Home from "./components/contents/home";
import Header from "./components/header/Header";
// import bgImage from "./assets/design-space-paper-textured-background.jpg";

const Container = styled.div`
  width: 100vw;
  padding: 0 20px;
  background: #262626;
  overflow: hidden;
  box-sizing: border-box;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
