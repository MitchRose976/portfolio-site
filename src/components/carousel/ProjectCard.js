import React, { useState } from "react";
import ProjectCardFront from "./ProjectCardFront"
import ProjectCardBack from "./ProjectCardBack"

function ImageCard() {
    return (
        <div>
            <ProjectCardFront/>
            <ProjectCardBack/>
        </div>
    )
}

export default ImageCard
