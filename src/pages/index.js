import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import InfoBlock from "../components/infoBlock"
import InfoGrid from "../components/infoGrid"
import InnerSection from "../components/innerSection"
import ImageCollage from "../components/imageCollage"

const IndexPage = ({ data }) => {
	const mainObject = data.hero.edges[0].node
	const brief = data.brief.edges[1].node

	const briefImages = [
		mainObject.frontmatter.briefImageOne,
		mainObject.frontmatter.briefImageTwo,
		mainObject.frontmatter.briefImageThree
	]

	const companiesImages = [
		mainObject.frontmatter.companiesImageOne,
		mainObject.frontmatter.companiesImageTwo,
		mainObject.frontmatter.companiesImageThree
	]

	return (
		<Layout content={mainObject}>
			<Hero content={mainObject} class="steve" />
			<Section content={mainObject} heading="THE BRIEF" gradientType="bottom" dustOverlay="one">
				<InnerSection>
					<InfoGrid>
						<InfoBlock heading={ false }>
							{ brief.frontmatter.introLine }<span role="img" aria-label="emoji">👋🏾</span>
							<br /> <br />
							{ brief.frontmatter.paragraphOne }
							<br /> <br />
							{ brief.frontmatter.paragraphTwo }
							<br /> <br />
							{ brief.frontmatter.endNote }<span role="img" aria-label="emoji">✌🏾</span>
						</InfoBlock>
						<ImageCollage imageArray={ briefImages } />
					</InfoGrid>
				</InnerSection>
			</Section>
			<Section content={mainObject} heading="COMPANIES &amp; PROJECTS" gradientType="middle" dustOverlay="two">
				Boobs
			</Section>
			<Section content={mainObject} heading="OVERVIEW" gradientType="middle" dustOverlay="three">
				Boobs
			</Section>
		</Layout>
	)
}

export default IndexPage

export const mainQuery = graphql`
	{
		hero: allMarkdownRemark {
			edges {
				node {
					frontmatter {
						heroTextOne
						heroTextTwo
						heroTextThree
						backgroundVideo
						portraitOverlay
						dustOverlayOne
						dustOverlayTwo
						dustOverlayThree
						instagramIcon
						githubIcon
						linkedinIcon
						briefImageOne
						briefImageTwo
						briefImageThree
						companiesImageOne
						companiesImageTwo
						companiesImageThree
					}
				}
			}
		}
		brief: allMarkdownRemark {
			edges {
				node {
					frontmatter {
						introLine
						paragraphOne
						paragraphTwo
						endNote
					}
				}
			}
		}
	}
`
