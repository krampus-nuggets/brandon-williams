import React from "react"

const CollageVideo = ({ source, height, videoType }) => {
    const AspectRatio = () => {
        let ratioArray = {}
        let standard

        if (videoType === "portrait") {
            standard = 0.56
        } else {
            standard = 1.78
        }
        
        ratioArray["height"] = (height).toString() + "px"
        ratioArray["width"] = (Math.round(height / standard)).toString() + "px"
        
        return ratioArray
    }

    return (
        <video className="border-4 border-white" src={ source } height={ AspectRatio().height } width={ AspectRatio().width } autoPlay={ true } loop={ true } />
    )
}

export default CollageVideo