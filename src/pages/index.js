import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import About from "../components/about"
import Work from "../components/Work"
import Skills from "../components/skills"
import YouTube from "../components/YouTube"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Tim Tan" />
    <Header></Header>
    <About></About>
    <Work></Work>
    <YouTube></YouTube>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
