import React, { useState } from "react";
import ProjectCardFront3 from "./ProjectCardFront3";
import ProjectCardBack3 from "./ProjectCardBack3";
// import Wrapper from "../UI/Wrapper";

function ProjectCard3() {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`project-card ${flip ? "flip" : ""}`}>
        <ProjectCardFront3 flipCard={setFlip} isFlipped={flip} />
        <ProjectCardBack3 flipCard={setFlip} isFlipped={flip} />
    </div>
  );
}

export default ProjectCard3;
