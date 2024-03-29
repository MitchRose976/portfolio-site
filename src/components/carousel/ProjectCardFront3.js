import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import ProjectLabel from "./ProjectLabel";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import Pic from "../../images/Library.jpg";
import { FaArrowRight, FaLeaf } from "react-icons/fa";
import Wrapper from "../UI/Wrapper";
import "../../App.css";

// I have a UI card with 2 sides
// I want to keep the first side displayed until the user clicks the button
// I want to have a state that controls the flip status of the card
// On the click of the button, the state will change and the card will flip
// this means that I need a container that will conditionally render the front or back of the card depending on the state of flip
// The flip state must be passed to the component that conditionally renders it
// The flip animation must be done through a class that I can add to each component but I do not want the animation to start onload or when the carousel is changed. Only upon the first change of state.

const ProjectCardFront = ({ isFlipped, flipCard }) => {

  const handleFlip = () => {
    flipCard(!isFlipped);
  }

  return (
    <Wrapper
      className="cardFront"
    >
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
        backfaceVisibility="hidden"
      >
        <ProjectImage src={Pic} />
      </Container>
      <ProjectLabel
        position="absolute"
        display="flex"
        width="100%"
        height="30%"
        bottom="0"
        left="0"
        right="0"
        lineHeight="2"
        borderBottomLeftRadius="20px"
        borderBottomRightRadius="20px"
      >
        <ProjectTitle>C++ Library Application</ProjectTitle>
        <ProjectDescription className="frontText">
          This is a Library database system I built using C++
          <br></br>
          <ProjectLink href="https://drive.google.com/file/d/1GWYJpogwbg1dk4FtvaArMlvAg8jc6Lw5/view?usp=sharing">Watch the walkthrough here</ProjectLink>
        </ProjectDescription>
        <button 
          className="flipButton" 
          // The state is passed down from ProjectCard.js to this file and this button will change the state of the flip variable used inside the isFlipped property that is attached to the ProjectCardFront and ProjectCardBack
          onClick={handleFlip}
        >
          More Info{" "}
          <FaArrowRight
            style={{ backgroundColor: "rgba(66, 16, 106, 0.01)" }}
          />
        </button>
      </ProjectLabel>
    </Wrapper>
  );
};

const ProjectImage = styled.img`
  width: 97%;
  height: 97%;
  border-radius: 20px;
  object-fit: cover;
  z-index: 10;
`;

const ProjectLink = styled.a`
    background-color: white;
    color: var(--aqua);
    font-size: 1rem;
`

export default ProjectCardFront;
