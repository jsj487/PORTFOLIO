import React, { useState, useRef, useEffect } from "react";
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
  background-color: #c19a6b;
  position: relative; // NextPage를 포함하기 위한 상대 위치
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10rem 2rem;
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
`;

const WhiteBoard = styled.div`
  width: ${(props) => (props.expanded ? "100%" : "10rem")}; // 조건부 너비 설정
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
  transition: all 0.3s ease, transform 0.5s ease, width 0.5s ease; /* width 변화에도 transition 적용 */
  cursor: pointer;
  overflow: hidden;
  transform: ${(props) =>
    props.expanded ? "translateY(370px)" : "translateY(0)"};
`;

const SkillTitle = styled.div`
  padding-bottom: 0.5rem;
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
  { title: "FrontEnd" },
  { title: "VersionControl" },
  { title: "Certificate" },
  { title: "Communication" },
  { title: "Deployment" },
];

function Skills() {
  const [expandedBoard, setExpandedBoard] = useState(null);
  const containerRef = useRef(null); // SkillContentContainer의 참조를 저장
  const [containerWidth, setContainerWidth] = useState("10rem"); // 초기 너비 값 설정

  useEffect(() => {
    // SkillContentContainer의 현재 너비를 상태로 설정
    if (containerRef.current) {
      setContainerWidth(`${containerRef.current.offsetWidth}px`);
    }
  }, []); // 의존성 배열이 빈 배열이므로, 컴포넌트 마운트 시에만 실행

  const toggleBoard = (index) => {
    setExpandedBoard(expandedBoard === index ? null : index);
  };
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
        <SkillContentContainer ref={containerRef}>
          {" "}
          {/* ref 추가 */}
          {skillsData.map((skill, index) => (
            <WhiteBoard
              key={index}
              expanded={expandedBoard === index}
              style={{
                width: expandedBoard === index ? containerWidth : "10rem",
              }} // style prop으로 너비 조정
              onClick={() => toggleBoard(index)}
            >
              <SkillTitle>{skill.title}</SkillTitle>
              {expandedBoard === index && (
                <div>{/* Additional content here */}</div>
              )}
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
