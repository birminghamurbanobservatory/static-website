import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamMember from '../components/team-member';

const AboutPage = (props) => {

  return (
    <Layout>
      <SEO title="About Us" />

      <div className="container">

        <section className="mt-4">
          <h1 className="text-center text-gray-800">History</h1>
          <p>When the first Urban Observatory(s) were established.</p>
          <p>When Birmingham's started.</p>
          <p>Who's funding it.</p>
        </section>
        

        <section className="mt-4">

          <h1 className="text-center text-gray-800">Meet the team</h1>

          <TeamMember 
            name="Lee Chapman" 
            fluidImg={props.data.leeChapman.childImageSharp.fluid} 
            title="Birmingham Urban Observatory Lead"
            projectRole="Lee is heading up the Birmingham Urban Observatory and has a keen eye on the meteorological data-feeds we are creating. He is particularly interested in watching the observatory develop as a testbed for comparing structured and unstructured datafeeds, and importantly seeing how they can complement each other to provide sustainable monitoring for city stakeholders for years to come."
            picSide="left"
          />

          <TeamMember 
            name="Simon Bell" 
            fluidImg={props.data.simonBell.childImageSharp.fluid} 
            title="Technical Lead"
            projectRole="Simon is responsible for building the software platform that will ingest, store and visualise the vast amounts of data collected by the observatory. He'll also oversee the deployment of sensors across the city."
            picSide="right"
          />

          <TeamMember 
            name="Tony Hargreaves" 
            fluidImg={props.data.tony.childImageSharp.fluid} 
            title="Researcher"
            projectRole="Tony is responsible for planning and coordinating the installation and use of distributed acoustic sensing."
            picSide="left"
          />

        </section>

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
    leeChapman: file(relativePath: { eq: "team/LeeChapman.jpg" }) {
      ...fluidImage
    }
    tony: file(relativePath: { eq: "team/Tony.jpg" }) {
      ...fluidImage
    }
  }
`;

