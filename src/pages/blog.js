import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const BlogPage = () => {
  return (
    <div>
      <Header headerText="The Great Gatsblog" />

      <h1>Blog</h1>
      <p>Posts will show up here tomorrow-ish.</p>

      <Footer />
    </div>
  )
}

export default BlogPage
