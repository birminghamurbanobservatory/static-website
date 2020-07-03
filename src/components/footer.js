import { Link } from "gatsby"
import React from "react"
import packageJson from '../../package.json';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

// This component queries data with the useStaticQuery hook.
// See: https://www.gatsbyjs.org/docs/use-static-query/ for more info.
// It allows us to load the images (with the help of the gatsby-image plugin) from directly within this component, rather than having to pass the image data down from pages.

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      uobLogo: file(relativePath: { eq: "logos/uob-logo.png" }) {
        childImageSharp {
          fixed(height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      epsrcLogo: file(relativePath: { eq: "logos/epsrc-logo-white.png" }) {
        childImageSharp {
          fixed(height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ukcricLogo: file(relativePath: { eq: "logos/ukcric-logo.png" }) {
        childImageSharp {
          fixed(height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (

    <footer className="bg-teal-900 text-white">

      <div className="flex flex-wrap items-center justify-around">

        <p className="text-center m-2">
          <Link
            to="/contact/"
          >
            <FaEnvelope className="inline-block h-8 w-8 m-2" />
            Get in touch
          </Link>
        </p>
        
        <p className="text-center m-2">
          <a href="https://twitter.com/BhamUrbanObs">
            <FaTwitter className="inline-block h-8 w-8 m-2" />
            Follow Us
          </a>
        </p>
        
        <a href="https://www.birmingham.ac.uk" className="m-2">
          <Img fixed={data.uobLogo.childImageSharp.fixed} className="h-16" alt="UoB Logo"/>
        </a>

        <a href="https://epsrc.ukri.org/" className="m-2">
          <Img fixed={data.epsrcLogo.childImageSharp.fixed} className="h-16" alt="EPSRC Logo"/>
        </a>

        <a href="https://www.ukcric.com" className="m-2">
          <Img fixed={data.ukcricLogo.childImageSharp.fixed} className="h-16" alt="UKCRIC Logo"/>
        </a>

      </div>

      <p className="text-center text-xs">v{packageJson.version}</p>
    </footer>

  )

}


export default Footer


