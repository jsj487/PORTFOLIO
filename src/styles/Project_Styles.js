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
export const WhiteBoard = styled.div`
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

export const Project = styled.div`
  background-color: #0177a9;
  padding-top: 100px;
`;

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

export const ProjectContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProjectWhiteBoard = styled(WhiteBoard)`
  width: 60rem;
  box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, 0.2);

  &:hover {
    width: 60rem;
  }
`;

export const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 35px;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`;

export const ProjectDate = styled.div`
  font-weight: 400;
  text-align: center;
  color: #9d9d9d;
  margin-bottom: 30px;
`;

export const ProjectWhiteBoardContent = styled.div`
  display: flex;
`;

export const ProjectImgBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 50%;
  margin-right: 3rem;
`;

export const ProjectDescriptionContainer = styled.div`
  width: 50%;
`;

export const ProjectMainDescription = styled.div``;

export const ProjectRead = styled.p`
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

export const DescriptionModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  animation: ${(props) => (props.isClosing ? slideUp : slideDown)} 0.5s ease-out
    forwards;
`;

export const ModalTitle = styled.h1`
  margin: 0;
  color: #333;
  font-size: 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const DescriptionSubContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;

  a {
    color: #258ddb;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const SubDescriptionTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 8.4rem;
  font-weight: 900;
  font-size: 1rem;
`;

export const SubDescriptionContent = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: calc(100% - 8.4rem);
  font-weight: 400;
  font-size: 1rem;
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  flex: 0 0 auto;
  object-fit: contain;
  cursor: pointer;
`;

export const ButtonUI = styled.div`
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

export const ModalBackdrop = styled.div`
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

export const ModalImage = styled.img`
  max-width: 80%;
  max-height: 80vh;
  z-index: 1050;
`;

export const ArrowButton = styled.button`
  all: unset;
  font-size: 2em;
  color: white;
  cursor: pointer;
  z-index: 1051;
  &:hover {
    color: #ddd;
  }
`;

export const LeftArrow = styled(ArrowButton)`
  position: absolute;
  left: 50px;
  svg {
    font-size: 80px;
  }
`;

export const RightArrow = styled(ArrowButton)`
  position: absolute;
  right: 50px;
  svg {
    font-size: 80px;
  }
`;

export const PrevPage = styled.div`
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
