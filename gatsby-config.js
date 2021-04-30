module.exports = {
  siteMetadata: {
    title: `David Price Portfolio website`,
    titleTemplate: "%s | David Price Web Design",
    description: `Portfolio website for a Bristol based Front End Web Developer`,
    author: `David Price`,
    image: "/src/images/icon.png",
    siteUrl: "https://www.davidwillprice.com",
    url: "https://www.davidwillprice.com",
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sitemap`,
    /*{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: "UA-179325070-1",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ["/preview/**", "/do-not-track/me/too/"],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Defers execution of google analytics script after page load
				defer: false,
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: "davidwillprice.com",
			}
		},*/
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `quicksand`,
          `300,500,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Price Portfolio`,
        short_name: `David Price Portfolio`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            "Piccadilly",
            "Source Sans Pro Light",
            "Source Sans Pro Semibold",
          ],
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
  ],
}
