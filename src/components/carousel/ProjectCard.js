import React, { useState } from "react";
import ProjectCardFront from "./ProjectCardFront"
import ProjectCardBack from "./ProjectCardBack"
import Wrapper from "../UI/Wrapper";

function ProjectCard() {

    const [flip, setFlip] = useState(false);

    return (
        <Wrapper
        height="80%"
        display="flex"
        >
        {!flip ? <ProjectCardBack/> : <ProjectCardFront/>} 
        </Wrapper>    
    )
}

export default ProjectCard;