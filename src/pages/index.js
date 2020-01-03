import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const IndexPage = () =>{
  return(
    <div>
      <h1>Hello, there.</h1>
      <h2>I'm Aidiris, a full-stack developer solving first-world problems.</h2>
      <p>Need a first-world-problem solver? <Link to="/contact">Contact me.</Link></p>

      <Footer/>
    </div>
  )
}

export default IndexPage

//All files in src/pages folder will be created into different url paths thru Gatsby
