import styled from "styled-components";
import { Routes, Route } from "react-router-dom"; // Router 관련 import만 남기기
import "./styles/basic.css";
import { IsDesktop, mq } from "./lib/mediaQuery";
import bgImage from "./assets/img/texture_background.webp";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import ContentsWrapper from "./components/body/ContentsWrapper";
import PortfolioInfo from "./pages/Project/PortfolioInfo";
import PillgramInfo from "./pages/Project/PillgramInfo";

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
      <Routes>
        <Route path="/Portfolio2025/" element={<ContentsWrapper />} />
        <Route path="/Portfolio2025/project" element={<Project />} />
        <Route path="/Portfolio2025/aboutme" element={<AboutMe />} />
        <Route
          path="/Portfolio2025/project/portfolioinfo"
          element={<PortfolioInfo />}
        />
        <Route
          path="/Portfolio2025/project/pillgraminfo"
          element={<PillgramInfo />}
        />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
