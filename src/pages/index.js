import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroImage from '../components/hero-image';
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <HeroImage className="h-screen" />
    </div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">About Us</Link>
  </Layout>
)

export default IndexPage
