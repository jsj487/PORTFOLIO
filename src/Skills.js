import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "./components/Header";

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
  min-height: 100vh; // 최소 높이를 뷰포트 높이로 설정
  background-color: #c19a6b; // 배경색 설정
  position: relative;
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
  overflow: visible;
`;

const SkillContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #d7ccc8;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const WhiteBoard = styled.div`
  width: 10rem;
  height: 15rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillTitle = styled.div`
  padding-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

const Monitor = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #6a6a6a;
  margin-top: 20px;
  padding: 1.5rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  width: 80%;
  height: 40vh;
`;

const MonitorDisplay = styled.div`
  background: #1f1f1f;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  position: fixed;
  right: 40px;
  top: 50%;
  font-size: 100px;
  transition: all 2s;
  z-index: 2;
  svg {
    cursor: pointer;
  }

  &:hover {
    animation: ${RightAnimation} 1s ease-in-out infinite;
  }
`;
const PrevPage = styled.div`
  position: fixed;
  left: 40px;
  top: 50%;
  font-size: 100px;
  transition: all 2s;
  z-index: 2;
  svg {
    cursor: pointer;
  }

  &:hover {
    animation: ${LeftAnimation} 1s ease-in-out infinite;
  }
`;

const skillsData = [
  { title: "FrontEnd", icon: FrontEndIcon },
  { title: "VersionControl", icon: VersionControlIcon },
  { title: "Certificate", icon: CertificateIcon },
  { title: "Communication", icon: Skills6Icon },
  { title: "Deployment", icon: Skills7Icon },
];

function Skills() {
  const [expandedBoard, setExpandedBoard] = useState({
    index: null,
    expanded: false,
  });
  const [displayContent, setDisplayContent] = useState("");
  const toggleBoard = (index) => {
    if (expandedBoard.index === index && expandedBoard.expanded) {
      setExpandedBoard({ index, expanded: true });
    } else {
      setDisplayContent("Switching...");
      setExpandedBoard({ index, expanded: true });
    }
  };

  useEffect(() => {
    if (expandedBoard.expanded && expandedBoard.index !== null) {
      const timer = setTimeout(() => {
        setDisplayContent(
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <img
              src={skillsData[expandedBoard.index].icon}
              alt={skillsData[expandedBoard.index].title}
              style={{ maxWidth: "90%", maxHeight: "90%" }}
            />
          </div>
        );
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setDisplayContent("Choose a skill to learn more");
    }
  }, [expandedBoard]);

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
            <WhiteBoard key={index} onClick={() => toggleBoard(index)}>
              <SkillTitle>{skill.title}</SkillTitle>
            </WhiteBoard>
          ))}
        </SkillContentContainer>
        <Monitor>
          <MonitorDisplay>
            {typeof displayContent === "string" ? (
              <span
                style={{ color: "#FFF", fontSize: "30px", fontWeight: "700" }}
              >
                {displayContent}
              </span>
            ) : (
              displayContent
            )}
          </MonitorDisplay>
        </Monitor>
      </SkillContainer>
      <NextPage onClick={NextBtn}>
        <MdKeyboardDoubleArrowRight />
      </NextPage>
    </Skill>
  );
}

export default Skills;
