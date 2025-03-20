import React from "react";
import styled from "styled-components";
import { mq } from "../../lib/mediaQuery";
import { useNavigate } from "react-router-dom";

const Container = styled.footer`
  margin-top: 40px;
  padding-top: 20px;
  width: 100%;
  border-top: 1px solid #fff;
  height: 150px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  span:hover {
    color: #00d857;
    cursor: pointer;
  }
  ${mq("desktop")} {
    justify-content: space-between;
    flex-flow: row-reverse;
  }
`;
const FooterMenu = styled.ul`
  display: flex;
  gap: 20px;
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Footer = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/Portfolio2025");
  const goProject = () => navigate("/Portfolio2025/project");
  const goAboutme = () => navigate("/Portfolio2025/aboutme");

  return (
    <Container>
      <FooterMenu>
        <li onClick={goHome}>
          <span>Home</span>
        </li>
        <li onClick={goProject}>
          <span>Project</span>
        </li>
        <li onClick={goAboutme}>
          <span>About</span>
        </li>
      </FooterMenu>
      <LinkWrapper>
        <span>devhsj0737@gmail.com</span>
        <span>https://github.com/devhan0737</span>
      </LinkWrapper>
    </Container>
  );
};

export default Footer;
