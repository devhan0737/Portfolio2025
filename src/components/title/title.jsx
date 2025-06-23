import React from "react";
import styled from "styled-components";

const PreviewText = styled.div`
  display: flex;
  flex-direction: column;
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

const title = () => {
  return (
    <PreviewText>
      <span className="name">기술</span>과 <span className="name">태도</span>{" "}
      모두 믿음직한 동료가 되는 것이 목표인 개발자
      <span className="name"> 한상진</span>입니다.
      <p>
        개발자로서 빠르게 성장하고 함께 더 나은 서비스를 만들어갈 팀을 찾고
        있습니다.
      </p>
    </PreviewText>
  );
};

export default title;
