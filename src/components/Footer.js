import React from "react"
import Fade from "react-reveal/Fade"
import Connect from "./atoms/Connect"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="header-wrapper footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <Connect text="CONNECT WITH ME" />
        </div>
      </div>
    </div>
  )
}

export default Footer
