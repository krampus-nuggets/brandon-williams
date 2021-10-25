import React from "react"
import { Link } from "gatsby"

const repoIcon = "https://res.cloudinary.com/wemakeart/image/upload/v1634962933/github/brandon-williams/icons/project-icon_cyxzcl.png"

const Header = () => {
	return (
		<section className="h-14 bg-black">
			<div className="h-full max-w-screen-2xl xl:max-w-screen-lg mx-auto">
				<div className="grid grid-cols-2 w-full h-full">
					<div className="mt-4">
						<Link to="/" aria-label="home">
							<span className="p-1 mt-2 ml-2 bg-white">
								BWILLIAMS
							</span>
						</Link>
					</div>
					<div className="mt-3">
						<Link to="https://github.com/krampus-nuggets/brandon-williams" aria-label="home">
							<img className="float-right mr-2 h-8" src={repoIcon} alt="project-repository-icon" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Header