import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import ProjectLabel from "./ProjectLabel";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
//import Wrapper from "./Wrapper";
//import InfoButton from "./InfoButton";
import Pic from "../../images/pic1.jpg";
import { FaArrowRight, FaLeaf } from "react-icons/fa";
import Wrapper from "./Wrapper";
import '../../App.css'

// I have a UI card with 2 sides
// I want to keep the first side displayed until the user clicks the button
// I want to have a state that controls the flip status of the card
// On the click of the button, the state will change and the card will flip
// this means that I need a container that will conditionally render the front or back of the card depending on the state of flip
// The flip state must be passed to the component that conditionally renders it
// The flip animation must be done through a class that I can add to each component but I do not want the animation to start onload or when the carousel is changed. Only upon the first change of state.

const ImageCardFront = () => {

  const [flip, setFlip] = useState(false);

  // const flipFront = () => {
  //   setFlip(!flip);
  //   if (flip) {
  //     // flip to front if true
  //   } else {
  //     // flip to front if false
  //   }
  // }

  

  return (
    <Wrapper className={`cardFront ${flip ? 'flipFront' : ''}`}>
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
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectDescription>
          This is a project about my favourite tabletop strategy game
        </ProjectDescription>
        <button className="flipButton " onClick={() => setFlip(!flip)}>
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

export default ImageCardFront;
