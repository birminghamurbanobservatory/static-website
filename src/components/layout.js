import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {

  return (
    <>
    
      <Header />

      {/* Some of the classes here help to ensure the footer sits at the bottom of the page */}
      <div className="min-h-screen flex flex-col">

        <main className="flex-grow">{children}</main>

        <Footer />

      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
