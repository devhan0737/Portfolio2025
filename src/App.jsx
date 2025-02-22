import styled from "styled-components";
import "./styles/basic.css";
import { IsDesktop, mq } from "./lib/mediaQuery";
import ContentsWrapper from "./components/body/ContentsWrapper";
import bgImage from "./assets/texture_background.webp";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Container = styled.div`
  position: relative;
  width: 100vw;
  padding: 0 20px;
  background: #262626;
  overflow: hidden;
  box-sizing: border-box;
  ${mq("desktop")} {
    padding: 0 200px;
  }

  &::before {
    content: "";
    z-index: 102;
    pointer-events: none;
    mix-blend-mode: exclusion;
    background-image: url(${bgImage});
    opacity: 0.07;
    background-position: 0px 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0% auto auto 0%;
  }
`;

function App() {
  return (
    <Container>
      <Header />
      <ContentsWrapper />
      <Footer />
    </Container>
  );
}

export default App;
