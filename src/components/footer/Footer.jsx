import React from "react";
import styled from "styled-components";
import { mq } from "../../lib/mediaQuery";

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
  a:hover {
    color: #00d857;
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
  return (
    <Container>
      <FooterMenu>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </FooterMenu>
      <LinkWrapper>
        <a href="#">devhsj0737@gmail.com</a>
        <a href="#">https://github.com/devhan0737</a>
      </LinkWrapper>
    </Container>
  );
};

export default Footer;
