import styled from "styled-components";
import React from "react";
import backgroundImg from "./img/background.jpg";
import FrontEndIcon from "./img/FrontEnd.png";
import VersionControlIcon from "./img/VersionControl.png";
import CertificateIcon from "./img/Certificate.png";
import Skills6Icon from "./img/skills6.png";
import Skills7Icon from "./img/skills7.png";
import FoodEat1 from "./img/foodeat1.png";
import { IoPersonSharp, IoPhonePortrait, IoMail } from "react-icons/io5";
import { FaCalendar, FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";

// 공통 CSS 변수
const Container = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const TitleContainer = styled(Container)`
  text-align: center;
  padding: 8.5rem 2rem 4rem;

  hr {
    margin: 40px 0px;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
`;

const WhiteBoard = styled.div`
  width: 17rem;
  padding: 1.5rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 0px;
`;

const HeaderTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  div {
    padding: 0 20px;
    font-weight: 600;
    font-size: 20px;
  }
`;

const Title = styled.div`
  position: relative;
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
      url(${backgroundImg}) 50% no-repeat;
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
`;

const AboutMe = styled.div`
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

const Skill = styled.div`
  background-color: #f9c51d;
`;

const SkillContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const SkillContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  flex-direction: row;

  img {
    width: 100%;
  }
`;

const SkillTitle = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

const Project = styled.div`
  background-color: #0d80ee;
`;

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const ProjectContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectWhiteBoard = styled(WhiteBoard)`
  width: 60rem;
`;

const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 35px;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`;
const ProjectDate = styled.div`
  font-weight: 400;
  text-align: center;
  color: #9d9d9d;
  margin-bottom: 30px;
`;
const ProjectWhiteBoardContent = styled.div`
  display: flex;
`;
const ProjectImgContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 50%;
  margin-right: 3rem;

  img {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    width: 100%;
  }
`;
const ProjectDescriptionContainer = styled.div``;
const ProjectMainDescripTion = styled.div``;

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
    content: "성결대학교 (정보통신공학부)",
  },
];

const skillsData = [
  { title: "FrontEnd", icon: FrontEndIcon, alt: "Front" },
  { title: "VersionControl", icon: VersionControlIcon, alt: "Version" },
  { title: "Certificate", icon: CertificateIcon, alt: "QNET" },
  { title: "Communication", icon: Skills6Icon, alt: "Figma" },
  { title: "Deployment", icon: Skills7Icon, alt: "Postman" },
];

const projectsData = [
  {
    title: "푸드잇(식당 예약 사이트)",
    date: "2022.12 ~ 2023.11 (4인 프로젝트)",
    image: FoodEat1,
    description: "음식점 예약 사이트",
  },
  {
    title: "CasaVerde(식물 판매 사이트)",
    date: "2023.10 ~ 2023.10 (6인 프로젝트)",
    image: FoodEat1,
  },
];

function Home() {
  return (
    <div>
      <Header>
        <HeaderTitle>JSJ PORTFOLIO</HeaderTitle>
        <HeaderContent>
          <div>About Me</div>
          <div>Skills</div>
          <div>Project</div>
        </HeaderContent>
      </Header>

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
        </TitleContainer>
      </Title>

      <AboutMe>
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
      </AboutMe>

      <Skill>
        <SkillContainer>
          <SectionTitle>SKILLS</SectionTitle>
          <SkillContentContainer>
            {skillsData.map((skill, index) => (
              <WhiteBoard key={index}>
                <SkillTitle>{skill.title}</SkillTitle>
                <img src={skill.icon} alt={skill.alt} />
              </WhiteBoard>
            ))}
          </SkillContentContainer>
        </SkillContainer>
      </Skill>

      <Project>
        <ProjectContainer>
          <SectionTitle>PROJECTS</SectionTitle>
          <ProjectContentContainer>
            {projectsData.map((project, index) => (
              <ProjectWhiteBoard key={index}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>{project.date}</ProjectDate>
                <ProjectWhiteBoardContent>
                  <ProjectImgContainer>
                    <img src={project.image}></img>
                  </ProjectImgContainer>
                  <ProjectDescriptionContainer>
                    <ProjectMainDescripTion>
                      {project.description}
                    </ProjectMainDescripTion>
                  </ProjectDescriptionContainer>
                </ProjectWhiteBoardContent>
              </ProjectWhiteBoard>
            ))}
          </ProjectContentContainer>
        </ProjectContainer>
      </Project>
    </div>
  );
}

export default Home;
