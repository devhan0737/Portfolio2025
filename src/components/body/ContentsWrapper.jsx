import styled from "styled-components";
import Preview from "./Preview";
import Home from "./Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 200px;
  min-height: 100vh;
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
