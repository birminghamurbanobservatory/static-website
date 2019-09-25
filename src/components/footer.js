import { Link } from "gatsby"
import React from "react"
import packageJson from '../../package.json';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';
import EpsrcLogo from '../components/epsrc-logo';
import UkcricLogo from '../components/ukcric-logo';

const Footer = () => {

  return (

    <footer className="bg-teal-900 text-white pb-1">

      <div className="flex flex-wrap items-center">

        <div className="w-full md:w-1/3">
          <p className="text-center">
            <Link
              to="/contact/"
            >
              <FaEnvelope className="inline-block h-8 w-8 m-2" />
              Get in touch
            </Link>
          </p>
        </div> 

        <div className="w-full md:w-1/3">
          <p className="text-center">
            <a href="https://twitter.com/BhamUrbanObs">
              <FaTwitter className="inline-block h-8 w-8 m-2" />
              Follow Us
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/3">

          <div className="flex flex-wrap items-center">

            <div className="w-1/2">
              <a href="https://epsrc.ukri.org/" className="mx-1">
                <EpsrcLogo />
              </a>
            </div>

            <div className="w-1/2">
              <a href="https://www.ukcric.com" className="mx-1">
                <UkcricLogo />
              </a>
            </div>

          </div>
        </div>

      </div>

      <p className="text-center text-sm">v{packageJson.version}</p>
    </footer>

  )

}


export default Footer
