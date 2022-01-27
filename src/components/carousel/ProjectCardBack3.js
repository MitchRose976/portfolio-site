import React, { useState } from "react";
import styled from "styled-components";
//import Container from "../Container";
import Wrapper from "../UI/Wrapper";
//import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import InfoButton from "./InfoButton";

//import Wrapper from "./Wrapper";
import { FaArrowLeft } from "react-icons/fa";
import ProjectLabel from "./ProjectLabel";

const ImageCardBack = ({ isFlipped, flipCard }) => {
  
  const handleFlip = () => {
    flipCard(!isFlipped);
  }

  return (
    <Wrapper
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      className="cardBack"
      backgroundColor="white"
      borderRadius="20px"
      boxShadow="0 0 5rem rem black"
    >
      {/* Back Side */}
      <ProjectLabel
        display="inline-block"
        height="80%"
        lineHeight="3"
        margin="1.5rem 1rem 3rem 1rem"
        overflow="auto"
        textOverflow="ellipsis"
      >
        <ProjectDescription>
          This is a console application I built using C++. This project was a huge learning experience for me because prior to using C++, I worked with JavaScript. C++ is a lower level language that requires a lot more attention to detail. By doing this project, I learned very important concepts about Object Oriented Programming, how to implement modular design (which I now use in React), how to work with pointers and references, class design and inheritance, and how to use dynamic memory allocation. The Library is built using a database which in this case is a .txt file. I overloaded the insertion and extraction operators to read and write to the database and used dynamic memory allocation to add, remove, check out, and return a book.
            <br></br>
        <ProjectLink href="https://github.com/MitchRose976/Library-Database">See here!</ProjectLink> 
        </ProjectDescription>
      </ProjectLabel>
      <InfoButton
        position="absolute"
        margin="0 0 10px 0"
        bottom="0"
        textAlign="center"
        // The state is passed down from ProjectCard.js to this file and this button will change the state of the flip variable used inside the isFlipped property that is attached to the ProjectCardFront and ProjectCardBack
        onClick={handleFlip}
      >
        <FaArrowLeft style={{ backgroundColor: "rgba(66, 16, 106, 0.01)" }} />{" "}
        Back{" "}
      </InfoButton>
    </Wrapper>
  );
};

const ProjectLink = styled.a`
    background-color: white;
    color: var(--aqua);
    font-size: 2rem;
`

export default ImageCardBack;