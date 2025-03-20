import styled from "styled-components";
import Preview from "./Preview";
import Home from "./Home";

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
