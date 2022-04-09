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
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    `gatsby-plugin-image`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: "blurred",
          quality: 60,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typegen`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
