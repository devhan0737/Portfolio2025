import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  height: 100vh;
  color: #00d857;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  text-align: center;
  h2 {
    font-size: 4.8rem;
    font-weight: 900;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 900;
    opacity: 0.8;
  }
`;
const DevInfo = styled.div`
  position: absolute;
  bottom: 20px;
  right: 60px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: right;
`;

const Home = () => {
  const INFOARR = [
    { id: 1, text: "HAN SANGJIN", value: "name" },
    { id: 2, text: "82+ -10 5372 0737", value: "phone" },
    { id: 3, text: "devhsj0737@gmail.com", value: "email" },
    { id: 4, text: "github.com/devhan0737", value: "git" },
  ];

  return (
    <Container>
      <TitleBox>
        <h2>PORTFOLIO</h2>
        <h3>FRONTEND DEVELOPER</h3>
      </TitleBox>
      <DevInfo>
        {INFOARR.map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}
      </DevInfo>
    </Container>
  );
};

export default Home;
