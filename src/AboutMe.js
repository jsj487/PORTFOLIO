import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "./components/Header";

import { IoPersonSharp, IoPhonePortrait, IoMail } from "react-icons/io5";
import { FaCalendar, FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import Resume from "./img/resume.jpg"; // 이 부분은 실제 경로에 맞게 변경해주세요.

const AboutMeContainer = styled.div`
  min-height: 100vh; // 뷰포트 높이를 최소 100%로 설정
  overflow-y: auto; // 세로 스크롤 허용
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%; // 페이지 컨테이너의 너비를 100%로 설정합니다.
  padding-top: 100px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // 중앙 정렬을 위해 추가
  width: 90%; // 기본 너비 설정
  max-width: 1200px; // 최대 너비 설정
  margin-bottom: 20px; // 하단 여백
  flex-direction: column; // 모바일에서 세로 배치

  @media (min-width: 768px) {
    width: 80%; // 태블릿에서 너비 조정
    flex-direction: row; // 태블릿 이상에서 가로 배치
  }
`;

const ImageSection = styled.div`
  width: 100%; // 기본 너비를 100%로 설정
  max-width: 600px; // 최대 너비 설정
  margin-bottom: 20px; // 모바일에서 하단 여백

  @media (min-width: 768px) {
    flex: 0 0 600px; // 태블릿 이상에서는 고정 너비 설정
    margin-bottom: 0; // 태블릿 이상에서는 여백 제거
    margin-right: 40px; // 태블릿 이상에서는 오른쪽 여백을 더 많이 설정
  }
`;

const ResumeImage = styled.img`
  width: 100%; // 너비를 부모의 100%로 설정
  height: auto; // 높이 자동 조절
`;

const InfoSection = styled.div`
  width: 100%; // 기본 너비를 100%로 설정
  display: grid;
  grid-template-columns: 1fr 1fr; // 2열 그리드
  grid-template-rows: repeat(3, auto); // 3행 그리드
  gap: 10px; // 그리드 아이템 사이의 간격 설정

  @media (min-width: 768px) {
    flex: 1; // 태블릿 이상에서는 flex: 1 설정
    display: flex; // 태블릿 이상에서는 flexbox로 변경
    flex-direction: column;
    margin-left: 130px; // 태블릿 이상에서는 왼쪽 여백 추가
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center; // 아이콘과 텍스트를 가운데 정렬
  position: relative; // 가상 요소에 대한 위치 지정을 위해 relative 설정
  min-height: 70px; // 각 그리드 항목의 최소 높이를 설정
  width: 130%; // InfoContainer의 너비를 90%로 설정

  &::after {
    content: "";
    display: block;
    width: 85%; // 밑줄의 길이를 InfoContainer의 너비보다 짧게 설정
    height: 5px; // 밑줄의 두께를 설정합니다.
    border-radius: 20px;
    background: linear-gradient(to right, #cbcbcb, white); // 그라데이션 적용
    position: absolute;
    bottom: -15px; // 밑줄이 InfoContainer의 아래쪽으로 더 멀리 위치하도록 조정합니다.
    left: 0;

    @media (max-width: 767px) {
      display: none; // 모바일에서는 밑줄 제거
    }
  }

  &:not(:last-child) {
    margin-bottom: 45px; // 마지막 요소를 제외하고 margin-bottom 적용

    @media (min-width: 768px) {
      margin-bottom: 45px; // 태블릿 이상에서는 45px의 여백 적용
    }

    @media (min-width: 1024px) {
      margin-bottom: 40px; // 데스크탑 이상에서는 60px의 여백 적용
    }
  }
`;

const IconContainer = styled.div`
  font-size: 1.5em; // 기본 아이콘 크기

  @media (min-width: 768px) {
    font-size: 1.2em; // 태블릿 이상에서 아이콘 크기 조정
  }

  @media (min-width: 1024px) {
    font-size: 2em; // 데스크탑에서 아이콘 크기 조정
  }

  width: 80px; // 아이콘 컨테이너의 너비를 고정
  display: flex; // flex를 사용하여 아이콘을 정렬
  align-items: center; // 세로 중앙 정렬
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column; // 텍스트를 세로로 정렬
`;

const InfoTitle = styled.div`
  font-size: 1.25em; // 기본 글자 크기
  font-weight: bold; // 글자 두께

  @media (min-width: 768px) {
    font-size: 1em; // 태블릿 이상에서 글자 크기 조정
  }

  @media (min-width: 1024px) {
    font-size: 1.75em; // 데스크탑에서 글자 크기 조정
  }
`;

const Info = styled.div`
  font-size: 1em; // 기본 글자 크기

  @media (min-width: 768px) {
    font-size: 0.875em; // 태블릿 이상에서 글자 크기 조정
  }

  @media (min-width: 1024px) {
    font-size: 1.5em; // 데스크탑에서 글자 크기 조정
  }
`;

const hoverAnimation = keyframes`
  0%, 100% { right: 40px; }
  50% { right: 30px; }
`;

const NextPage = styled.div`
  position: absolute;
  right: 40px;
  font-size: 50px;

  @media (min-width: 768px) {
    font-size: 40px; // 태블릿 이상에서 아이콘 크기 조정
  }

  @media (min-width: 1024px) {
    font-size: 80px; // 데스크탑에서 아이콘 크기 조정
  }

  transition: all 2s;

  &:hover {
    animation: ${hoverAnimation} 1s ease-in-out infinite;
  }
  svg {
    cursor: pointer;
  }
`;

const aboutMeData = [
  { icon: <IoPersonSharp />, title: "이름", content: "조승준" },
  { icon: <FaCalendar />, title: "생년월일", content: "1999.07.30" },
  {
    icon: <FaMapMarkerAlt />,
    title: "거주지",
    content: "서울특별시 강동구",
  },
  {
    icon: <IoPhonePortrait />,
    title: "연락처",
    content: "010-8964-9828",
  },
  { icon: <IoMail />, title: "이메일", content: "jsj487@naver.com" },
  {
    icon: <FaPencilAlt />,
    title: "학력",
    content: (
      <div>
        성결대학교
        <br />
        (정보통신공학부)
      </div>
    ),
  },
];

function AboutMe() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/skills");
  };
  return (
    <AboutMeContainer>
      <Header />
      <PageContainer>
        <ContentWrapper>
          <ImageSection>
            <ResumeImage src={Resume} alt="Resume" />
          </ImageSection>
          <InfoSection>
            {aboutMeData.map((item, index) => (
              <InfoContainer key={index}>
                <IconContainer>{item.icon}</IconContainer>
                <InfoText>
                  <InfoTitle>{item.title}</InfoTitle>
                  <Info>{item.content}</Info>
                </InfoText>
              </InfoContainer>
            ))}
          </InfoSection>
        </ContentWrapper>
        <NextPage>
          <MdKeyboardDoubleArrowRight onClick={handleClick} />
        </NextPage>
      </PageContainer>
    </AboutMeContainer>
  );
}

export default AboutMe;
