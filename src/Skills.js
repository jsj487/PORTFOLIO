import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "./Header";

import FrontEndIcon from "./img/FrontEnd.png";
import VersionControlIcon from "./img/VersionControl.png";
import CertificateIcon from "./img/Certificate.png";
import Skills6Icon from "./img/skills6.png";
import Skills7Icon from "./img/skills7.png";

import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const Skill = styled.div`
  height: 100vh;
  overflow-y: hidden; // 세로 스크롤을 숨김
  background-color: #f9c51d;
  position: relative; // NextPage를 포함하기 위한 상대 위치
`;

const SkillContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 10rem 2rem;
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

const WhiteBoard = styled.div`
  width: 17rem;
  padding: 1.5rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, 0.2);
  transition: width 0.5s ease;

  &:hover {
    width: 18rem;
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

const RightAnimation = keyframes`
  0%, 100% { right: 40px; }
  50% { right: 30px; }
`;

const LeftAnimation = keyframes`
  0%, 100% { left: 40px; }
  50% { left: 30px; }
`;

const NextPage = styled.div`
  position: fixed; // 화면에 고정되도록 설정
  right: 40px;
  top: 50%; // 페이지 하단에 위치하도록 조정합니다.
  font-size: 100px;
  transition: all 2s;
  svg {
    cursor: pointer;
  }

  &:hover {
    animation: ${RightAnimation} 1s ease-in-out infinite;
  }
`;
const PrevPage = styled.div`
  position: fixed; // 화면에 고정되도록 설정
  left: 40px;
  top: 50%; // 페이지 하단에 위치하도록 조정합니다.
  font-size: 100px;
  transition: all 2s;
  svg {
    cursor: pointer;
  }

  &:hover {
    animation: ${LeftAnimation} 1s ease-in-out infinite;
  }
`;

const skillsData = [
  { title: "FrontEnd", icon: FrontEndIcon, alt: "Front" },
  { title: "VersionControl", icon: VersionControlIcon, alt: "Version" },
  { title: "Certificate", icon: CertificateIcon, alt: "QNET" },
  { title: "Communication", icon: Skills6Icon, alt: "Figma" },
  { title: "Deployment", icon: Skills7Icon, alt: "Postman" },
];

function Skills() {
  const navigate = useNavigate();
  const NextBtn = () => {
    navigate("/projects");
  };
  const PrevBtn = () => {
    navigate("/about-me");
  };
  return (
    <Skill>
      <Header />
      <PrevPage onClick={PrevBtn}>
        <MdKeyboardDoubleArrowLeft />
      </PrevPage>
      <SkillContainer>
        <SkillContentContainer>
          {skillsData.map((skill, index) => (
            <WhiteBoard key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <img src={skill.icon} alt={skill.alt} />
            </WhiteBoard>
          ))}
        </SkillContentContainer>
      </SkillContainer>
      <NextPage onClick={NextBtn}>
        <MdKeyboardDoubleArrowRight />
      </NextPage>
    </Skill>
  );
}

export default Skills;
