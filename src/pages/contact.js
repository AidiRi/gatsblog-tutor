import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header headerText="Get In Touch" />
      <p>Email me at: Aidi@gmail.com</p>
      <p>
        Or reach me via{" "}
        <a href="https://twitter.com/RiveraAidi" target="_blank">
          @RiveraAidi
        </a>{" "}
        on twitter.
      </p>

      <Footer />
    </div>
  )
}

export default ContactPage
