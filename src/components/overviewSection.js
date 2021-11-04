import React from "react"

import SectionHeading from "./sectionHeading"

const OverviewSection = ({ content, children, heading }) => {
    let overlay = { backgroundImage: `url(${ content.dustOverlayThree })` }

    return (
        <section id="overview-section" className="flex flex-col middle-gradient border-t-4 border-white border-dashed border-opacity-75">
            <div className="h-full flex flex-col bg-cover bg-opacity-50 bg-no-repeat bg-center" style={ overlay }>
                <SectionHeading text={ heading } />
                { children }
            </div>
        </section>
    )
}

export default OverviewSection