import React from "react"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import data from "../../yourdata"

const Connect = ({ text }) => {
  return (
    <Fade bottom>
      {/* {text ? <p className="connect-text">{text}</p> : <div />} */}
      <p className="connect-text">{text ? text: ' '}</p>
      <div class="social-media-div">
        <a href={`mailto: ${data.socialMedia.email}`} class="mail" target="_blank">
          <div class="icon-button"><FontAwesomeIcon icon={faEnvelope} color="white" /></div>
        </a>
        <a href={data.socialMedia.linkedin} class="linkedin" target="_blank">
          <div class="icon-button"><FontAwesomeIcon icon={faLinkedinIn} color="white" /></div>
        </a>
        <a href={data.socialMedia.github} class="github" target="_blank">
          <div class="icon-button"><FontAwesomeIcon icon={faGithub} color="white" /></div>
        </a>
        <a href={data.socialMedia.instagram} class="instagram" target="_blank">
          <div class="icon-button"><FontAwesomeIcon icon={faInstagram} color="white" /></div>
        </a>
        {/* <a href={data.socialMedia.twitter} class="twitter" target="_blank">
          <div class="icon-button"><FontAwesomeIcon icon={faTwitter} color="white" /></div>
        </a> */}
        <a href={data.socialMedia.youtube} class="youtube" target="_blank">
          <div class="icon-button"><FontAwesomeIcon icon={faYoutube} color="white" /></div>
        </a>
      </div>
    </Fade>
  )
}

export default Connect