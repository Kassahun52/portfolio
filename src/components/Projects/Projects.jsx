import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "A Netflix clone built with React and TMDB API. Features movie browsing, trailers, and responsive design.",
    tech: ["React", "TMDB API", "CSS"],
    github: "https://github.com/Kassahun52/netflix-clone-phase4",
    live: "https://kassahun52.github.io/netflix-clone-phase4",
    color: "#e50914",
  },
  {
    id: 2,
    title: "Amazon Clone",
    description: "Full stack Amazon clone with React frontend, Node.js backend, and MySQL database. Features cart and authentication.",
    tech: ["React", "Node.js", "MySQL", "JWT"],
    github: "https://github.com/Kassahun52/amazon-clone-phase4",
    live: "#",
    color: "#ff9900",
  },
  {
    id: 3,
    title: "Evangadi Forum",
    description: "Full stack forum application with user authentication, questions, and answers system.",
    tech: ["React", "Node.js", "MySQL", "JWT"],
    github: "https://github.com/Kassahun52/evangadi-forum-client",
    live: "#",
    color: "#e63946",
  },
  {
    id: 4,
    title: "Abe Garage",
    description: "Auto repair shop management system with employee, customer, and order management.",
    tech: ["React", "Node.js", "MySQL", "JWT"],
    github: "https://github.com/Kassahun52/abe-garage-main-client",
    live: "#",
    color: "#2a9d8f",
  },
  {
    id: 5,
    title: "Church Website",
    description: "Full Ethiopian Orthodox church website with services, events, and contact sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kassahun52/church-website",
    live: "https://kassahun52.github.io/church-website",
    color: "#457b9d",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title" data-aos="fade-up">
          My <span>Projects</span>
        </h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="projects__card"
              data-aos="fade-up"
              style={{ borderTop: `4px solid ${project.color}` }}
            >
              <h3 style={{ color: project.color }}>{project.title}</h3>
              <p>{project.description}</p>
              <div className="projects__tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <div className="projects__links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;