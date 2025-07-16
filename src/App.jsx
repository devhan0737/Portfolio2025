import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import "./styles/basic.css";
import { mq } from "./lib/mediaQuery";
import bgImage from "./assets/img/texture_background.webp";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import ContentsWrapper from "./components/body/ContentsWrapper";
import ProjectDetail from "./pages/Project/ProjectDetail";

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #262626;
  overflow: hidden;
  box-sizing: border-box;
  padding: 56px 20px;
  ${mq("desktop")} {
    padding: 0 400px;
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
        <Route path="/Portfolio2025/project/:id" element={<ProjectDetail />} />
        <Route path="/Portfolio2025/aboutme" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
