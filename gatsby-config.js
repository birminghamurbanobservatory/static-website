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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of the content container as this plugin uses this as the base for generating different widths of each image.
              maxWidth: 1200,
              // See here for more options: https://www.gatsbyjs.org/packages/gatsby-remark-images
              showCaptions: true,
              // You can set a wrapperStyle property here, although I've just ended up referencing the classes this package uses in global.css instead.
            }          
          }
        ]
      }
    },
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
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-149397126-1'
      }
    }
    // the following (optional) plugin below enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
