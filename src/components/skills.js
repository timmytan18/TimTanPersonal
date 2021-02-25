import React from "react"
import data from "../yourdata"

function BGImage({ bg, tint }) {
  return (
    <div
      style={{
        backgroundImage: "url(" + bg + ")",
        height: "100%",
        width: "100%",
        backgroundSize: "cover"
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundColor: tint,
          zIndex: "100",
          opacity: "0.5"
        }}
      />
    </div>
  );
}

const Skills = () => {

  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          {/* <h1>Skills</h1> */}
          <div className="skills-grid-container">
            <div className="skills-grid">
              <h3>Languages</h3>
              {data.skills.languages.map(skill => (
                <div className="skill languages" key={skill.id}>
                  <img src={skill.img} alt="css"></img>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
            <div className="skills-grid">
              <h3>Technologies/Libraries</h3>
              {data.skills.technologies.map(skill => (
                <div className="skill technologies" key={skill.id}>
                  <img src={skill.img} alt="css"></img>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
            <div className="skills-grid">
              <h3>Other</h3>
              {data.skills.other.map(skill => (
                <div className="skill other" key={skill.id}>
                  {skill.img && <img style={{ tint: "#000000" }} tint="#000000" src={skill.img} alt="css"></img>}
                  {/* {BGImage("../images/python.png", "#000000")} */}
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
