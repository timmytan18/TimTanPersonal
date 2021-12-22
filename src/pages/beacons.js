import React from "react"
import { Link } from "gatsby"

const BEACONS_LINK = "https://beacons.ai/timtan";

const Beacons = () => {
  const win = window.open(BEACONS_LINK, '_self');
  if (win != null) {
    win.focus();
  }
  return (
    <></>
  );
}

export default Beacons