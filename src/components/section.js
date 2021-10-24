import React from "react"

const Section = ({ content, heading, gradientType, dustOverlay }) => {
    const { frontmatter } = content;
    var overlay

    if (dustOverlay === "one") {
        overlay = { backgroundImage: `url(${ frontmatter.dustOverlayOne })` }
    } else if (dustOverlay === "two") {
        overlay = { backgroundImage: `url(${ frontmatter.dustOverlayTwo })` }
    } else {
        overlay = { backgroundImage: `url(${ frontmatter.dustOverlayThree })` }
    }

    if (gradientType === "middle") {
        return (
            <section className="section middle-gradient border-t-4 border-white border-dashed border-opacity-75">
                <div className="h-full bg-cover bg-opacity-50 bg-no-repeat bg-center" style={ overlay }>
                    { heading }
                </div>
            </section>
        )
    } else {
        return (
            <section className="section bottom-gradient border-t-4 border-white border-dashed border-opacity-75">
                <div className="h-full bg-cover bg-opacity-50 bg-no-repeat bg-center" style={ overlay }>
                    { heading }
                </div>
            </section>
        )
    }
}

export default Section