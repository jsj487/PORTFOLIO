import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import backgroundImg from "./img/background.jpg";

const PageWrapper = styled.div`
  overflow-x: hidden;
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
  position: relative;
  height: 100vh;
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
      url(${backgroundImg}) center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const TitleMain = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const TitleContent = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: #d9d9d9;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const Detail = styled.div`
  display: inline-block;
  border-radius: 30px;
  padding: 15px 30px;
  font-weight: 400;
  font-size: 1rem;
  background-color: #b4846c;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: rgb(224, 224, 224);
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

function Home() {
  const navigate = useNavigate();

  // "자세히 보기" 버튼 클릭 시 "/about-me" 경로로 이동하는 함수
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
          <Detail onClick={handleClick}>자세히 보기 ▶</Detail>
        </TitleContainer>
      </Title>
    </PageWrapper>
  );
}

export default Home;
