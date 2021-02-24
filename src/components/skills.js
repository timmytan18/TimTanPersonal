import React from "react"
import useWindowDimensions from "./functions/window"
import data from "../yourdata"

const GitHubCalendarLazy = React.lazy(() =>
  import("react-github-calendar")
)

const Skills = () => {

  const { height, width } = useWindowDimensions();
  const isSSR = typeof window === "undefined";

  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Education & Experience</h1>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <h3>{skill.title}</h3>
                <h4>{skill.subtitle}</h4>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="extra-container">
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <GitHubCalendarLazy
              username="timmytan18"
              blockSize={width/75}
              fontSize={width/200+6}
            />
          </React.Suspense>
        )}
        </div>
        {/* <div className="extra-container">
          <h2>Resume</h2>
        </div> */}
      </div>
    </div>
  )
}

export default Skills
