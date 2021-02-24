import React from "react"
import GitHubCalendar from "react-github-calendar"
import useWindowDimensions from "./functions/window"
import data from "../yourdata"

const Skills = () => {

  let { height, width } = useWindowDimensions();
  if (!width) {
    width = 1000;
  }

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
          <GitHubCalendar
            username="timmytan18"
            blockSize={width/75}
            fontSize={width/200+6}
          />
        </div>
        {/* <div className="extra-container">
          <h2>Resume</h2>
        </div> */}
      </div>
    </div>
  )
}

export default Skills
