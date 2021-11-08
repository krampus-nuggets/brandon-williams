import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/globals/layout"
import Hero from "../components/hero/hero"
import Section from "../components/globals/section"
import InfoBlock from "../components/sections/infoBlock"
import InfoGrid from "../components/sections/infoGrid"
import InnerSection from "../components/globals/innerSection"
import ProjectGrid from "../components/sections/projectGrid"
import LogoGrid from "../components/sections/logoGrid"
import OverviewGrid from "../components/sections/overviewGrid"
import OverviewInfoContainer from "../components/sections/overviewInfoContainer"
import OverviewInfoBlock from "../components/sections/overviewInfoBlock"
import OverviewSection from "../components/sections/overviewSection"
import VideoCollage from "../components/sections/videoCollage"
import TriggerVideo from "../components/globals/triggerVideo"
import ContactBubble from "../components/globals/contactBubble"

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
	const yamlObject = data.overview.edges[0].node

	return (
		<Layout content={ mainObject }>
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
						<VideoCollage source={ yamlObject.videoCollage[0] } size="350px" />
					</InfoGrid>
				</InnerSection>
			</Section>
			<Section content={ mainObject } heading="COMPANIES &amp; PROJECTS" gradientType="middle" dustOverlay="two" sectionID="normal-section">
				<InnerSection sectionType="flex">
					<ProjectGrid>
						<LogoGrid content={ mainObject } />
						<VideoCollage source={ yamlObject.videoCollage[1] } size="350px" />
					</ProjectGrid>
				</InnerSection>
			</Section>
			<OverviewSection content={ mainObject } heading="OVERVIEW" gradientType="middle" dustOverlay="three">
				<InnerSection>
					<OverviewGrid sectionType="flex">
						<OverviewInfoContainer>
							<OverviewInfoBlock headingText="SPOKEN LANGUAGES">
								{ yamlObject.spokenLanguages }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="MY TOOLSET">
								{ yamlObject.myToolset }
							</OverviewInfoBlock>
						</OverviewInfoContainer>
						<OverviewInfoContainer>
							<OverviewInfoBlock headingText="WORKING">
								{ yamlObject.workingOS }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="EXPERIENCE BREAKDOWN">
								{ yamlObject.experienceBreakdown }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="HOBBIES &amp; OTHER STUFF">
								{ yamlObject.hobbiesStuff }
							</OverviewInfoBlock>
						</OverviewInfoContainer>
						<OverviewInfoContainer>
							<OverviewInfoBlock headingText="PREVIOUS ROLES">
								{ yamlObject.previousRoles }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="CLOUD ENVIRONMENTS">
								{ yamlObject.cloudEnvironments }
							</OverviewInfoBlock>
							<OverviewInfoBlock headingText="MAIN RESPONSIBILITIES">
								{ yamlObject.mainResponsibilities }
							</OverviewInfoBlock>
						</OverviewInfoContainer>
					</OverviewGrid>
				</InnerSection>
			</OverviewSection>
			<TriggerVideo />
			<ContactBubble />
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
					videoCollage
				}
			}
		}
  	}
`
