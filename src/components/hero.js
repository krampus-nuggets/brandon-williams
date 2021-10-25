import React from "react"
import HeroHeading from "./heroHeading"
import HeroOverlay from "./heroOverlay"
import InnerSection from "./innerSection"

const Hero = ({ content }) => {
    const { frontmatter } = content;
    return (
        <section id="hero-section" className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${ frontmatter.backgroundVideo })` }}>
            <InnerSection>
                <HeroHeading headingOne={ frontmatter.heroTextOne } headingTwo={ frontmatter.heroTextTwo } headingThree={ frontmatter.heroTextThree } />
                <HeroOverlay content={ content } />
            </InnerSection>
        </section>
    )
}

export default Hero