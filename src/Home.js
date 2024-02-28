import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import backgroundImg from "./img/background.jpg";

const PageWrapper = styled.div`
  overflow-x: hidden; // 가로 스크롤 방지
`;

const TitleContainer = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
  hr {
    margin: 40px 0px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; // 추가
  height: 100vh; // 전체 화면 높이 차지
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(112, 93, 80, 0.8) 0,
        rgba(112, 93, 80, 0.8) 90%
      ),
      url(${backgroundImg}) center no-repeat; // 50%를 center로 변경 가능
    background-size: cover;
    z-index: -1;
  }
`;

const TitleMain = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #fff;
`;

const TitleContent = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #d9d9d9;
  margin-bottom: 40px;
`;

const Detail = styled.div`
  display: inline-block;
  border-radius: 30px;
  padding: 15px 30px;
  font-weight: 400;
  font-size: 20px;
  background-color: #b4846c;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: rgb(224, 224, 224);
  }
`;

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about-me");
  };

  return (
    <PageWrapper>
      <Title>
        <TitleContainer>
          <TitleMain>
            조승준
            <br />
            프론트엔드 개발자 포트폴리오
          </TitleMain>
          <hr />
          <TitleContent>
            안녕하세요.
            <br />
            발전을 위해 항상 생각하는 프론트엔드 웹 개발자입니다.
            <br />제 사이트가 어떻게 하면 더 발전을 할 수 있을까 항상 생각하며
            고민하는 것이 제 장점입니다.
          </TitleContent>
          <Detail onClick={handleClick}>자세히 보기</Detail>
        </TitleContainer>
      </Title>
    </PageWrapper>
  );
}

export default Home;
