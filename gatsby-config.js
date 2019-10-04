module.exports = {
  siteMetadata: {
    title: `Birmingham Urban Observatory`,
    description: `The Birmingham Urban Observatory was first created almost a decade ago as the Birmingham Urban Climate Laboratory / Open Air Laboratory.  The Urban Observatory initiative brings the facility into the internet of things era and expands the capabilities to monitor not just weather, climate and air quality, but to provide insights into the performance of green, grey and buried infrastructure across the city. Of particular interest is the influence of urban systems, and local disruptions to these systems (such as construction sites or streetworks), on urban biodiversity.  It is anticipated that these monitoring systems will inform city planners about how to ‘green our cities’ to best effect for both citizens and the infrastructure systems that support their daily lives.`,
    author: `Birmingham Urban Observatory Team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-blog-posts`,
        path: `${__dirname}/src/markdown-blog-posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Birmingham Urban Observatory`,
        short_name: `Bham Urban Obs`,
        start_url: `/`,
        background_color: `#0A888C`,
        theme_color: `#0A888C`,
        display: `minimal-ui`,
        icon: `src/images/logos/UO-logo-circle.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
