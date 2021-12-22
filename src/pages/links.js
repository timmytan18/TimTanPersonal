import React from "react"
import timImg from '../images/timanimoji.gif'

const BEACONS_LINK = "https://beacons.ai/timtan";
const REDIRECT = "Visit Links";

const Beacons = () => {

  if (typeof window !== 'undefined') {
    const win = window.open(BEACONS_LINK, '_self');
    if (win != null) {
      win.focus();
    }
  }

  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <h2>
            Hi there!{" "}
            <span role="img" aria-label="Emoji">
              👋
            </span>
          </h2>
          <p><a href={BEACONS_LINK}><strong>{REDIRECT}</strong></a> ➡️</p>
        </div>
      </div>
    </div>
  );
}

export default Beacons
