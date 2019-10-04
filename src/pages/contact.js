import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <div className="container my-3">

      <h1 className="text-primary mb-6">Contact Us</h1>

      <form className="w-full max-w-lg mb-4" id="contact-us-form" name="contact-us-form" acceptCharset="utf-8" action="https://formspree.io/birminghamurbanobservatory@gmail.com" method="post">

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
              Your Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="name" name="name" type="text" required="" />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="your-email">
              Your Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="your-email" type="email" name="_replyto" required="" />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="message">
              Your Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea rows="5" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="message" type="textarea" name="message" required="" />
          </div>
        </div>        

        {/* The following line customizes the email subject line */}
        <input type="hidden" name="_subject" value="Contact Us Enquiry" />
        {/* Following line is used to help filter out spam emails by bots. */}
        <input type="text" name="_gotcha" style={{display: "none"}} />    

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 text-center">
            <button className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-6" type="submit">
              Submit
            </button>
          </div>
        </div>

      </form>

    </div>

  </Layout>
)

export default ContactPage
