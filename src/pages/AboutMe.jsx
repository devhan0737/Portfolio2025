import styled from "styled-components";
import { mq } from "../lib/mediaQuery";
import { SKILLICON } from "../assets/Value/Skilldata";
import gitIcon from "../assets/img/github-fill.svg";
import velog from "../assets/img/velog.webp";
import rightArrow from "../assets/img/RightArrow.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${mq("desktop")} {
    padding-top: 56px;
    gap: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  ${mq("desktop")} {
    font-size: 2.4rem;
  }
`;

const SectionInfo = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  ${mq("desktop")} {
    font-size: 2.4rem;
  }
  span {
    font-size: 2rem;
    ${mq("desktop")} {
      font-size: 4.4rem;
    }
  }
  p {
    span {
      font-size: 1.6rem;
      font-weight: 700;
      color: #00d857;
      ${mq("desktop")} {
        font-size: 2.4rem;
      }
    }
  }
`;
const SelfIntro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .strong {
    color: #00d857;
    font-weight: 700;
  }
`;
const Contact = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 20px;
  ${mq("desktop")} {
    gap: 20px;
  }
  a {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mq("desktop")} {
      width: 40px;
      height: 40px;
    }
  }
  a:nth-child(2) img {
    width: 18px;
    height: 18px;
  }
  a:nth-child(3) img {
    width: 20px;
    height: 20px;
  }
  img {
    width: 24px;
    height: 24px;
    filter: invert(100%);
  }
  button {
    width: 60%;
    display: flex;
    justify-content: space-between;
    gap: 4px;
    align-items: center;
    border: 1px solid #fff;
    background: none;
    border-radius: 30px;
    padding: 4px 16px;
    font-size: 1.8rem;
    ${mq("desktop")} {
      max-width: 240px;
      width: 100%;
      gap: 8px;
    }
    img {
      width: 40%;
      height: 20px;
      filter: none;
      ${mq("desktop")} {
        width: 120px;
      }
    }
  }
`;
const Contents = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 20px;
  ${mq("desktop")} {
    padding-bottom: 40px;
  }
`;

const LeftBox = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  min-width: 100%;
  background: #454141;
  padding: 24px;
  border-radius: 30px;
  ${mq("desktop")} {
    gap: 40px;
    padding: 32px;
    justify-content: initial;
    min-width: 300px;
  }
  h3 {
    font-size: 2rem;
    ${mq("desktop")} {
      font-size: 3.6rem;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      gap: 8px;
      span {
        font-size: 1.6rem;
        color: #ccc;
      }
      ${mq("desktop")} {
        font-size: 2rem;
      }
      h3 {
        font-weight: 400;
        font-size: 1.8rem;
        ${mq("desktop")} {
          font-size: 2.4rem;
        }
      }
    }
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  /* min-width: 300px; */
`;

const RightBox = styled.div`
  flex: 1;
  background: #454141;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  border-radius: 30px;
  /* min-height: 140px; */
  ${mq("desktop")} {
    gap: 40px;
    padding: 32px;
    justify-content: initial;
    min-width: 300px;
  }
  h3 {
    font-size: 2rem;
    ${mq("desktop")} {
      font-size: 3.6rem;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${mq("desktop")} {
      display: grid;
      grid-template-columns: 2fr 50%;
      width: 100%;
    }
    li {
      display: flex;
      flex-direction: column;
      gap: 8px;
      span {
        color: #ccc;
        font-size: 1.6rem;
      }
      ${mq("desktop")} {
        font-size: 2rem;
      }
      h3 {
        font-weight: 400;
        font-size: 1.8rem;
        ${mq("desktop")} {
          font-size: 2.4rem;
        }
      }
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  img {
    position: relative;
    width: 24px;
    height: 24px;
    ${mq("desktop")} {
      width: 40px;
      height: 40px;
    }
  }
`;

const AboutMe = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/Portfolio2025/");
  };

  return (
    <Container>
      <SectionTitle>About Me</SectionTitle>
      <SectionInfo>
        <SelfIntro>
          <span>
            코딩하면 시간 가는 줄 모르는,
            <br />
            <span className="strong">프론트엔드 개발자 한상진</span> 입니다.
          </span>
          <p>
            <span>Brick By Brick</span> 매일 새로운 기술로 한걸음씩 성장합니다.
          </p>
        </SelfIntro>
        <Contact>
          <a href="https://github.com/devhan0737">
            <img src={gitIcon} alt="깃허브 아이콘" />
          </a>
          <a href="https://velog.io/@hanjk0737/posts">
            <img src={velog} alt="깃허브 아이콘" />
          </a>
          <button onClick={goHome}>
            연락하기
            <img src={rightArrow} alt="오른쪽 화살표" />
          </button>
        </Contact>
      </SectionInfo>

      <Contents>
        <LeftBox>
          <h3>업무 경험</h3>
          <ul>
            <li>
              <h3>LG이노텍</h3>
              <span>2022.06 - 2023.07</span>
            </li>
            <li>
              <h3>후지유통</h3>
              <span>2021.06 - 2022.01</span>
            </li>
          </ul>
        </LeftBox>
        <RightContainer>
          <RightBox>
            <h3>교육</h3>
            <ul>
              <li>
                <h3>건양대학교</h3> 기업소트프웨어학과
                <span>2018.03 - 2023.08</span>
              </li>
              <li>
                <h3>이젠아카데미</h3> 퍼블리셔과정 수료
                <span>2023.08 - 2024.02</span>
              </li>
            </ul>
          </RightBox>
          <RightBox>
            <h3>기술스택 및 도구</h3>
            <IconBox>
              {SKILLICON.map((data) => (
                <img
                  key={data.id}
                  src={data.src}
                  alt={data.name}
                  title={data.name}
                />
              ))}
            </IconBox>
          </RightBox>
        </RightContainer>
      </Contents>
    </Container>
  );
};

export default AboutMe;
