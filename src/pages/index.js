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
import OverviewGrid from "../components/overviewGrid"
import OverviewInfoContainer from "../components/overviewInfoContainer"
import OverviewInfoBlock from "../components/overviewInfoBlock"
import OverviewSection from "../components/overviewSection"

const keys = [
	"dustOverlayOne",
	"dustOverlayTwo",
	"dustOverlayThree",
	"instagramIcon",
	"githubIcon",
	"linkedinIcon",
	"introLine",
	"paragraphOne",
	"paragraphTwo",
	"endNote",
	"heroTextOne",
	"heroTextTwo",
	"heroTextThree",
	"backgroundVideo",
	"portraitOverlay",
	"pimpMyBook",
	"askthuto",
	"bluegrassDigital",
	"clover",
	"allanGray",
	"coronation",
	"aiimAfrica",
	"eurochem",
	"costain",
	"pimpMyBookURL",
	"askthutoURL",
	"bluegrassDigitalURL",
	"cloverURL",
	"allanGrayURL",
	"coronationURL",
	"aiimAfricaURL",
	"eurochemURL",
	"costainURL",
	"projectsCollageImageOne",
	"projectsCollageImageTwo",
	"projectsCollageImageThree",
	"briefCollageImageOne",
	"briefCollageImageTwo",
	"briefCollageImageThree"
]


const IndexPage = ({ data }) => {
	const constructObject = () => {
		var object = {}
		const edgeCount = (data.main.edges).length

		for (let i = 0; i < edgeCount; i++) {
			let node = data.main.edges[i].node.frontmatter

			for (let key in keys) {
				if (node.hasOwnProperty(keys[key])){
					if (node[keys[key]] === null) {
						continue
					} else {
						object[keys[key]] = node[keys[key]]
					}
				}
			}
		}
		return object
	}

	const mainObject = constructObject()

	return (
		<Layout content={ mainObject }>
			<Seo />
			<Hero content={ mainObject } />
			<Section content={ mainObject } heading="THE BRIEF" gradientType="bottom" dustOverlay="one" sectionID="normal-section">
				<InnerSection sectionType="flex">
					<InfoGrid>
						<InfoBlock>
							{ mainObject.introLine }<span role="img" aria-label="emoji">👋🏾</span>
							<br /> <br />
							{ mainObject.paragraphOne }
							<br /> <br />
							{ mainObject.paragraphTwo }
							<br /> <br />
							{ mainObject.endNote }<span role="img" aria-label="emoji">✌🏾</span>
						</InfoBlock>
						<ImageCollage content={ mainObject } />
					</InfoGrid>
				</InnerSection>
			</Section>
			<Section content={ mainObject } heading="COMPANIES &amp; PROJECTS" gradientType="middle" dustOverlay="two" sectionID="normal-section">
				<InnerSection sectionType="flex">
					<ProjectGrid>
						<LogoGrid content={ mainObject } />
						<ImageCollage content={ mainObject } imageOrientation="landscape" />
					</ProjectGrid>
				</InnerSection>
			</Section>
			<OverviewSection content={ mainObject } heading="OVERVIEW" gradientType="middle" dustOverlay="three">
				<InnerSection>
					<OverviewGrid sectionType="flex">
						<OverviewInfoContainer>
							<OverviewInfoBlock headingText="SPOKEN LANGUAGES">
								{ data.overview.edges[0].node.spokenLanguages }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="MY TOOLSET">
								{ data.overview.edges[0].node.myToolset }
							</OverviewInfoBlock>
						</OverviewInfoContainer>
						<OverviewInfoContainer>
							<OverviewInfoBlock headingText="WORKING">
								{ data.overview.edges[0].node.workingOS }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="EXPERIENCE BREAKDOWN">
								{ data.overview.edges[0].node.experienceBreakdown }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="HOBBIES &amp; OTHER STUFF">
								{ data.overview.edges[0].node.hobbiesStuff }
							</OverviewInfoBlock>
						</OverviewInfoContainer>
						<OverviewInfoContainer>
							<OverviewInfoBlock headingText="PREVIOUS ROLES">
								{ data.overview.edges[0].node.previousRoles }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="CLOUD ENVIRONMENTS">
								{ data.overview.edges[0].node.cloudEnvironments }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="MAIN RESPONSIBILITIES">
								{ data.overview.edges[0].node.mainResponsibilities }
							</OverviewInfoBlock>
						</OverviewInfoContainer>
					</OverviewGrid>
				</InnerSection>
			</OverviewSection>
		</Layout>
	)
}

export default IndexPage

export const mainQuery = graphql `
	{
		main: allMarkdownRemark {
			edges {
				node {
					frontmatter {
						dustOverlayOne
						dustOverlayTwo
						dustOverlayThree
						instagramIcon
						githubIcon
						linkedinIcon
						introLine
						paragraphOne
						paragraphTwo
						endNote
						heroTextOne
						heroTextTwo
						heroTextThree
						backgroundVideo
						portraitOverlay
						pimpMyBook
						askthuto
						bluegrassDigital
						clover
						allanGray
						coronation
						aiimAfrica
						eurochem
						costain
						pimpMyBookURL
						askthutoURL
						bluegrassDigitalURL
						cloverURL
						allanGrayURL
						coronationURL
						aiimAfricaURL
						eurochemURL
						costainURL
						projectsCollageImageOne
						projectsCollageImageTwo
						projectsCollageImageThree
						briefCollageImageOne
						briefCollageImageTwo
						briefCollageImageThree
					}
				}
			}
		}
		overview: allDataYaml {
			edges {
				node {
					previousRoles
					cloudEnvironments
					mainResponsibilities
					spokenLanguages
					myToolset
					workingOS
					experienceBreakdown
					hobbiesStuff
				}
			}
		}
  	}
`
