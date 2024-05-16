import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ImageSlider from "./components/ImageSlider";
import { projectsData } from "./data/projectsData";
import styled, { keyframes } from "styled-components";

// 공통 스타일과 애니메이션 정의
const hoverAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(0); }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-10%);
    opacity: 0;
  }
`;

const LeftAnimation = keyframes`
  0%, 100% { left: 40px; }
  50% { left: 30px; }
`;

// 스타일 정의
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

const Project = styled.div`
  background-color: #0177a9;
  padding-top: 100px;
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
  box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, 0.2);

  &:hover {
    width: 60rem;
  }
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

const ProjectImgBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 50%;
  margin-right: 3rem;
`;

const ProjectDescriptionContainer = styled.div`
  width: 50%;
`;

const ProjectMainDescription = styled.div``;

const ProjectRead = styled.p`
  background-color: black;
  color: white;
  padding: 10px;
  margin: 0;
  font-size: 1.1rem;
  display: table;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    animation: ${hoverAnimation} 1s ease-in-out infinite;
  }
`;

const DescriptionModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  animation: ${(props) => (props.isClosing ? slideUp : slideDown)} 0.5s ease-out
    forwards;

  hr {
    color: rgba(128, 128, 128, 0.7); // 연한 회색
  }

  h2 {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }
  a:visited {
    color: blue;
  }
`;

const DescriptionModalBox = styled.div`
  max-width: 1200px;
  min-width: 1200px;
`;

const ModalTitle = styled.h1`
  margin: 0 0 30px 0;
  color: #333;
  font-size: 2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none; // 배경 제거
  border: none; // 테두리 제거
  color: rgba(128, 128, 128, 0.7); // 연한 회색
  font-size: 3rem; // 적절한 크기 설정
  cursor: pointer; // 마우스를 올리면 클릭 모양으로 변경
  transition: color 0.3s; // 색 변경에 대한 부드러운 전환

  &:hover {
    color: rgba(128, 128, 128, 1); // 마우스를 올리면 더 진한 회색으로 변경
  }
`;

const DescriptionSubContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;

  a {
    color: #258ddb;
    cursor: pointer;
    text-decoration: none;
  }
`;

const SubDescriptionTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 8.4rem;
  font-weight: 900;
  font-size: 1rem;
`;

const SubDescriptionContent = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: calc(100% - 8.4rem);
  font-weight: 400;
  font-size: 1rem;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

const ImagesContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  margin-bottom: 40px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  flex: 0 0 auto;
  object-fit: contain;
  cursor: pointer;
`;

const ButtonUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    pointer-events: auto;
    background-color: #ffffff;
    border: 1px solid #000;
    border-radius: 50%;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 80%;
  max-height: 80vh;
  z-index: 1050;
`;

const ArrowButton = styled.button`
  all: unset;
  font-size: 2em;
  color: white;
  cursor: pointer;
  z-index: 1051;
  &:hover {
    color: #ddd;
  }
`;

const LeftArrow = styled(ArrowButton)`
  position: absolute;
  left: 50px;
  svg {
    font-size: 80px;
  }
`;

const RightArrow = styled(ArrowButton)`
  position: absolute;
  right: 50px;
  svg {
    font-size: 80px;
  }
`;

const PrevPage = styled.div`
  position: fixed;
  left: 40px;
  top: 50%;
  font-size: 100px;
  transition: all 2s;
  svg {
    cursor: pointer;
  }

  &:hover {
    animation: ${LeftAnimation} 1s ease-in-out infinite;
  }
`;

function Projects() {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <div>
      <Header />
      <PrevPage onClick={() => navigate("/skills")}>
        <MdKeyboardDoubleArrowLeft />
      </PrevPage>
      <Project>
        <ProjectContainer>
          <ProjectContentContainer>
            {projectsData.map((project, index) => (
              <ProjectWhiteBoard key={index}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>{project.date}</ProjectDate>
                <ProjectWhiteBoardContent>
                  <ProjectImgBox>
                    <ImageSlider images={project.image} />
                  </ProjectImgBox>
                  <ProjectDescriptionContainer>
                    <ProjectMainDescription>
                      {project.description}
                    </ProjectMainDescription>
                    <br />
                    <ProjectRead onClick={() => openModal(project)}>
                      자세한 설명 보기 ▶
                    </ProjectRead>

                    <br />
                    <hr />

                    <DescriptionSubContainer>
                      <SubDescriptionTitle>주요기능</SubDescriptionTitle>
                      <SubDescriptionContent>
                        {project.main_func}
                      </SubDescriptionContent>
                    </DescriptionSubContainer>
                    <DescriptionSubContainer>
                      <SubDescriptionTitle>Git</SubDescriptionTitle>
                      <SubDescriptionContent>
                        {project.git}
                      </SubDescriptionContent>
                    </DescriptionSubContainer>
                    <DescriptionSubContainer>
                      <SubDescriptionTitle>URL</SubDescriptionTitle>
                      <SubDescriptionContent>
                        {project.url}
                      </SubDescriptionContent>
                    </DescriptionSubContainer>
                    <DescriptionSubContainer>
                      <SubDescriptionTitle>FrontEnd</SubDescriptionTitle>
                      <SubDescriptionContent>
                        {project.frontend}
                      </SubDescriptionContent>
                    </DescriptionSubContainer>
                    <DescriptionSubContainer>
                      <SubDescriptionTitle>BackEnd</SubDescriptionTitle>
                      <SubDescriptionContent>
                        {project.backend}
                      </SubDescriptionContent>
                    </DescriptionSubContainer>
                  </ProjectDescriptionContainer>
                </ProjectWhiteBoardContent>
              </ProjectWhiteBoard>
            ))}
          </ProjectContentContainer>
        </ProjectContainer>
      </Project>

      {isModalOpen && (
        <DescriptionModal isClosing={isClosing} onClose={closeModal}>
          <DescriptionModalBox>
            <ModalTitle>
              {selectedProject.title} - {selectedProject.members}
            </ModalTitle>
            <hr />
            <h2>1. Git / Site URL</h2>
            <p>
              <strong>Git</strong>: {selectedProject.git}
              <br />
              <strong>Site</strong>: {selectedProject.url}
            </p>
            <h2>2. 사이트 설명서</h2>
            {selectedProject.modal_description}
            <h3>※ 주요 기능</h3>
            {selectedProject.modal_func}
          </DescriptionModalBox>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </DescriptionModal>
      )}
    </div>
  );
}

export default Projects;
