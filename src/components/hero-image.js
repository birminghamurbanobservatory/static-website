import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const HeroImage = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bham-urban-obs-hero-pic.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
        </BackgroundImage>
      )
    }}
  />
)


export default HeroImage