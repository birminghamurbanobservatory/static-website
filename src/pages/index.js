import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroSection from '../components/hero-section';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="hero-container"
    >
      <HeroSection className="h-full" />
    </div>

    <div className="container">

      {/* <div className="text-center">
        <a 
          href="https://data.birminghamurbanobservatory.com"
          className="bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded-full inline-block my-10 text-3xl">
          View our data
        </a>    
      </div> */}

      <section className="my-6">
        <h1 className="text-center text-primary">What is the Birmingham Urban Observatory?</h1>
        <div className="text-justify">
          <p className="my-2">An <i>Urban Observatory</i> is a system of research platforms that observe urban phenomena. Such phenomena include heat waves, flooding, traffic flow, air pollution, biodiversity and much, much more.</p>
          <p className="my-2">Here in Birmingham, the UK's second largest city, our focus is on critical infrastructure. A major component of which is the region's numerous transport networks. We're interested in how weather and climate impact this critical infrastructure, and how in turn it influences the health of the city, e.g. it's air quality. We'll provide insights into the performance of green, grey and buried infrastructure across the city. Answering questions such as: how do local disruptions such as streetworks influence urban biodiversity. Our hope is that these monitoring systems will inform city planners about how to "<i>green our cities</i>" to best effect for both citizens and the infrastructure systems that support their daily lives.</p>
          <p className="my-2">For more information, check out our <Link to="/about/" className="text-link">About Us</Link> page.</p>
        </div>
      </section>

      <section className="my-6">
        <h1 className="text-center text-primary">What we're up to</h1>
        <p className="my-2">We're busy deploying sensors across the city to collect vital data. Here's a selection of the technology being deployed:</p>
        <ul className="list-disc flex flex-wrap">
          <li className="w-full lg:w-1/2">100 low-cost weather stations in schools and homes.</li>
          <li className="w-full lg:w-1/2">25 high-quality reference weather stations.</li>
          <li className="w-full lg:w-1/2">A distributed acoustic sensing system providing a variety of underground measurements.</li>
          <li className="w-full lg:w-1/2">A high-resolution rainfall radar system.</li>
          <li className="w-full lg:w-1/2">10 air quality sensors.</li>
          <li className="w-full lg:w-1/2">5 rail moisture sensors.</li>
          <li className="w-full lg:w-1/2">10 road temperature sensors.</li>
          <li className="w-full lg:w-1/2">Traffic counters.</li>
          <li className="w-full lg:w-1/2">Lux meters.</li>
          <li className="w-full lg:w-1/2">Automatic PIT tag readers.</li>
        </ul>
        <p></p>
      </section>    

      <section className="my-6">
        <h1 className="text-center text-primary">What's in it for you</h1>
        <p className="my-2">Much of the data collected will be made publically available via an interactive website. Keep an eye on our <Link to="/blog/" className="text-link">Blog</Link> or <a href="https://twitter.com/BhamUrbanObs" className="text-link">follow us</a> on Twitter for updates on when this will go live! With sensors going out all over the city you may find there's infomation being collected within your neighbourhood.</p>
        <p className="my-2">
          Got a burning question about Birmingham that you think our sensors can help answer then please <Link to="/contact/" className="text-link">Get in touch</Link> and we'll see if we can help.
        </p>
      </section>  

      <br/>

  </div>

  </Layout>
)

export default IndexPage

