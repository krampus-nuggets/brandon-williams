import React from "react"
import SectionHeading from "./sectionHeading"

const Section = ({ children, content, heading, gradientType, dustOverlay }) => {
    var overlay

    if (dustOverlay === "one") {
        overlay = { backgroundImage: `url(${ content.dustOverlayOne })` }
    } else if (dustOverlay === "two") {
        overlay = { backgroundImage: `url(${ content.dustOverlayTwo })` }
    } else {
        overlay = { backgroundImage: `url(${ content.dustOverlayThree })` }
    }

    if (gradientType === "middle") {
        return (
            <section className="section relative middle-gradient border-t-4 border-white border-dashed border-opacity-75">
                <div className="h-full bg-cover bg-opacity-50 bg-no-repeat bg-center" style={ overlay }>
                    <SectionHeading text={ heading } />
                    { children }
                </div>
            </section>
        )
    } else {
        return (
            <section className="section relative bottom-gradient border-t-4 border-white border-dashed border-opacity-75">
                <div className="h-full bg-cover bg-opacity-50 bg-no-repeat bg-center" style={ overlay }>
                    <SectionHeading text={ heading } />
                    { children }
                </div>
            </section>
        )
    }
}

export default Section