import React from "react"

const HeroOverlay = ({ content }) => {
    return (
        <div className="hidden xl:block h-full w-full">
            <img className="hero-overlay h-4/5" src={ content.portraitOverlay } alt="portrait-overlay" />
        </div>
    )
}

export default HeroOverlay