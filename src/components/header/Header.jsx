import styled from "styled-components";
import Logo from "../../assets/Logo.svg";

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
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
