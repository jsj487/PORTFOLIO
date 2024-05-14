import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";

import FoodEat1 from "./img/foodeat1.png";
import FoodEat2 from "./img/foodeat2.png";
import FoodEat3 from "./img/foodeat3.png";
import FoodEat4 from "./img/foodeat4.jpg";
import FoodEat5 from "./img/foodeat5.png";
import FoodEat6 from "./img/foodeat6.png";

import CasaVerde1 from "./img/casaverde1.png";
import CasaVerde2 from "./img/casaverde2.png";
import CasaVerde3 from "./img/casaverde3.png";
import CasaVerde4 from "./img/casaverde4.png";
import CasaVerde5 from "./img/casaverde5.png";
import CasaVerde6 from "./img/casaverde6.png";
import CasaVerde7 from "./img/casaverde7.png";

import JetFlix1 from "./img/jetflix1.png";
import JetFlix2 from "./img/jetflix2.png";
import JetFlix3 from "./img/jetflix3.png";

import Portfolio1 from "./img/portfolio1.png";
import Portfolio2 from "./img/portfolio2.png";
import Portfolio3 from "./img/portfolio3.png";
import Portfolio4 from "./img/portfolio4.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

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

const projectsData = [
  {
    title: "푸드잇(식당 예약 사이트)",
    date: "2022.12 ~ 2023.11 (4인 프로젝트)",
    image: [FoodEat1, FoodEat2, FoodEat3, FoodEat4, FoodEat5, FoodEat6],
    description: (
      <div>
        <b>
          캐치 테이블을 보고 생각 한 식당 예약 사이트입니다. 예약뿐 아니라 식당
          주인에 시점으로 예약한 대기열을 관리 할 수 있도록 구현했습니다.
        </b>
        기능으로는 회원가입, 로그인, 식당 예약, 문자 확인, 리뷰 등 식당 예약
        사이트로써 기능을 다 넣도록 노력했습니다
        <br /> <br />
        처음 하는 개발이니 만큼 Html, JS, CSS만을 사용했고, 코드가 매우 투박하며
        최적화도 안 되었지만 당시에는 기능을 구현했다는 과정이 즐거웠습니다.
        친구들과 같이 밤을 세어 가면서 버그를 고치고, 기능을 추가 해 나가면서
        더욱 성장하는 저희 모습을 보면서 뿌듯함을 느꼈습니다.
        <br /> <br />
        지금 코드를 다시 보면 도저히 봐줄 수 없는 수준에 코드지만 이 프로젝트를
        겪음으로써 제 부족함을 알고 더욱 정진하기 위해 노력했던 거 같습니다.
      </div>
    ),
    main_func: (
      <div>
        손님 - 음식점 예약 및 문자 메시지로 확인 가능
        <br />
        점주 - 예약 손님 확인 예약 관리
      </div>
    ),
    git: (
      <a href="https://github.com/7jjin/dot-com">
        https://github.com/7jjin/dot-com
      </a>
    ),
    url: (
      <a href="https://www.foodeat.store/mainpage">
        https://www.foodeat.store/mainpage
      </a>
    ),
    frontend: "HTML, JavaScript, CSS",
    backend: "Spring Boot, MySql, CentOS, VMware",
  },
  {
    title: "CasaVerde(식물 판매 사이트)",
    date: "2023.10 ~ 2023.10 (6인 프로젝트)",
    image: [
      CasaVerde1,
      CasaVerde2,
      CasaVerde3,
      CasaVerde4,
      CasaVerde5,
      CasaVerde6,
      CasaVerde7,
    ],
    description: (
      <div>
        <b>
          식물을 키울 때 필요한 다양한 물건을 살 수 있는 홈쇼핑 사이트입니다.
        </b>
        부트캠프에서 홈쇼핑 사이트 제작을 과제로 주었고, 무슨 사이트를 하면
        좋을지에 대해 토론을 하다 몇몇 팀원이 이런 식물 관련 취미가 있어서
        결정했습니다.
        <br />
        <br />
        서버는 부트캠프에서 제공 해 줘서 FrontEnd와 BackEnd 개발에만 집중하여
        만든 2주짜리 단기 프로젝트였습니다.
        <br />
        <br />
        처음으로 친구들이 아닌 타인과 프로젝트를 진행 한 만큼 민폐를 끼칠까
        걱정했지만, 다양한 일이 일어났지만 저희가 완성하고픈 필수요소를 다 갖춘
        사이트가 만들 수 있어서 기뻤습니다.
      </div>
    ),
    main_func:
      "본인이 원하는 물품을 장바구니에 담아서 구매를 할 수 있고, 회원 정보 수정이 가능합니다.",
    git: (
      <a href="https://github.com/SW-6-Casa-Verde/Casa-Verde">
        https://github.com/SW-6-Casa-Verde/Casa-Verde
      </a>
    ),
    url: (
      <a href="http://kdt-sw-6-team08.elicecoding.com/">
        http://kdt-sw-6-team08.elicecoding.com/
      </a>
    ),
    frontend: "HTML, JavaScript, CSS",
    backend: "Mongo DB, VMware",
  },
  {
    title: "JETFLIX(영화 소개 사이트)",
    date: "2024.1 ~ 2024.1 (1인 프로젝트)",
    image: [JetFlix1, JetFlix2, JetFlix3],
    description: (
      <div>
        <b>영화 목록 API를 이용해서 만든 영화 소개 사이트입니다.</b>
        React를 배우고 처음 만든 사이트여서 기능도 없고 UI만 있는 사이트입니다.
        <br /> <br />
        React로 개발을 처음 하니 만큼 사이트 자체가 많이 투박합니다. Nomade 코딩
        인강으로 배운 것을 이용해서 만든 사이트입니다.
      </div>
    ),
    main_func: "영화 소개",
    git: (
      <a href="https://github.com/jsj487/react-beginner">
        https://github.com/jsj487/react-beginner
      </a>
    ),
    url: <a href="-">-</a>,
    frontend: "React, JavaScript, CSS",
    backend: "-",
  },
  {
    title: "JSJ Portfolio(포트폴리오)",
    date: "2024.2 ~ 2024.2 (1인 프로젝트)",
    image: [Portfolio1, Portfolio2, Portfolio3, Portfolio4],
    description: (
      <div>
        <b>
          제가 그 동안 해온 작업들 제가 할 수 있는 것을 보여주기 위한 포트폴리오
          사이트 입니다.
        </b>
        <br /> <br />
        전에 영화 소개 사이트를 제작하면서 사용한 React를 다시 한 번 숙련도 쌓기
        위해 위해 React를 이용하여 제작하였습니다. 제가 지금까지 어떤 개발을
        하였고, 무슨 기분을 느끼고, 무엇을 할 수 있는지 보여주기 위한 의도로
        제작하였습니다.
      </div>
    ),
    main_func: "포트폴리오",
    git: (
      <a href="https://github.com/jsj487/PORTFOLIO">
        https://github.com/jsj487/PORTFOLIO
      </a>
    ),
    url: <a>-</a>,
    frontend: "React, JavaScript, CSS",
    backend: "-",
  },
];

