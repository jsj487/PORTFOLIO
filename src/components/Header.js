import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f8f8;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Divider = styled.div`
  height: 45px;
  width: 2px;
  background: linear-gradient(#f8f8f8, #b6b6b6, #f8f8f8);
  margin: 0 1rem;
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 1.2rem;
  color: #777;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &.active {
    color: #000;
    font-weight: bold;
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")}>Home</Logo>
      <NavMenu>
        <NavLinkStyled to="/about-me" activeClassName="active">
          About Me
        </NavLinkStyled>
        <Divider /> {/* 첫 번째와 두 번째 링크 사이에 구분자 추가 */}
        <NavLinkStyled to="/skills" activeClassName="active">
          Skills
        </NavLinkStyled>
        <Divider /> {/* 첫 번째와 두 번째 링크 사이에 구분자 추가 */}
        <NavLinkStyled to="/projects" activeClassName="active">
          Projects
        </NavLinkStyled>
      </NavMenu>
    </HeaderContainer>
  );
}

export default Header;
