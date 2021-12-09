import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjectCard from "./ProjectCard";

const BootstrapCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ProjectCard />
      </Carousel.Item>
      <Carousel.Item>
        <ProjectCard />
      </Carousel.Item>
      <Carousel.Item>
        <ProjectCard />
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
