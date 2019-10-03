import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const HeroSection = ({ className }) => (
  // Might be able to do this with useStaticQuery instead
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bham-urban-obs-hero-pic.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
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
          backgroundColor={`#138A8E`}
        >
        </BackgroundImage>
      )
    }}
  />
)


export default HeroSection