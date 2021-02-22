import React from "react"

const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const VideoCard = ({ heading, paragraph, imgUrl, views, date, projectLink }) => {
  if (!heading) {
    return (
      <div
        className="card card-video"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
            'https://images.unsplash.com/photo-1551817958-c5b51e7b4a33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' +
            ")",
        }}
      >
      </div>
    )
  } else {
    const dateObj = new Date(date);
    return (
      <div className="video-container">
        <div
          className="card card-video"
          style={{ backgroundImage: "url(" + imgUrl + ")" }}
        >
          <div className="content">
            <p className="text">{paragraph}</p>
            <a
              href={projectLink ? projectLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Watch
            </a>
          </div>
        </div>
        <h2 className="header">{heading}</h2>
        <h3 className="header">{numberWithCommas(views)} views • {months[dateObj.getMonth()]} {dateObj.getDate()}, {dateObj.getFullYear()}</h3>
      </div>
    )
  }
}

export default VideoCard
