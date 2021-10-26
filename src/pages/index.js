import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import InfoBlock from "../components/infoBlock"
import InfoGrid from "../components/infoGrid"
import InnerSection from "../components/innerSection"
import ImageCollage from "../components/imageCollage"
import ProjectGrid from "../components/projectGrid"
import LogoGrid from "../components/logoGrid"

const IndexPage = ({ data }) => {
	const mainObject = data.main.edges[0].node
	const briefObject = data.brief.edges[1].node
	const companyLogosObject = data.companyLogos.edges[2].node
	const companyURLsObject = data.companyURLs.edges[2].node

	const briefArtImages = [
		mainObject.frontmatter.briefImageOne,
		mainObject.frontmatter.briefImageTwo,
		mainObject.frontmatter.briefImageThree
	]

	const companyArtImages = [
		mainObject.frontmatter.companiesImageOne,
		mainObject.frontmatter.companiesImageTwo,
		mainObject.frontmatter.companiesImageThree
	]

	const companyLogos = [
		companyLogosObject.frontmatter.clover,
		companyLogosObject.frontmatter.allanGray,
		companyLogosObject.frontmatter.coronation,
		companyLogosObject.frontmatter.aiimAfrica,
		companyLogosObject.frontmatter.eurochem,
		companyLogosObject.frontmatter.costain,
		companyLogosObject.frontmatter.pimpMyBook,
		companyLogosObject.frontmatter.askthuto,
		companyLogosObject.frontmatter.bluegrassDigital
	]

	const companyURLs = [
		companyURLsObject.frontmatter.cloverURL,
		companyURLsObject.frontmatter.allanGrayURL,
		companyURLsObject.frontmatter.coronationURL,
		companyURLsObject.frontmatter.aiimAfricaURL,
		companyURLsObject.frontmatter.eurochemURL,
		companyURLsObject.frontmatter.costainURL,
		companyURLsObject.frontmatter.pimpMyBookURL,
		companyURLsObject.frontmatter.askthutoURL,
		companyURLsObject.frontmatter.bluegrassDigitalURL
	]

	return (
		<Layout content={mainObject}>
			<Hero content={mainObject} class="steve" />
			<Section content={mainObject} heading="THE BRIEF" gradientType="bottom" dustOverlay="one">
				<InnerSection>
					<InfoGrid>
						<InfoBlock heading={ false }>
							{ briefObject.frontmatter.introLine }<span role="img" aria-label="emoji">👋🏾</span>
							<br /> <br />
							{ briefObject.frontmatter.paragraphOne }
							<br /> <br />
							{ briefObject.frontmatter.paragraphTwo }
							<br /> <br />
							{ briefObject.frontmatter.endNote }<span role="img" aria-label="emoji">✌🏾</span>
						</InfoBlock>
						<ImageCollage imageArray={ briefArtImages } />
					</InfoGrid>
				</InnerSection>
			</Section>
			<Section content={mainObject} heading="COMPANIES &amp; PROJECTS" gradientType="middle" dustOverlay="two">
				<InnerSection>
					<ProjectGrid>
						<LogoGrid imageArray={ companyLogos } companyURLArray={ companyURLs } />
						<ImageCollage imageArray={ companyArtImages } />
					</ProjectGrid>
				</InnerSection>
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
		main: allMarkdownRemark {
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
		companyLogos: allMarkdownRemark {
			edges {
				node {
					frontmatter {
						pimpMyBook
						askthuto
						bluegrassDigital
						clover
						allanGray
						coronation
						aiimAfrica
						eurochem
						costain
					}
				}
			}
		}
		companyURLs: allMarkdownRemark {
			edges {
				node {
					frontmatter {
						pimpMyBookURL
						askthutoURL
						bluegrassDigitalURL
						cloverURL
						allanGrayURL
						coronationURL
						aiimAfricaURL
						eurochemURL
						costainURL
					}
				}
			}
		}
	}
`
