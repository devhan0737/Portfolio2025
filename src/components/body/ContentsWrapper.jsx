import React from "react";
import styled from "styled-components";
import Preview from "./Preview";
import Header from "./../header/Header";
import Home from "./home";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56px;
`;

const ContentsWrapper = () => {
  return (
    <Container>
      <Header />
      <Home />
      <Preview />
    </Container>
  );
};

export default ContentsWrapper;
