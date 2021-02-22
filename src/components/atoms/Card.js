import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  if (!heading) {
    return (
      <div
        className="card"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
            'https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60' +
            ")",
        }}
      >
      </div>
    )
  } else {
    return (
      <div
        className="card"
        style={{
          backgroundImage:
            "url(" +
            imgUrl +
            ")"
        }}
      >
        <div className="content">
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a>
        </div>
      </div>
    )
  }
}

export default Card
