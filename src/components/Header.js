import React from "react"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram, faLinkedinIn } from '@fortawesome/'
import data from "../yourdata"

const Header = () => {
	return (
		<div className="section" id="home">
			<div className="container">
				<div className="header-wrapper">
					<Fade bottom>
						<h2>
							Hi, I'm {data.name}!{" "}
							<span role="img" aria-label="Emoji">
								👋
              </span>
						</h2>
					</Fade>
					<Fade bottom cascade>
						<div className="heading-wrapper">
							<h1>{data.headerTagline[0]}</h1>
							<h1>{data.headerTagline[1]}</h1>
							<h1>{data.headerTagline[2]}</h1>
						</div>
					</Fade>
					<Fade bottom>
						<p>{data.headerParagraph}</p>
					</Fade>
					<Fade bottom>
						<p className="connect-text">CONNECT WITH ME</p>
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
							<a href={data.socialMedia.youtube} class="youtube" target="_blank">
								<div class="icon-button"><FontAwesomeIcon icon={faYoutube} color="white" /></div>
							</a>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	)
}

export default Header
