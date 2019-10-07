import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamMember from '../components/team-member';

const AboutPage = (props) => {

  return (
    <Layout>
      <SEO title="About Us" />

      <div className="container">

        <section className="mt-4">
          <h1 className="text-center text-primary">History</h1>
          <p>When the first Urban Observatory(s) were established.</p>
          <p>When Birmingham's started.</p>
          <p>Who's funding it.</p>
        </section>
        
        <section className="mt-4">
          <h1 className="text-center text-primary">Wait, there's more...</h1>
          <p>We're not the only Urban Observatory. In fact there's 6 of us in total.</p>
        </section>        

        <section className="mt-4">

          <h1 className="text-center text-primary">Meet the team</h1>

          <TeamMember 
            name="Prof Lee Chapman" 
            fluidImg={props.data.leeChapman.childImageSharp.fluid} 
            title="Birmingham Urban Observatory Lead"
            projectRole="Lee is heading up the Birmingham Urban Observatory and has a keen eye on the meteorological data-feeds we are creating. He is particularly interested in watching the observatory develop as a testbed for comparing structured and unstructured datafeeds, and importantly seeing how they can complement each other to provide sustainable monitoring for city stakeholders for years to come."
            picSide="left"
          />

          <TeamMember 
            name="Prof Chris Rogers" 
            fluidImg={props.data.chrisRogers.childImageSharp.fluid} 
            title="Deputy Lead of UKCRIC’s Birmingham UO, Director of UKCRIC’s National Buried Infrastructure Facility"
            projectRole="With a passion for engineering future cities and the infrastructure systems that serve them, Chris's research focusses on sustainability, resilience, liveability, and smartness in cities. He explores the use of underground space to relieve pressures on the surface, he is interested in understanding and reducing / removing the disruption to city systems caused by engineered systems and engineering works to create and maintain them, and seeks to improve the urban metabolism of cities - all the flows into, around and out of the city, which include people, resources, goods and waste."
            picSide="right"
          />

          <TeamMember 
            name="Prof Jon Sadler" 
            fluidImg={props.data.jonSadler.childImageSharp.fluid} 
            title="Urban Biodiversity Lead"
            projectRole="Jon is a biogeographer and ecologist whose research focuses on species population and assemblage dynamics in animals (sometimes plants but definitely including people). His work is highly interdisciplinary, bisecting biogeography, ecology, urban design, and habitat management. It uses approaches that combine detailed field studies, field and laboratory experimentation, with social science and citizen science to examine the links between environmental variability and species (including humans) responses. His research has significant blue skies and applied implications for understanding and responding to the impacts of climate and environmental change variability on ecosystems and people. He is a fan of numbers and coding (especially using open source software such as R)."
            picSide="left"
          />

          <TeamMember 
            name="Dr Simon Bell" 
            fluidImg={props.data.simonBell.childImageSharp.fluid} 
            title="Technical Lead"
            projectRole="Simon is responsible for building the software platform that will ingest, store and visualise the vast amounts of data collected by the observatory. He'll also oversee the deployment of sensors across the city."
            picSide="right"
          />

          <TeamMember 
            name="Dr Tony Hargreaves" 
            fluidImg={props.data.tony.childImageSharp.fluid} 
            title="Researcher"
            projectRole="Tony is responsible for planning and coordinating the installation and use of distributed acoustic sensing."
            picSide="left"
          />

          <TeamMember 
            name="Sophie Randall" 
            fluidImg={props.data.sophieRandall.childImageSharp.fluid} 
            title="Research Technician"
            projectRole="Sophie's role involves the planning, building and installation of weather stations all over the city of Birmingham."
            picSide="right"
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
    chrisRogers: file(relativePath: { eq: "team/ChrisRogers.jpg" }) {
      ...fluidImage
    }
    jonSadler: file(relativePath: { eq: "team/JonSadler.jpg" }) {
      ...fluidImage
    }
    sophieRandall: file(relativePath: { eq: "team/SophieRandall.png" }) {
      ...fluidImage
    }
  }
`;

