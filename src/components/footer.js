import React from "react"
import { Link } from "gatsby"

const Footer = ({ content }) => {
	const { frontmatter } = content;
	return (
		<section className="h-14 bg-black">
			<div className="h-full max-w-screen-2xl mx-auto">
				<div className="grid grid-cols-2 w-full h-full">
					<div className="mt-4 text-right">
						<Link className="border-r-2" to="/" aria-label="home">
							<span className="text-xs p-1 mt-2 mr-2 sm:text-base text-white">
								By Brandon Williams <span role="img" aria-label="emoji">✌🏾</span>
							</span>
						</Link>
					</div>
					<div className="mt-3">
						<div className="ml-4 grid grid-cols-3 w-32 h-full">
							<div>
								<img className="h-8" src={frontmatter.instagramIcon} alt="instagram-icon" />
							</div>
							<div>
								<img className="h-8" src={frontmatter.githubIcon} alt="instagram-icon" />
							</div>
							<div>
								<img className="h-8" src={frontmatter.linkedinIcon} alt="instagram-icon" />
							</div>
						</div>
					</div>
				</div> 
			</div>
		</section>
	)
}

export default Footer