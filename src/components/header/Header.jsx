import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import { mq } from "../../lib/mediaQuery";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background: #262626;
  z-index: 2;
  ${mq("desktop")} {
    padding: 0 200px;
  }
`;
const LogoBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  img {
    width: 20px;
    height: 20px;
  }
`;

const Header = () => {
  return (
    <Container>
      <div>{/* <HamburgerMenu /> */}</div>
      <LogoBox href="#">
        <img src={Logo} alt="main logo" />
      </LogoBox>
    </Container>
  );
};

export default Header;
