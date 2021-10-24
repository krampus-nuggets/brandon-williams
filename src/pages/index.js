import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"

const IndexPage = ({ data }) => {
	return (
		<Layout content={data.hero.edges[0].node}>
			<Hero content={data.hero.edges[0].node} class="steve" />
			<Section content={data.hero.edges[0].node} heading="THE BRIEF" gradientType="bottom" dustOverlay="one" />
			<Section content={data.hero.edges[0].node} heading="COMPANIES & PROJECTS" gradientType="middle" dustOverlay="two" />
			<Section content={data.hero.edges[0].node} heading="OVERVIEW" gradientType="middle" dustOverlay="three" />
		</Layout>
	)
}

export default IndexPage

export const pageQuery = graphql`
	{
		hero: allMarkdownRemark {
		edges {
			node {
				frontmatter {
					blockOne
					blockTwo
					blockThree
					backgroundVideo
					portraitOverlay
					dustOverlayOne
					dustOverlayTwo
					dustOverlayThree
					instagramIcon
					githubIcon
					linkedinIcon
				}
			}
		}
		}
	}
`


