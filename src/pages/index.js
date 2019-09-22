import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroSection from '../components/hero-section';
import SEO from "../components/seo"

import "../styles/hero.css";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="hero-container"
    >
      <HeroSection className="h-full" />
    </div>

    <div className="text-center">
      <a 
        href="https://data.birminghamurbanobservatory.com"
        className="bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded-full inline-block my-10 text-3xl">
        View our data
      </a>    
    </div>

    <div className="m-4">
      <h1 className="text-center text-gray-800">What on earth is an Urban Observatory?</h1>
      <p>Find out more on our <Link to="/about/">About Us</Link> page.</p>
    </div>

    <div className="m-4">
      <h1 className="text-center text-gray-800">Wait there's more?!</h1>
      <p>We're not the only Urban Observatory. In fact there's 6 of us in total.</p>
    </div>


  </Layout>
)

export default IndexPage
