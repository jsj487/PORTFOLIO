import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f8f8;
  z-index: 1000; // 헤더가 다른 요소들 위에 나타나도록 z-index 값을 높입니다.
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
  height: 45px; // 구분선의 높이
  width: 2px; // 구분선의 너비
  background: linear-gradient(
    #f8f8f8,
    #b6b6b6,
    #f8f8f8
  ); // 위, 중앙, 아래 순으로 색상 지정
  margin: 0 1rem; // 좌우 마진으로 링크 사이에 공간을 추가
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 1.2rem;
  color: #777; // 기본 글씨 색상
  text-decoration: none;
  padding: 0.5rem 1rem;

  &.active {
    color: #000; // 현재 페이지에 해당하는 링크의 글씨 색을 진하게 만듭니다.
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
