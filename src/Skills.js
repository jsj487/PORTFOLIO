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
  height: 100vh;
  overflow-y: hidden; // 세로 스크롤을 숨김
  background-color: #c19a6b;
  position: relative; // NextPage를 포함하기 위한 상대 위치
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative; /* 상위 요소에 상대적 위치 지정 */
  z-index: 1; /* 필요한 경우 z-index 조정 */
  overflow: visible; /* 내부 요소가 바깥으로 나와도 괜찮다면 overflow를 visible로 설정 */
`;

const SkillContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #d7ccc8;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; /* 책꽂이에 상대적 위치 지정 */
  z-index: 2; /* z-index를 상위 요소보다 높게 설정 */
  width: 60%;
`;

const WhiteBoard = styled.div`
  width: 10rem; /* 책의 너비를 설정합니다. */
  height: 15rem; /* 책의 높이를 설정합니다. */
  margin: 1rem; /* 책과 책 사이의 간격을 설정합니다. */
  padding: 1rem;
  display: flex;
  flex-direction: column; /* 내용을 세로로 나열합니다. */
  justify-content: center; /* 내용을 중앙에 배치합니다. */
  align-items: center; /* 내용을 중앙에 배치합니다. */
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(
      -10px
    ); /* 호버 시 책이 살짝 위로 올라가는 효과를 줍니다. */
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
  width: 50%;
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
  position: fixed; // 화면에 고정되도록 설정
  right: 40px;
  top: 50%; // 페이지 하단에 위치하도록 조정합니다.
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
  position: fixed; // 화면에 고정되도록 설정
  left: 40px;
  top: 50%; // 페이지 하단에 위치하도록 조정합니다.
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
      // 이미 확장된 상태에서 다시 클릭 시, 변화 없이 유지
      setExpandedBoard({ index, expanded: true });
    } else {
      // 새로운 WhiteBoard 클릭 시, 잠깐 초기 상태로 돌아갔다가 새로운 내용으로 변경
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
      }, 500); // 500ms의 딜레이 후 콘텐츠 변경
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
