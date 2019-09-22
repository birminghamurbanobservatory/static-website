import { Link } from "gatsby"
import React from "react"
import packageJson from '../../package.json';
import UkcricLogo from '../images/ukcric-logo.png';

const Footer = () => {

  return (

    <footer className="bg-teal-900 text-white pb-1">

      <div className="flex flex-wrap items-center">

        <div className="w-full md:w-1/3">
          <p className="text-center">
            <Link
              to="/contact/"
            >
              Contact
            </Link>
          </p>
        </div> 

        <div className="w-full md:w-1/3">
          <p className="text-center">
            <a href="https://twitter.com/BhamUrbanObs">
              Twitter
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <a href="https://www.ukcric.com">
            <img src={UkcricLogo} alt="UKCRIC Logo" className="w-1/2 sm:w-1/3 md:w-1/2 float-right"/>
          </a>
        </div>

      </div>

      <p className="text-center">v{packageJson.version}</p>
    </footer>

  )

}


export default Footer
