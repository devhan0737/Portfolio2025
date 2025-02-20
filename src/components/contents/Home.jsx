import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100vh;
  color: #00d857;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  text-align: right;
  h2 {
    font-size: 4.8rem;
    font-weight: 900;
  }
  h3 {
    font-size: 2.4rem;
  }
`;
const DevInfo = styled.div`
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
