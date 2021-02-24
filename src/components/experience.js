import React from "react"
import data from "../yourdata"

const Experience = () => {

  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-container">
          <h1>Education & Experience</h1>
          <div className="experience-grid">
            {data.experience.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <h3>{skill.title}</h3>
                <h4>{skill.subtitle}</h4>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
