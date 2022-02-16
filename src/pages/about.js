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

        <section className="mt-6">
          <h1 className="text-center text-primary">Why we need to observe urban areas</h1>
          <p className="para">
            More than half of the world’s population now lives in urban areas and UN projections suggest that this proportion will rise to 68% by 2050 worldwide. In Europe, this proportion has already been succeeded with 74% of our citizen living in cities.
          </p>  
          <p className="para">
            Cities generate the vast majority of the country's wealth and investment in its infrastructure amounts to billions each year. Cities are complex entities, with dynamic and interacting infrastructure, social and environmental aspects. For cities to be attractive to live in, they need to provide infrastructure for housing, transport, energy, leisure and health. There are many interdependencies between those sectors. Yet, research typically focuses on single sectors, and limited timeframes and therefore is unable to understand the interwoven processes and systems.
          </p>
        </section>

        <section className="mt-6">
          <h1 className="text-center text-primary">Understanding Cities</h1>
          <p className="para">Urban Observatories enable the gathering of robust data to better understand cities and their relationship with decision making across a range of scales and sectors in order to:</p>

          <ul className="list-disc flex flex-wrap">
            <li className="w-full lg:w-1/2 px-4 py-1">Develop and validate theories and models</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Identify and address challenges</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Accelerate innovation and change</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Support & inform robust decision making</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Provide go-to places to support other cities to establish observatories</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Share learning and best practice </li>
          </ul>

          <p className="my-2">By:</p>

          <ul className="list-disc flex flex-wrap">
            <li className="w-full lg:w-1/2 px-4 py-1">Designing and deploying urban-wide sensing networks and related infrastructure</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Curating data </li>
            <li className="w-full lg:w-1/2 px-4 py-1">Providing analytics to turn data into information</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Creating a co-learning and co-production environment </li>
            <li className="w-full lg:w-1/2 px-4 py-1">Developing procedural and governance structures to manage and sustain urban monitoring systems</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Stimulating and supporting wide participation by accelerating smart city planning and long-term strategic, evidence-driven planning and operations (innovation and change)</li>
            <li className="w-full lg:w-1/2 px-4 py-1">Conducting experiments at different scales</li>
          </ul>
        </section>

        <section className="mt-6">
          <h1 className="text-center text-primary">The Urban Observatories</h1>
          <p className="para">
            The mission of the Urban Observatories is to understand how to monitor cities at multiple scales both temporal and spatial and across multiple sectors.  The approach will enable discovery-led science through large scale deployments of scientific instruments in the city to answer questions about technology, data storage, data standards and communications as well as more far reaching questions about the scale of monitoring required to carry out experiments in the city (density, accuracy, repeatability). Importantly, it will also enable experimentation: engineering system interventions (enacting a policy, putting in place an operational practice or making a physical change, for example) can be made and the resulting impact observed and measured.
          </p>

          <p className="para">The 6 Urban Observatories are as follows:</p>
          <ul className="flex flex-wrap text-center text-lg">
            <li className="w-full md:w-1/2 lg:w-1/3 p-2"><a href="http://newcastle.urbanobservatory.ac.uk/" className="text-link">Newcastle</a></li>
            <li className="w-full md:w-1/2 lg:w-1/3 p-2"><a href="https://urbanflows.ac.uk" className="text-link">Sheffield</a></li>
            <li className="w-full md:w-1/2 lg:w-1/3 p-2"><a href="https://www.bristol.ac.uk/engineering/research/ukcricbristol/collaboratory" className="text-link">Bristol</a></li>
            <li className="w-full md:w-1/2 lg:w-1/3 p-2"><a href="https://birminghamurbanobservatory.com" className="text-link">Birmingham</a></li>
            <li className="w-full md:w-1/2 lg:w-1/3 p-2"><a href="https://www.urbanobservatory.manchester.ac.uk" className="text-link">Manchester</a></li>
            <li className="w-full md:w-1/2 lg:w-1/3 p-2"><a href="https://www.cranfield.ac.uk" className="text-link">Cranfield</a></li>
          </ul>

          <p className="para">Newcastle, Sheffield and Bristol form the first wave of Observatories and are passing on their experiences to the second wave of Observatories, namely Birmingham, Manchester and Cranfield. This knowledge exchange forms part of the <a href="http://www.urbanobservatory.ac.uk/corona" className="text-link">CORONA project</a>. The CORONA project is funded by the <a href="https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/R013411/1" className="text-link">Engineering and Physical Sciences Research Council</a>. The network of observatories forms one of the three strands of <a href="UKCRIC" className="text-link">UKCRIC</a>.</p> 
        </section>
              
        <section className="mt-6">
          <h1 className="text-center text-primary">Low cost sensing</h1>
          <p className="para">Birmingham Urban Observatory is deploying and hosting a growing number of indicative low cost sensors for air quality measurements. These sensors are identified by description on our interactive map. Whilst Zephyrs may undergo manufacturer calibration and corrections, data is not corrected beyond this. </p>
          <p className="para">WM-Air have freely available resources including <a href="https://wm-air.org.uk/low-cost-sensors-for-air-quality-monitoring/" className="text-link">low cost sensor guidance</a>. Zephyrs from Earthsense undergo manufacturer calibration and corrections. Details are available in this  <a href="https://www.earthsense.co.uk/colocation-comparison-studies" className="text-link">colocation study</a>. AltasensePM devices were developed in house using an IoT enabled Plantower PMS5003 sensor. Researchers at the University of Birmingham have recently published an <a href="https://www.frontiersin.org/articles/10.3389/fenvs.2021.798485/full" className="text-link">evaluation of the sensor performance </a>.</p> 
        </section>


        <section className="mt-6">
          <h1 className="text-center text-primary">Meet the Birmingham team</h1>

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
            name="Nicole Cowell" 
            fluidImg={props.data.nicoleCowell.childImageSharp.fluid} 
            title="Research Technician"
            projectRole="Nicole's role involves the planning, building and installation of sensing equipment all over the West Midlands, with a focus on low cost and commercial air quality measurements. "
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
    nicoleCowell: file(relativePath: { eq: "team/NicoleCowell.jpg" }) {
      ...fluidImage
    }
  }
`;

