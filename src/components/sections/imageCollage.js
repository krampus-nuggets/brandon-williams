import React from "react";
import CollageVideo from "../globals/collageVideo";

const ImageCollage = ({ content, imageOrientation }) => {
    const container = "h-full relative"

    if (imageOrientation === "landscape") {
        return (
            <div className={ container }>
                <CollageVideo source={ content.projectsCollageImageOne } height={ 400 } />
                <CollageVideo source={ content.projectsCollageImageTwo } height={ 400 } />
                <CollageVideo source={ content.projectsCollageImageThree } height={ 400 } />
            </div>
        )
    } else {
        return (
            <div className={ container }>
                <CollageVideo source={ content.briefCollageImageOne } height={ 250 } />
                <CollageVideo source={ content.briefCollageImageTwo } height={ 250 } />
                <CollageVideo source={ content.briefCollageImageThree } height={ 300 } />
            </div>
        )
    }
    
}

export default ImageCollage