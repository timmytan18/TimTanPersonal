import React from "react"
import data from "../yourdata"

const Experience = () => {

  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-container">
          <h1>Education & Experience</h1>
          <div className="experience-grid">
            {data.experience.map(experience => (
              <div className="experience" key={experience.id}>
                <img src={experience.img} alt="css"></img>
                <h3>{experience.title}</h3>
                <h4>{experience.subtitle}</h4>                
                {experience.para}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
