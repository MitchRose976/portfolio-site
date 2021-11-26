import React, { useState } from "react";
import ImageCardBack from "./ImageCardBack";
import ImageCardFront from "./ImageCardFront";
// import styled from "styled-components";
// import Container from "../Container";
// import ProjectTitle from "./ProjectTitle";
// import ProjectDescription from "./ProjectDescription";
//import Wrapper from "./Wrapper";
import Container from "../Container";
// import InfoButton from "./InfoButton";
// import Pic from "../../images/pic1.jpg";
// import { FaArrowRight } from "react-icons/fa";

const ImageCard = () => {

    const [flip, setFlip] = useState(false);

    const flipSwitch = () => {
        flip ? setFlip(true) : setFlip(false);
    }

  return (
    //   onclick ={() => setFlip(!flip)}; 
    <Container height="100%" width="100%">
      {flip ? (<ImageCardFront/>) : (<ImageCardBack/>)}
    </Container>
  );
};

// To flip card
/*
transform-style: preserve-3d;
transform: perspective(1000px) rotateY(--rotate-y, 0));
transition: 150ms;

on Button:
  --rotate-y: 180deg;
*/

export default ImageCard;
