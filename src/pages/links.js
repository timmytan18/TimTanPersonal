import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import timImg from '../images/timanimoji.gif'

const BEACONS_LINK = "https://beacons.ai/timtan";
const REDIRECT = "Visit Links";

const Beacons = () => {

  useEffect(() => {
    //preload image
    const img = new Image();
    img.src = timImg;

    if (typeof window !== 'undefined') {
      const win = window.open(BEACONS_LINK, '_self');
      if (win != null) {
        win.focus();
      }
    }
  }, []);

  return (
    <div className="section" id="home">
			<div className="container">
				<div className="header-wrapper">
					<Fade bottom>
						<h2>
							Hi there!{" "}
							<span role="img" aria-label="Emoji">
								👋
              </span>
						</h2>
            <div className="animoji-container">
              <img src={timImg} alt="loading..." />
            </div>
					</Fade>
					<Fade bottom>
						<p><a href={BEACONS_LINK}><strong>{REDIRECT}</strong></a> ➡️</p>
					</Fade>
				</div>
			</div>
		</div>
  );
}

export default Beacons
