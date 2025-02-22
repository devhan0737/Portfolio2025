import React from "react";
import styled from "styled-components";
import { IsDesktop, mq } from "../../lib/mediaQuery";
import rightArrow from "../../assets/RightArrow.svg";

const Container = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  ${mq("desktop")} {
    font-size: 2.4rem;
  }
`;
const PreviewText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 1.6rem;
  font-weight: 300;
  width: 100%;
  max-width: 600px;
  ${mq("desktop")} {
    gap: 20px;
    font-size: 1.8rem;
  }
  span {
    font-size: 2.4rem;
    font-weight: 300;
    ${mq("desktop")} {
      font-size: 4.4rem;
    }
  }
  .name {
    font-weight: 700;
    color: #00d857;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-direction: column;

  ${mq("desktop")} {
    gap: 40px;
    padding: 60px 0 40px 0;
    flex-direction: row;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px;
  height: 140px;
  width: 100%;
  border-radius: 30px;
  background: #454141;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${mq("desktop")} {
    height: 280px;
    max-width: 440px;
    width: 100%;
  }

  &:hover {
    color: #00d857;
    transform: scale(1.05);
    opacity: 0.95;
  }

  a {
    width: fit-content;
    font-size: 2rem;
    font-weight: 700;
    position: relative;
    display: inline-block;

    ${mq("desktop")} {
      font-size: 3.2rem;
    }
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%; /* 글자 크기만큼만 적용 */
    height: 2px;
    background: #00d857;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.1s ease-in-out;
  }

  &:hover a::after {
    transform: scaleX(1);
  }
  img {
    transition: filter 0.1s ease-in-out;
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(52%) sepia(99%) saturate(553%)
      hue-rotate(75deg) brightness(90%) contrast(92%);
  }
`;

const ArrowWrap = styled.div`
  display: flex;
  font-size: 1.6rem;
  justify-content: space-between;
  font-weight: 300;
  ${mq("desktop")} {
    font-size: 2rem;
  }
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
      <ButtonWrapper>
        <ButtonBox>
          <a href="#">Project</a>
          <ArrowWrap>
            프로젝트
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
    </Container>
  );
};

export default Preview;
