import styled from "styled-components";
import Logo from "../../assets/img/Logo.svg";
import { mq } from "../../lib/mediaQuery";
import { Link } from "react-router-dom";

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
const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;

const Header = () => {
  return (
    <Container>
      <div>{/* <HamburgerMenu /> */}</div>
      <LinkLogo to="/Portfolio2025/">
        <img src={Logo} alt="main logo" />
      </LinkLogo>
    </Container>
  );
};

export default Header;
