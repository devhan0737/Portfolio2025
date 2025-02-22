import React from "react";
import styled from "styled-components";
import Preview from "./Preview";
import Header from "./../header/Header";
import Home from "./home";
import Footer from "../footer/Footer";

const Container = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-top: 56px;
`;

const ContentsWrapper = () => {
  return (
    <Container>
      <Home />
      <Preview />
    </Container>
  );
};

export default ContentsWrapper;
