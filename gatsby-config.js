module.exports = {
  siteMetadata: {
    title: `Avocado Sushi du Village`,
    description: `Asian Fusion Restaurant`,
    author: `Meagan Butters`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,500,700`],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `289365524`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@images": "src/images",
          "@styles": "src/styles",
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `index`,
        path: `${__dirname}/src/images/index`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Avocado Sushi du Village`,
        short_name: `Avocado`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#a1a1a1`,
        display: `minimal-ui`,
        icon: ``, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
