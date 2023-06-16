/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Harnish Mistry`,
    description: `Boring blog that I might occasionally use to document the random stuff
    I might learn.`,
    twitterUsername: `@harrnish`,
    siteUrl: `https://www.harrnish.com`,
  },
  plugins: [
    {
      resolve: "@vercel/gatsby-plugin-vercel-analytics",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/siteicon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
        jsFrontmatterEngine: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
