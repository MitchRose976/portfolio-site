import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";

const BootstrapCarousel = () => {

  const projects = [
    { name: "NHL Live Game Tracker", url: "https://61f0a15abd73ae0008b857d6--elastic-aryabhata-ede838.netlify.app/", image: "../../images/nhl-logo.jpg" },
    { name: "C++ Library Application", url: "https://61f0a15abd73ae0008b857d6--elastic-aryabhata-ede838.netlify.app/", image: "../../images/Library.jpg" },
    { name: "Warhammer 40k Army List Builder", url: "https://61f0acbd52b0d6376085317c--loving-volhard-3f5710.netlify.app/", image: "../../images/ImperialAquila.jpg" }
  ]

  return (
    <Carousel>
      <Carousel.Item>
        <ProjectCard2 />
      </Carousel.Item>
      <Carousel.Item>
        <ProjectCard1 />
      </Carousel.Item>
      <Carousel.Item>
        <ProjectCard3 />
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
