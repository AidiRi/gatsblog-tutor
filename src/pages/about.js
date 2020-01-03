import React from 'react'
import { Link } from 'gatsby'
const AboutPage = ()=> {
  return(
    <div>
      <h1>Bio</h1>
      <p>Hi, there! My name's Aidi and I'm a developer and a writer. I'm also involved in a couple of groups encouraging DEI efforrs. I'm a huge sucker for fiber crafts and like creating hand-made doohickeys and knickknacks in my free time.</p>
      <p>Think I'd be great to work with? <Link to="/contact/">Contact me.</Link></p>
    </div>
  )
}

export default AboutPage
