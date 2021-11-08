import { useEffect } from "react";

const TriggerVideo = () => {
    useEffect(() => {
        const checkClasses = document.getElementsByClassName("video-collage")
        
        for (let i = 0; i < checkClasses.length; i++) {
            checkClasses[i].play()
        }
    });
    return (true)
}

export default TriggerVideo