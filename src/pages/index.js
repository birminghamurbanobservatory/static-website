import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroSection from '../components/hero-section';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-container">
      <HeroSection className="h-full" />
      <a 
        href="https://data.birminghamurbanobservatory.com"
        className="hero-button bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-5 text-4xl rounded-full border border-white">
        See our data
      </a>
    </div>

    <div className="container">

      <section className="my-8">
        <h1 className="text-center text-primary">What is the Birmingham Urban Observatory?</h1>
        <div>
          <p className="para">An <i>Urban Observatory</i> is a system of research platforms that observe urban phenomena. Such phenomena include heat waves, flooding, traffic flow, air pollution, biodiversity and much, much more.</p>
          <p className="para">Here in Birmingham, the UK's second largest city, our focus is on critical infrastructure. A major component of which is the region's numerous transport networks. We're interested in how weather and climate impact this critical infrastructure, and how in turn it influences the health of the city, e.g. it's air quality. We'll provide insights into the performance of green, grey and buried infrastructure across the city. Answering questions such as: how do local disruptions such as streetworks influence urban biodiversity. Our hope is that these monitoring systems will inform city planners about how to "<i>green our cities</i>" to best effect for both citizens and the infrastructure systems that support their daily lives.</p>
          <p className="para">For more information, check out our <Link to="/about/" className="text-link">About Us</Link> page.</p>
        </div>
      </section>

      <section className="my-8">
        <h1 className="text-center text-primary">What we're up to</h1>
        <p className="para">We're busy deploying sensors across the city to collect vital data. Here's a selection of the technology being deployed:</p>
        <ul className="list-disc flex flex-wrap my-4">
        <li className="w-full lg:w-1/2">100 low-cost weather stations in schools and homes.</li>
          <li className="w-full lg:w-1/2">25 high-quality reference weather stations.</li>
          <li className="w-full lg:w-1/2">A distributed acoustic sensing system providing a variety of underground measurements.</li>
          <li className="w-full lg:w-1/2">A high-resolution rainfall radar system.</li>
          <li className="w-full lg:w-1/2">25 air quality sensors.</li>
          <li className="w-full lg:w-1/2">20 gulley sensors.</li>
          <li className="w-full lg:w-1/2">5 rail moisture sensors.</li>
          <li className="w-full lg:w-1/2">25 road temperature sensors.</li>
          <li className="w-full lg:w-1/2">A lightning detector.</li>
          <li className="w-full lg:w-1/2">Traffic counters.</li>
          <li className="w-full lg:w-1/2">Lux meters.</li>
          <li className="w-full lg:w-1/2">Automatic PIT tag readers.</li>
        </ul>
        <p></p>
      </section>    

      <section className="my-8">
        <h1 className="text-center text-primary">What's in it for you?</h1>
        <p className="para">
          Much of the data collected is now publically available via our interactive <a href="https://data.birminghamurbanobservatory.com/map/platforms" className="text-link">map</a>. You can also see constantly updating <a href="https://live.birminghamurbanobservatory.com" className="text-link">live data</a> from our sensors all across Birmingham.
        </p>
        <p className="para">
          Make sure you keep an eye on our <Link to="/blog/" className="text-link">blog</Link> or <a href="https://twitter.com/BhamUrbanObs" className="text-link">follow us</a> on Twitter for all of our updates! With sensors going out all over the city you may find there's infomation being collected within your neighbourhood.
        </p>
        <p className="para">
          Got a burning question about Birmingham that you think our sensors can help answer? Then please <Link to="/contact/" className="text-link">get in touch</Link> and we'll see if we can help.
        </p>
      </section>  

      <br/>

  </div>

  </Layout>
)

export default IndexPage

