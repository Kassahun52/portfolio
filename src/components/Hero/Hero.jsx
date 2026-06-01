import React from "react";
import "./Hero.css";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__content" data-aos="fade-up">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Kassahun</h1>
        <h2 className="hero__title">
          Full Stack <span>Developer</span>
        </h2>
        <p className="hero__description">
          I build modern, responsive web applications using React, Node.js,
          and MySQL. Passionate about creating beautiful and functional
          digital experiences.
        </p>
        <div className="hero__buttons">
          <button
            className="hero__btn primary"
            onClick={() => scrollTo("projects")}
          >
            View My Work
          </button>
          <button
            className="hero__btn secondary"
            onClick={() => scrollTo("contact")}
          >
            Contact Me
          </button>
        </div>
        <div className="hero__socials">
          <a href="https://github.com/Kassahun52" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="hero__image" data-aos="fade-left">
        <div className="hero__circle">
          <span>KT</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;