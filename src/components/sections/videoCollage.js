import React from "react";

const VideoCollage = ({ source, size }) => {
    return (
        <div className="h-full relative">
            <div className="h-full flex justify-center items-center">
                <video className="m-0 video-collage" src={ source } height={ size } width={ size } muted={ true } loop={ true } />
            </div>
        </div>
    )
}

export default VideoCollage