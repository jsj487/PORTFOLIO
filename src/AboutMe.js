import React from "react";
import styled from "styled-components";

import { IoPersonSharp, IoPhonePortrait, IoMail } from "react-icons/io5";
import { FaCalendar, FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";

import Resume from "./img/resume.jpg"; // 이 부분은 실제 경로에 맞게 변경해주세요.

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%; // 페이지 컨테이너의 너비를 100%로 설정합니다.
  height: 100vh;
`;

const SectionTitle = styled.h2`
  margin-bottom: 50px;
  margin-top: 0px;
  text-align: center; // 텍스트 중앙 정렬
  width: 100%; // 너비 100%
  font-size: 50px;

  font-family: "Anton", sans-serif; // 폰트 패밀리 설정
  font-weight: 400; // 폰트 두께 설정
  font-style: normal; // 폰트 스타일 설정
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%; // 전체 너비의 80% 사용
  max-width: 1200px; // 최대 너비 설정
  margin-bottom: 20px; // 하단 여백
`;

const ImageSection = styled.div`
  flex: 2; // 유연한 배치를 위해 flex: 1 설정
`;

const ResumeImage = styled.img`
  width: 100%; // 너비를 부모의 100%로 설정
  max-width: 600px; // 최대 너비 설정
  height: auto; // 높이 자동 조절
`;

const InfoSection = styled.div`
  flex: 1; // 유연한 배치를 위해 flex: 1 설정
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center; // 아이콘과 텍스트를 가운데 정렬
  position: relative; // 가상 요소에 대한 위치 지정을 위해 relative 설정

  &::after {
    content: "";
    display: block;
    width: 100%; // 밑줄의 길이를 InfoContainer의 너비에 맞춥니다.
    height: 5px; // 밑줄의 두께를 설정합니다.
    border-radius: 20px;
    background: linear-gradient(to right, #cbcbcb, white); // 그라데이션 적용
    position: absolute;
    bottom: -15px; // 밑줄이 InfoContainer의 아래쪽으로 더 멀리 위치하도록 조정합니다.
    left: 0;
  }

  &:not(:last-child) {
    margin-bottom: 45px; // 마지막 요소를 제외하고 margin-bottom 적용
  }
`;

const IconContainer = styled.div`
  font-size: 60px; // 아이콘 크기를 24px로 설정
  width: 100px; // 아이콘 컨테이너의 너비를 고정
  display: flex; // flex를 사용하여 아이콘을 정렬
  align-items: center; // 세로 중앙 정렬
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column; // 텍스트를 세로로 정렬
`;

const InfoTitle = styled.div`
  font-size: 2em; // 글자 크기 조절
  font-weight: bold; // 글자 두께
`;

const Info = styled.div`
  font-size: 1.5em; // 글자 크기 조절
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
  return (
    <PageContainer>
      <SectionTitle>ABOUT ME</SectionTitle>
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
    </PageContainer>
  );
}

export default AboutMe;
