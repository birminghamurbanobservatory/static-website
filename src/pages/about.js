import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Us</h1>
    <p>Here's everything you need to know.</p>
    <p><Link to="/">Go back to the homepage</Link></p>
    <p><Link to="/blog/">Go to the blog</Link></p>
  </Layout>
)

export default AboutPage
