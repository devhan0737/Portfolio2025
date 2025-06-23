import React from "react";
import styled from "styled-components";
import { IsDesktop, mq } from "../../lib/mediaQuery";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/img/RightArrow.svg";

const StyledLink = styled(Link)`
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

  .littleTitle {
    width: fit-content;
    font-size: 2rem;
    font-weight: 700;
    position: relative;
    display: inline-block;

    ${mq("desktop")} {
      font-size: 3.2rem;
    }
  }

  .littleTitle::after {
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

  &:hover .littleTitle::after {
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

const Button = ({ children, to, title }) => {
  return (
    <StyledLink to={to}>
      <span className="littleTitle">{title}</span>
      <ArrowWrap>
        {children}
        <img src={rightArrow} alt="버튼 화살표" />
      </ArrowWrap>
    </StyledLink>
  );
};

export default Button;
