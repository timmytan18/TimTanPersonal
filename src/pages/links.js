import React from "react"

const BEACONS_LINK = "https://beacons.ai/timtan";

const Beacons = () => {
  if (typeof window !== 'undefined') {
    const win = window.open(BEACONS_LINK, '_self');
    if (win != null) {
      win.focus();
    }
  }
  return (
    <></>
  );
}

export default Beacons