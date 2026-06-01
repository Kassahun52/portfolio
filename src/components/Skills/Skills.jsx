import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 90, color: "#e34c26" },
  { name: "CSS", level: 85, color: "#264de4" },
  { name: "JavaScript", level: 80, color: "#f7df1e" },
  { name: "React", level: 75, color: "#61dafb" },
  { name: "Node.js", level: 70, color: "#68a063" },
  { name: "MySQL", level: 70, color: "#00758f" },
  { name: "Git/GitHub", level: 80, color: "#f05032" },
  { name: "Express.js", level: 70, color: "#ffffff" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title" data-aos="fade-up">
          My <span>Skills</span>
        </h2>
        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skills__item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skills__item-header">
                <span className="skills__name">{skill.name}</span>
                <span className="skills__percent">{skill.level}%</span>
              </div>
              <div className="skills__bar">
                <div
                  className="skills__progress"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;