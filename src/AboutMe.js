import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import { NextPage } from "./components/NavigationButtons";

import { IoPersonSharp, IoPhonePortrait, IoMail } from "react-icons/io5";
import { FaCalendar, FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import Resume from "./img/resume.jpg";
const AboutMeContainer = styled.div`
  min-height: 100vh;
  overflow-y: auto;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 100px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 80%;
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex: 0 0 600px;
    margin-bottom: 0;
    margin-right: 40px;
  }
`;

const ResumeImage = styled.img`
  width: 100%;
  height: auto;
`;

const InfoSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 10px;

  @media (min-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 75px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-height: 70px;
  width: 130%;

  &::after {
    content: "";
    display: block;
    width: 85%;
    height: 5px;
    border-radius: 20px;
    background: linear-gradient(to right, #cbcbcb, white);
    position: absolute;
    bottom: -15px;
    left: 0;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &:not(:last-child) {
    margin-bottom: 45px;

    @media (min-width: 768px) {
      margin-bottom: 45px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 40px;
    }
  }
`;

const IconContainer = styled.div`
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }

  @media (min-width: 1024px) {
    font-size: 2em;
  }

  width: 80px;
  display: flex;
  align-items: center;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.div`
  font-size: 1.25em;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1em;
  }

  @media (min-width: 1024px) {
    font-size: 1.75em;
  }
`;

const Info = styled.div`
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 0.875em;
  }

  @media (min-width: 1024px) {
    font-size: 1.5em;
  }
`;

// 간단한 개인정보 데이터
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
        <NextPage onClick={() => navigate("/skills")}>
          <MdKeyboardDoubleArrowRight />
        </NextPage>
      </PageContainer>
    </AboutMeContainer>
  );
}

export default AboutMe;
