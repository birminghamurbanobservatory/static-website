import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const UkcricLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ukcric-logo.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  // Because we know the size we want we can used fixed not fluid.
  return <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="UKCRIC logo" />
}

export default UkcricLogo
