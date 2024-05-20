import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import { PrevPage, NextPage } from "./components/NavigationButtons"; // 추가

//아이콘 import
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

//기술스택 사진 import
import FrontEndIcon from "./img/FrontEnd.png";
import VersionControlIcon from "./img/VersionControl.png";
import CertificateIcon from "./img/Certificate.png";
import Skills6Icon from "./img/skills6.png";
import Skills7Icon from "./img/skills7.png";

const Skill = styled.div`
  min-height: 100vh;
  background-color: #c19a6b;
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

//기술스택 클릭 시 출력되는 데이터
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

  // 기술스택 클릭 시 동작하는 함수
  const toggleBoard = (index) => {
    if (expandedBoard.index === index && expandedBoard.expanded) {
      setExpandedBoard({ index, expanded: true });
    } else {
      setDisplayContent("Switching...");
      setExpandedBoard({ index, expanded: true });
    }
  };

  // 기술스택이 선택되면 해당 이미지를 표시하는 useEffect
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

  return (
    <Skill>
      <Header />
      <PrevPage onClick={() => navigate("/about-me")}>
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
      <NextPage onClick={() => navigate("/projects")}>
        <MdKeyboardDoubleArrowRight />
      </NextPage>
    </Skill>
  );
}

export default Skills;
