import React from "react";
import styled from "styled-components";
import { mq } from "../../lib/mediaQuery";
import rightArrow from "../../assets/RightArrow.svg";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;
const SectionTitle = styled.h2`
  font-size: 3.2rem;
  ${mq("desktop")} {
    font-size: 8rem;
  }
`;
const PreviewText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.8rem;
  font-weight: 400;
  width: 100%;
  max-width: 600px;
  span {
    font-size: 3.2rem;
    font-weight: 700;
  }
  .name {
    color: #00d857;
  }
`;
const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  width: auto;
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${mq("desktop")} {
    flex-direction: row;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px;
  min-width: 280px;
  height: 300px;
  border-radius: 30px;
  background: #454141;
  &:hover {
    background: #00d857;
  }
  a {
    font-size: 2.8rem;
    font-weight: 900;
  }
  ${mq("desktop")} {
    max-width: 560px;
    width: 100%;
  }
`;
const ArrowWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Preview = () => {
  return (
    <Container>
      <SectionTitle>PREVIEW</SectionTitle>
      <PreviewText>
        <span>
          남다른 센스로 코드를 디자인하는{" "}
          <span className="name">SENSECODER</span>
          입니다.
        </span>
        <p>
          신입 개발자로서 빠르게 성장하고 함께 더 나은 서비스를 만들어갈 팀을
          찾고 있습니다.
        </p>
      </PreviewText>
      <BottomWrapper>
        <ButtonWrapper>
          <ButtonBox>
            <a href="#">Project</a>
            <ArrowWrap>
              프로젝트, 깃허브, 블로그
              <img src={rightArrow} alt="버튼 화살표" />
            </ArrowWrap>
          </ButtonBox>
          <ButtonBox>
            <a href="#">About Me</a>
            <ArrowWrap>
              가치관, 경험, 계획
              <img src={rightArrow} alt="버튼 화살표" />
            </ArrowWrap>
          </ButtonBox>
        </ButtonWrapper>
      </BottomWrapper>
    </Container>
  );
};

export default Preview;
