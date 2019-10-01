import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamMember from '../components/team-member';
import Img from "gatsby-image"

const AboutPage = (props) => {

  return (
    <Layout>
      <SEO title="About Us" />

      <div className="container">

        <h1 className="text-center">About Us</h1>
        <p>Here's everything you need to know.</p>
        <p><Link to="/">Go back to the homepage</Link></p>
        <p><Link to="/blog/">Go to the blog</Link></p>
        
        <h1 className="text-center">Meet the team</h1>

        <TeamMember 
          name="Simon Bell" 
          fluidImg={props.data.simonBell.childImageSharp.fluid} 
          title="Technical Lead"
          role="Simon is responsible for building the software platform that will ingest, store and visualise the vast amounts of data collected by the observatory. He'll also oversee the deployment of sensors across the city."
        />

      </div>

    </Layout>
  )

}

export default AboutPage


// Handy guide for handling images using gatsby-image plugin: https://codebushi.com/using-gatsby-image/
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    simonBell: file(relativePath: { eq: "team/SimonBell.jpg" }) {
      ...fluidImage
    }
  }
`;

