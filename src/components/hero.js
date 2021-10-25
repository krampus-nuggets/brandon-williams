import React from "react"
import HeroHeading from "./heroHeading"
import HeroOverlay from "./heroOverlay"
import InnerSection from "./innerSection"

const Hero = ({ content }) => {
    const { frontmatter } = content;
    return (
        <section id="home-hero" className="section bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${ frontmatter.backgroundVideo })` }}>
            
        </section>
    )
}

export default Hero