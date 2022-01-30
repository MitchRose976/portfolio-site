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
          This is a full stack application I made using the MERN stack. This app tracks current NHL games being played and gives the user a live stats update showing them the score of the game, the lime left and the goals scored and which players scored them. You can also use this app to see league standings, team rosters with up to date stats for each player, and also the current league leaders for each statistic. This app was really fun for me to build because I am a huge hockey fan and I learned how to set up a server and a database using Node, Express, MongoDB, and Mongoose. This was also my first project using API's. I built this entire application using the data from the NHL API.
          <br></br>
          <ProjectLink href="https://elastic-aryabhata-ede838.netlify.app/">See Here!</ProjectLink>
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
    font-size: 1.5rem;
`

export default ImageCardBack;