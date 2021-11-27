import React, { useState } from "react";
// import styled from "styled-components";
//import Container from "../Container";
import Wrapper from "../UI/Wrapper";
//import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import InfoButton from "./InfoButton";

//import Wrapper from "./Wrapper";
import { FaArrowLeft } from "react-icons/fa";
import ProjectLabel from "./ProjectLabel";

const ImageCardBack = () => {
  const [flip, setFlip] = useState(false);

  return (
    <Wrapper
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="80%"
      width="50%"
      className={`cardBack ${flip ? "flipBack" : ""}`}
    >
      {/* Back Side */}
      <ProjectLabel
        display="inline-block"
        width="90%"
        height="85%"
        lineHeight="3"
        margin="1.5rem 1rem 3rem 1rem"
        overflow="auto"
        textOverflow="ellipsis"
      >
        <ProjectDescription>
          This is a project about my favourite tabletop strategy game. In the
          game, each player assembles an army of miniature models to battle
          their opponents. Each game is set to a certain points limit (ex. 2000
          points) and every model has a points value along with additonal
          upgrades that cost additonal points. Calculating all of this before a
          game is time intensive. My app allows a player to assemble their army
          list by simply selecting a unit and adding any upgrades they wish. I
          made use of HTML, CSS and JavaScript to build a database in the form
          of an array of objects to represent each model and its upgrades. When
          a user adds a unit to their army list, it will be rendered with the
          DOM and sorted in to its unit type category in a nicely styled list
          that the user can print.
        </ProjectDescription>
      </ProjectLabel>
      <InfoButton
        position="absolute"
        margin="0 0 10px 0"
        bottom="0"
        textAlign="center"
        onClick={() => setFlip(!flip)}
      >
        <FaArrowLeft style={{ backgroundColor: "rgba(66, 16, 106, 0.01)" }} />{" "}
        Back{" "}
      </InfoButton>
    </Wrapper>
  );
};

export default ImageCardBack;