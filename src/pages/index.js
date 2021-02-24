import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import About from "../components/about"
import Work from "../components/Work"
import Experience from "../components/experience"
import YouTube from "../components/YouTube"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Tim Tan" />
    <Header></Header>
    <About></About>
    <Experience></Experience>
    <Work></Work>
    <YouTube></YouTube>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
