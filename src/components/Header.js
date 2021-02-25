import React from "react"
import Fade from "react-reveal/Fade"
import ReactPlayer from 'react-player'
import Connect from "./atoms/Connect"
import animoji from "../images/timanimoji.mp4"
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
            <div className="animoji-container">
              {/* <img src={require('../images/timanimoji.gif')} alt="loading..." /> */}
              <ReactPlayer
                className='react-player'
                url= {animoji}
                width='100%'
                height='100%'
                controls={false}
                loop={true}
                muted={true}
                />
            </div>
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
					<Connect />
				</div>
			</div>
		</div>
	)
}

export default Header
