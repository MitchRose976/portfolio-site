import React from "react";
import styled from "styled-components";
import backgroundImg from "./coding.jpeg";

const AboutBackground = () => {
  return <BackgroundImage src={backgroundImg} />;
};

const BackgroundImage = styled.img`
  object-fit: cover;
  width: auto;
`;

export default AboutBackground;
