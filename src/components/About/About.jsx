import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title" data-aos="fade-up">
          About <span>Me</span>
        </h2>
        <div className="about__content">
          <div className="about__text" data-aos="fade-right">
            <h3>Full Stack Developer</h3>
            <p>
              I am a passionate Full Stack Developer with experience in building
              modern web applications. I completed the Evangadi Full Stack
              Bootcamp where I learned HTML, CSS, JavaScript, React, Node.js,
              and MySQL.
            </p>
            <p>
              I love creating beautiful, functional, and user-friendly
              applications. I am always eager to learn new technologies and
              improve my skills.
            </p>
            <div className="about__info">
              <div className="about__info-item">
                <span className="label">Name:</span>
                <span>Kassahun</span>
              </div>
              <div className="about__info-item">
                <span className="label">Location:</span>
                <span>Tampa, Florida</span>
              </div>
              <div className="about__info-item">
                <span className="label">Email:</span>
                <span>kassu1278@gmail.com</span>
              </div>
              <div className="about__info-item">
                <span className="label">Available:</span>
                <span style={{ color: "#2a9d8f" }}>Yes</span>
              </div>
            </div>
          </div>
          <div className="about__stats" data-aos="fade-left">
            <div className="about__stat-item">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="about__stat-item">
              <h3>5</h3>
              <p>Phases Completed</p>
            </div>
            <div className="about__stat-item">
              <h3>10+</h3>
              <p>Technologies Learned</p>
            </div>
            <div className="about__stat-item">
              <h3>1</h3>
              <p>Year of Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;