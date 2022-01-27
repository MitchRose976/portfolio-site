import React, { useState } from "react";
import ProjectCardFront2 from "./ProjectCardFront2";
import ProjectCardBack2 from "./ProjectCardBack2";
// import Wrapper from "../UI/Wrapper";

function ProjectCard2() {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`project-card ${flip ? "flip" : ""}`}>
        <ProjectCardFront2 flipCard={setFlip} isFlipped={flip} />
        <ProjectCardBack2 flipCard={setFlip} isFlipped={flip} />
    </div>
  );
}

export default ProjectCard2;
