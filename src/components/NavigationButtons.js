import styled, { keyframes } from "styled-components";

const RightAnimation = keyframes`
  0%, 100% { right: 40px; }
  50% { right: 30px; }
`;

const LeftAnimation = keyframes`
  0%, 100% { left: 40px; }
  50% { left: 30px; }
`;

export const NextPage = styled.div`
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const PrevPage = styled.div`
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

  @media (max-width: 1024px) {
    display: none;
  }
`;
