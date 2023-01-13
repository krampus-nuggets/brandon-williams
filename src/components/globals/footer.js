import React from "react"
import { Link } from "gatsby"

const Footer = ({ content }) => {
	return (
		<section className="h-14 bg-black bottom-0">
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
								<a href="https://www.instagram.com/brandon_wma" target="_blank" rel="noreferrer">
									<img className="h-8" src={ content.instagramIcon } alt="instagram-icon" />
								</a>
							</div>
							<div>
								<a href="https://github.com/krampus-nuggets" target="_blank" rel="noreferrer">
									<img className="h-8" src={ content.githubIcon } alt="github-icon" />
								</a>
							</div>
							<div>
								<a href="https://www.linkedin.com/in/brandon-williams-wma" target="_blank" rel="noreferrer">
									<img className="h-8" src={ content.linkedinIcon } alt="linkedin-icon" />
								</a>
							</div>
						</div>
					</div>
				</div> 
			</div>
		</section>
	)
}

export default Footer