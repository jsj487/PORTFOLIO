import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ImageSlider from "./components/ImageSlider";
import { projectsData } from "./data/projectsData";
import styled, { keyframes } from "styled-components";
import { PrevPage } from "./components/NavigationButtons";

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

const Project = styled.div`
  background-color: #0177a9;
  padding-top: 100px;
`;

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 95rem;
  padding: 4rem 2rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ProjectContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProjectWhiteBoard = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, 0.2);
  transition: width 0.5s ease;
  box-sizing: border-box;
  overflow-wrap: break-word;
`;

const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 35px;
  color: #000;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const ProjectDate = styled.div`
  font-weight: 400;
  text-align: center;
  color: #9d9d9d;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ProjectWhiteBoardContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImgBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectDescriptionContainer = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;
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
    color: rgba(128, 128, 128, 0.7);
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

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
  }
`;

const ModalTitle = styled.h1`
  margin: 0 0 30px 0;
  color: #333;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  color: rgba(128, 128, 128, 0.7);
  font-size: 3rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: rgba(128, 128, 128, 1);
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

  @media (max-width: 768px) {
    width: 6rem;
    font-size: 0.9rem;
  }
`;

const SubDescriptionContent = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: calc(100% - 8.4rem);
  font-weight: 400;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: calc(100% - 6rem);
    font-size: 0.9rem;
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
            <h2>3. 제작 배경</h2>
            {selectedProject.story}
            <h2>4. 사용한 기술</h2>
            {selectedProject.stack}
          </DescriptionModalBox>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </DescriptionModal>
      )}
    </div>
  );
}

export default Projects;
