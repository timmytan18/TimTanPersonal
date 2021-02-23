import React from "react"
import GitHubCalendar from "react-github-calendar"
import useWindowDimensions from "./functions/window"
import data from "../yourdata"

const Skills = () => {

  const { height, width } = useWindowDimensions();
  console.log(width)

  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="github-container">
          <GitHubCalendar
            username="timmytan18"
            blockSize={width/75}
            fontSize={width/200+6}
          />
        </div>
      </div>
    </div>
  )
}

export default Skills
