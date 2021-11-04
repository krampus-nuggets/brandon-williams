module.exports = {
	siteMetadata: {
		title: `Brandon WIlliams`,
		description: `A portfolio site created for documenting all there is to know.`,
		author: `@krampus-nuggets`,
		siteUrl: `https://github.com/krampus-nuggets`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
			},
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-transformer-sharp`,
			icon: `./src/img/wma-icon.png`
		},
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/data`,
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `brandon-williams`,
				short_name: `bwilliams`,
				start_url: `/`,
				background_color: `#663399`,
				display: `minimal-ui`,
				icon: `./src/img/wma-icon.png`,
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-postcss`,
	],
}
