/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'HimerAzione',
    description: 'description to add according to what the site is talking about',
    author: 'Fripp',
    keywords: `Termini, Imerese, Sicilia, blog, città`,
    url:"https:// quella del sito",
    image: `src/images/home/termini.jpg`
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
