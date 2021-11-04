import React from "react"
import HeroHeading from "./heroHeading"
import HeroOverlay from "./heroOverlay"
import InnerSection from "./innerSection"

const Hero = ({ content }) => {
    return (
        <section id="hero-section" className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${ content.backgroundVideo })` }}>
            <InnerSection>
                <HeroHeading headingOne={ content.heroTextOne } headingTwo={ content.heroTextTwo } headingThree={ content.heroTextThree } />
                <HeroOverlay content={ content } />
            </InnerSection>
        </section>
    )
}

export default Hero