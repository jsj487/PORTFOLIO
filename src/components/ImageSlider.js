import React, { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  SliderContainer,
  ImagesContainer,
  Image,
  ButtonUI,
} from "../styles/Project_Styles";
import Modal from "./Modal";

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [displaySlideNumber, setDisplaySlideNumber] = useState(1);
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
};

export default ImageSlider;
