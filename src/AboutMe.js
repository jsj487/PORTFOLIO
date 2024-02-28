import React from "react";
import styled from "styled-components";

import { IoPersonSharp, IoPhonePortrait, IoMail } from "react-icons/io5";
import { FaCalendar, FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";

const SectionTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
`;

const AboutMeBox = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const AboutMeWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  opacity: 0.8;
`;

const AboutMeContainer = styled.div`
  width: 33.33333%;
  margin-bottom: 50px;
`;

const AboutMeContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;
  opacity: 0.8;
`;

const AboutMeImgContainer = styled.div`
  margin-right: 30px;
`;

const AboutMeInfoContainer = styled.div``;

const AboutMeInfoTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;

const AboutMeInfo = styled.div`
  font-weight: 400;
  font-size: 15px;
`;
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden; // 추가: 가로 스크롤 방지
`;

const aboutMeData = [
  { icon: <IoPersonSharp size={70} />, title: "이름", content: "조승준" },
  { icon: <FaCalendar size={70} />, title: "생년월일", content: "1999.07.30" },
  {
    icon: <FaMapMarkerAlt size={70} />,
    title: "거주지",
    content: "서울특별시 강동구",
  },
  {
    icon: <IoPhonePortrait size={70} />,
    title: "연락처",
    content: "010-8964-9828",
  },
  { icon: <IoMail size={70} />, title: "이메일", content: "jsj487@naver.com" },
  {
    icon: <FaPencilAlt size={70} />,
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
      <AboutMeBox>
        <SectionTitle>ABOUT ME</SectionTitle>
        <AboutMeWrapper>
          {aboutMeData.map((item, index) => (
            <AboutMeContainer key={index}>
              <AboutMeContent>
                <AboutMeImgContainer>{item.icon}</AboutMeImgContainer>
                <AboutMeInfoContainer>
                  <AboutMeInfoTitle>{item.title}</AboutMeInfoTitle>
                  <AboutMeInfo>{item.content}</AboutMeInfo>
                </AboutMeInfoContainer>
              </AboutMeContent>
            </AboutMeContainer>
          ))}
        </AboutMeWrapper>
      </AboutMeBox>
    </PageContainer>
  );
}

export default AboutMe;
