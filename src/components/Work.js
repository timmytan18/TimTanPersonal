import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import GitHubCalendar from "react-github-calendar"
import useWindowDimensions from "./functions/window"
import data from "../yourdata"

const Work = () => {

  let { height, width } = useWindowDimensions();

  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  subheading={project.subtitle}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
        <div className="extra-container">
          <GitHubCalendar
            username="timmytan18"
            blockSize={width / 75}
            fontSize={width / 200 + 5}
          />
        </div>
        {/* <div className="extra-container">
          <h2>Resume</h2>
        </div> */}
      </div>
    </div>
  )
}

export default Work
