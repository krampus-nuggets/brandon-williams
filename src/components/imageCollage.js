import React from "react";

const ImageCollage = ({ imageArray }) => {

    return (
        <div className="relative">
            <img className="h-36 border-4 border-white" src={ imageArray[0] } alt="collage-item-1" />
            <img className="h-40 border-4 border-white" src={ imageArray[1] } alt="collage-item-2" />
            <img className="h-32 border-4 border-white" src={ imageArray[2] } alt="collage-item-3" />
        </div>
    )
}

export default ImageCollage