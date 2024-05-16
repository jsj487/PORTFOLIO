import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  ModalBackdrop,
  ModalImage,
  LeftArrow,
  RightArrow,
} from "../styles/Project_Styles";

const Modal = ({ onClose, images, imageUrl }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && imageUrl) {
      const index = images.indexOf(imageUrl);
      if (index !== -1) {
        setCurrentImageIndex(index);
      }
    }
  }, [images, imageUrl]);

  if (!images || !imageUrl) {
    console.error("Modal requires images and imageUrl to function properly.");
    return null;
  }

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
};

export default Modal;
