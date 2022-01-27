import React, { useState } from "react";
import ProjectCardFront1 from "./ProjectCardFront1";
import ProjectCardBack1 from "./ProjectCardBack1";
// import Wrapper from "../UI/Wrapper";

function ProjectCard1() {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`project-card ${flip ? "flip" : ""}`}>
        <ProjectCardFront1 flipCard={setFlip} isFlipped={flip} />
        <ProjectCardBack1 flipCard={setFlip} isFlipped={flip} />
    </div>
  );
}

export default ProjectCard1;
