import React, { useState } from "react";
import ImageCardFront from "./ImageCardFront"
import ImageCardBack from "./ImageCardBack"

function ImageCard() {
    const [flip, setFlip] = useState(false);
    return (
        <div>
            {flip ? <ImageCardFront/> : <ImageCardBack/>}
        </div>
    )
}

export default ImageCard
