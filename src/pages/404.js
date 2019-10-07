import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container text-center mt-3">
      <h1 className="text-primary">NOT FOUND</h1>
      <p className="my-2">You just hit a route that doesn&#39;t exist.</p>
      <p className="my-2">Return to the <Link to="/" className="text-link">Home Page</Link>.</p>
    </div>
  </Layout>
)

export default NotFoundPage
