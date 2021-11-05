import React from "react";

const ImageCollage = ({ content, imageOrientation }) => {
    if (imageOrientation === "landscape") {
        return (
            <div className="relative">
                <img className="h-32 md:h-40 border-4 border-white" src={ content.projectsCollageImageOne } alt="collage-item-1" />
                <img className="h-36 md:h-44 border-4 border-white" src={ content.projectsCollageImageTwo } alt="collage-item-2" />
                <img className="h-32 md:h-40 border-4 border-white" src={ content.projectsCollageImageThree } alt="collage-item-3" />
            </div>
        )
    } else {
        return (
            <div className="relative">
                <img className="h-40 md:h-48 border-4 border-white" src={ content.briefCollageImageOne } alt="collage-item-1" />
                <img className="h-40 md:h-48 border-4 border-white" src={ content.briefCollageImageTwo } alt="collage-item-2" />
                <img className="h-32 md:h-40 border-4 border-white" src={ content.briefCollageImageThree } alt="collage-item-3" />
            </div>
        )
    }
    
}

export default ImageCollage