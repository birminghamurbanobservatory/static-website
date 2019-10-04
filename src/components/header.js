import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logos/UO-logo-circle.svg"


const Header = () => {

  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">

      <Link 
        to="/"
        className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="logo" style={{height: "30px"}} className="mr-2"/>
        <span className="font-semibold text-sm sm:text-xl tracking-tight">Birmingham Urban Observatory</span>
      </Link>

      {/* Hamburger */}
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      {/* Links */}
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">

          {/* <a 
            href="https://data.birminghamurbanobservatory.com"
            className="header-link lg:inline-block lg:mt-0 hover:text-white mr-4"
          >
            Data
          </a> */}

          <Link
            to="/about/"
            className="header-link lg:inline-block lg:mt-0 hover:text-white mr-4"
          >
            About Us
          </Link>

          <Link
            to="/blog/"
            className="header-link lg:inline-block lg:mt-0 hover:text-white mr-4"
          >
            Blog
          </Link>

          <Link
            to="/contact/"
            className="header-link lg:inline-block lg:mt-0 hover:text-white mr-4"
          >
            Contact
          </Link>     

        </div>
      </div>

    </nav>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
