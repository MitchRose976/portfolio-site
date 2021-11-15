import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Pic from "./pic1.jpg";

const ImageCard = () => {
  return (
    <Wrapper>
      {/* Front Side */}
      <Container
        height="70%"
        width="99%"
        borderRadius="20px"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        padding="1px"
        backgroundColor="white"
      >
        <ProjectImage src={Pic} />
      </Container>
      <ProjectLabel>
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectDescription>
          This is a project about my favourite tabletop strategy game
        </ProjectDescription>
        <InfoButton>More Info</InfoButton>
      </ProjectLabel>
      {/* Back Side */}
      <Container display="none">
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectDescription>
          This is a project about my favourite tabletop strategy game
        </ProjectDescription>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70%;
  width: 50%;
  position: relative;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1rem 1rem 1rem black;
  @media only screen and (max-width: 1024px) {
    height: 90%;
    width: 60%;
  }
  @media only screen and (max-width: 500px) {
    height: 95%;
    width: 65%;
  }
`;

const ProjectImage = styled.img`
  width: 97%;
  height: 97%;
  border-radius: 20px;
  object-fit: cover;
  z-index: 10;
`;

const ProjectLabel = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background-color: white;
  color: black;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @media (max-width: 1024px) {
    line-height: 2;
  }
`;

const ProjectTitle = styled.h2`
  margin: 0 auto;
  background-color: white;
  font-size: 2rem;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  margin: 0 auto;
  background-color: white;
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const InfoButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: white;
  ${"" /* border: 2px solid #9C0D38; */}
  border: 2px solid #42106A;
  color: black;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition-property: background;
  transition-duration: 500ms;
  &:hover {
    background: rgba(66, 16, 106, 0.8);
    color: white;
  }
`;

export default ImageCard;
