import React, { useState } from "react";
import ProjectCardFront from "./ProjectCardFront"
import ProjectCardBack from "./ProjectCardBack"
import Wrapper from "../UI/Wrapper";

function ImageCard() {
    return (
        <Wrapper
        height="80%"
        widd
        >
            <ProjectCardFront/>
            <ProjectCardBack/>
        </Wrapper>    
    )
}

export default ImageCard