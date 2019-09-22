import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = () => (
  <Layout>
    <SEO title="team" />
    <h1>Meet the team</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TeamPage
