import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import ProjectLabel from "./ProjectLabel";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
//import Wrapper from "./Wrapper";
import InfoButton from "./InfoButton";
import Pic from "../../images/pic1.jpg";
import { FaArrowRight } from "react-icons/fa";
import Wrapper from "./Wrapper";

const ImageCardFront = () => {
  return (
    //   onclick ={() => setFlip(!flip)};
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
        <InfoButton>
          More Info{" "}
          <FaArrowRight
            style={{ backgroundColor: "rgba(66, 16, 106, 0.01)" }}
          />
        </InfoButton>
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
