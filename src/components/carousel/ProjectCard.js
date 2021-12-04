import React, { useState } from "react";
import ProjectCardFront from "./ProjectCardFront";
import ProjectCardBack from "./ProjectCardBack";
// import Wrapper from "../UI/Wrapper";

function ProjectCard() {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`project-card ${flip ? "flip" : ""}`}>
        <ProjectCardFront flipCard={setFlip} isFlipped={flip} />
        <ProjectCardBack flipCard={setFlip} isFlipped={flip} />
    </div>
  );
}

export default ProjectCard;