//슬라이드 이미지 스타일드 컴포넌트
const LeftAnimation = keyframes`
  0%, 100% { left: 40px; }
  50% { left: 30px; }
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

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative; // 상대 위치 설정 유지
  margin-bottom: 20px; // 버튼을 위한 공간 확보
`;

const ImagesContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  margin-bottom: 40px;
`;

const Image = styled.img`
  max-width: 100%; /* 이미지가 컨테이너 너비를 초과하지 않도록 설정 */
  height: auto; /* 이미지의 원본 비율 유지 */
  flex: 0 0 auto; /* flex 컨테이너 내에서 이미지의 크기 고정 */
  object-fit: contain; // 원본 이미지 비율을 유지하면서 컨테이너에 맞춰 조정합니다.
  cursor: pointer;
`;

const ButtonUI = styled.div`
  display: flex;
  justify-content: center; // 버튼을 슬라이더 중앙 아래로 정렬
  align-items: center;
  gap: 20px; // 버튼 사이 간격

  button {
    pointer-events: auto;
    background-color: #ffffff; // 버튼 배경색 설정
    border: 1px solid #000; // 버튼 테두리 설정
    border-radius: 50%; // 버튼을 원형으로 디자인
    cursor: pointer;
    width: 40px; // 버튼 크기 설정
    height: 40px; // 버튼 크기 설정
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none; // 포커스 시 아웃라인 제거
    }

    svg {
      width: 20px; // 아이콘 크기 조정
      height: 20px; // 아이콘 크기 조정
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
  z-index: 1050; /* 화살표 버튼보다 앞에 위치하도록 z-index 설정 */
`;

const ArrowButton = styled.button`
  all: unset;
  font-size: 2em;
  color: white;
  cursor: pointer;
  z-index: 1051; /* 모달 이미지 위에 오도록 z-index 설정 */
  &:hover {
    color: #ddd;
  }
`;

const LeftArrow = styled(ArrowButton)`
  position: absolute;
  left: 50px; /* 왼쪽에서부터의 거리 */
  svg {
    font-size: 80px;
  }
`;

const RightArrow = styled(ArrowButton)`
  position: absolute;
  right: 50px; /* 오른쪽에서부터의 거리 */
  svg {
    font-size: 80px;
  }
`;

// 모달 컴포넌트
function Modal({ imageUrl, images, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    images.indexOf(imageUrl)
  );

  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalImage
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        onClick={(e) => e.stopPropagation()}
      />
      <LeftArrow onClick={goToPrevious}>
        <IoIosArrowBack />
      </LeftArrow>
      <RightArrow onClick={goToNext}>
        <IoIosArrowForward />
      </RightArrow>
    </ModalBackdrop>
  );
}

//이미지 슬라이더
function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(1); // 첫 번째 실제 이미지로 시작
  const [displaySlideNumber, setDisplaySlideNumber] = useState(1); // 사용자에게 보여지는 슬라이드 번호
  const sliderRef = useRef(null);
  const transitionRef = useRef(true);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      const handleTransitionEnd = () => {
        if (currentSlide === 0) {
          transitionRef.current = false;
          setCurrentSlide(images.length);
          setDisplaySlideNumber(images.length);
        } else if (currentSlide === images.length + 1) {
          transitionRef.current = false;
          setCurrentSlide(1);
          setDisplaySlideNumber(1);
        } else {
          setDisplaySlideNumber(currentSlide);
        }
      };

      slider.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        slider.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
  }, [currentSlide, images.length]);

  useEffect(() => {
    updateSlidePosition();
  }, [currentSlide]);

  const updateSlidePosition = () => {
    if (transitionRef.current) {
      sliderRef.current.style.transition = "transform 0.3s ease-out";
    } else {
      sliderRef.current.style.transition = "none";
      transitionRef.current = true;
    }
    sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  const moveSlide = (direction) => {
    if (direction === "prev") {
      setCurrentSlide((prev) => (prev === 0 ? images.length : prev - 1));
    } else if (direction === "next") {
      setCurrentSlide((prev) => (prev === images.length + 1 ? 1 : prev + 1));
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  return (
    <SliderContainer>
      <ImagesContainer ref={sliderRef}>
        <Image src={images[images.length - 1]} alt="Clone Last" />
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            onClick={() => openModal(image)}
          />
        ))}
        <Image src={images[0]} alt="Clone First" />
      </ImagesContainer>
      {modalOpen && (
        <Modal
          imageUrl={selectedImage}
          images={images}
          onClose={() => setModalOpen(false)}
        />
      )}
      <ButtonUI>
        <button onClick={() => moveSlide("prev")}>
          <IoIosArrowBack />
        </button>
        <span>{`${displaySlideNumber}/${images.length}`}</span>
        <button onClick={() => moveSlide("next")}>
          <IoIosArrowForward />
        </button>
      </ButtonUI>
    </SliderContainer>
  );
}

function Projects() {
  const navigate = useNavigate();
  const PrevBtn = () => {
    navigate("/skills");
  };
  return (
    <div>
      <Header />
      <PrevPage onClick={PrevBtn}>
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
    </div>
  );
}

export default Projects;
