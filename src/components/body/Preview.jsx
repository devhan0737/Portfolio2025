import React from "react";
import styled from "styled-components";
import { IsDesktop, mq } from "../../lib/mediaQuery";
import Button from "../button/Button";

const Container = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 0 0 40px 0;
  ${mq("desktop")} {
    gap: 40px;
  }
`;
const SectionTitle = styled.h2`
  padding-bottom: 80px;
  font-size: 2rem;
  font-weight: 400;
  ${mq("desktop")} {
    font-size: 2.4rem;
  }
`;
const PreviewText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
  font-size: 1.6rem;
  font-weight: 300;
  width: 100%;
  max-width: 900px;
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
    padding: 60px 0 60px 0;
    flex-direction: row;
  }
`;

const Preview = () => {
  return (
    <Container>
      <SectionTitle>PREVIEW</SectionTitle>
      <PreviewText>
        <span>
          함께 일하고 싶은 개발자가 목표인
          <br /> 개발자
          <span className="name"> 한상진</span>입니다.
        </span>
        <p>
          개발자로서 빠르게 성장하고 함께 더 나은 서비스를 만들어갈 팀을 찾고
          있습니다.
        </p>
      </PreviewText>
      <ButtonWrapper>
        <Button to="/Portfolio2025/project" title="Project">
          프로젝트
        </Button>
        <Button to="/Portfolio2025/aboutme" title="About Me">
          가치관, 경험, 계획
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Preview;
