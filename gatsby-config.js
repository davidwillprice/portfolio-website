module.exports = {
	siteMetadata: {
		title: `David Price Portfolio website`,
		description: `Portfolio website for a Bristol based web developer`,
		author: `David Price`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`quicksand`,
					`300,500,700` // you can also specify font weights and styles
				],
				display: 'swap'
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `GatsbyJS`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#6b37bf`,
				theme_color: `#6b37bf`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `src/images/icon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg'
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`
	]
};
