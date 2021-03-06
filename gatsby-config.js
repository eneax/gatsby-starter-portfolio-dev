module.exports = {
  siteMetadata: {
    title: 'Dev Portfolio',
    description: `A simple starter to get your dev portfolio up and running quickly with Gatsby`,
    author: `@eneax`,
    siteUrl: 'https://gatsby-dev-portfolio.netlify.app',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dev Portfolio`,
        short_name: `Dev`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#222`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
