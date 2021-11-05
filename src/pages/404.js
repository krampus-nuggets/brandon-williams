import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/globals/layout"
import InnerSection from "../components/globals/innerSection"
import HeroHeading from "../components/hero/heroHeading"

const NotFoundPage = ({ data }) => {
	const footerObject = data.main.edges[3].node.frontmatter
	const bgVideo = data.main.edges[6].node.frontmatter.backgroundVideo

	return (
		<Layout content={ footerObject }>
			{ console.log(bgVideo) }
			<section id="missing-section" className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${ bgVideo })` }}>
				<InnerSection>
					<HeroHeading headingOne={ "OOPS" } headingTwo={ "ERROR 404" } headingThree={ "PAGE DOES NOT EXIST" } />
				</InnerSection>
			</section>
		</Layout>
	)
}

export default NotFoundPage

export const missingQuery = graphql `
	{
		main: allMarkdownRemark {
			edges {
				node {
					frontmatter {
						instagramIcon
						githubIcon
						linkedinIcon
						backgroundVideo
					}
				}
			}
		}
  	}
`
