import { Link } from "gatsby"
import React from "react"
import packageJson from '../../package.json';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';
import EpsrcLogo from '../images/epsrc-logo-white.png';
import UkcricLogo from '../images/ukcric-logo.png';

const Footer = () => {

  return (

    <footer className="bg-teal-900 text-white">

      <div className="flex flex-wrap items-center">

        <div className="w-full sm:w-1/2 md:w-1/3">
          <p className="text-center m-2">
            <Link
              to="/contact/"
            >
              <FaEnvelope className="inline-block h-8 w-8 m-2" />
              Get in touch
            </Link>
          </p>
        </div> 

        <div className="w-full sm:w-1/2 md:w-1/3">
          <p className="text-center m-2">
            <a href="https://twitter.com/BhamUrbanObs">
              <FaTwitter className="inline-block h-8 w-8 m-2" />
              Follow Us
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/3">

          <div className="flex flex-wrap justify-around">

            <a href="https://epsrc.ukri.org/">
              <img src={EpsrcLogo} alt="" className="h-16"/>
            </a>
            
            <a href="https://www.ukcric.com">
              <img src={UkcricLogo} alt="" className="h-16"/>
            </a>


            {/* <div className="w-1/2">
              
                <EpsrcLogo />
              </a>
            </div>

            <div className="w-1/2">
              <a href="https://www.ukcric.com" className="mx-1">
                <UkcricLogo />
              </a>
            </div> */}

          </div>
        </div>

      </div>

      <p className="text-center text-xs">v{packageJson.version}</p>
    </footer>

  )

}


export default Footer

