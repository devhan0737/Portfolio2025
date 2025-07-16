import styled from "styled-components";
import { IsDesktop, IsTablet, mq } from "../../lib/mediaQuery";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;
  min-height: calc(100svh - 56px);
  color: #00d857;
  padding: 40px 0;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  text-align: center;
  h2 {
    width: 100%;
    font-size: 4.8rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    ${mq("tablet")} {
      font-size: 8rem;
    }
    ${mq("desktop")} {
      font-size: 10rem;
    }
  }
  h3 {
    font-size: 2.4rem;
    letter-spacing: 0.011em;
    font-weight: 900;
    opacity: 0.8;
    ${mq("tablet")} {
      font-size: 4rem;
    }
    ${mq("desktop")} {
      font-size: 5rem;
    }
  }
`;
const DevInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: 0.8;
  text-align: right;
  font-size: 1.8rem;
  ${mq("desktop")} {
    bottom: 120px;
  }
`;

const Home = () => {
  // const INFOARR = [
  //   { id: 1, text: "HAN SANGJIN", value: "name" },
  //   { id: 2, text: "82+ -10 5372 0737", value: "phone" },
  //   { id: 3, text: "devhsj0737@gmail.com", value: "email" },
  //   { id: 4, text: "github.com/devhan0737", value: "git" },
  // ];

  return (
    <Container>
      <TitleBox>
        <h2>PORTFOLIO</h2>
        <h3>FRONTEND DEVELOPER</h3>
      </TitleBox>
      {/* <DevInfo>
        {INFOARR.map((item) => {
          if (item.value === "git") {
            return (
              <p key={item.id}>
                <a
                  href={`https://${item.text}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              </p>
            );
          } else {
            return <p key={item.id}>{item.text}</p>;
          }
        })}
      </DevInfo> */}
    </Container>
  );
};

export default Home;
