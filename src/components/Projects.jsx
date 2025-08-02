import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpeg";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

     
      <div className="project-row">
        <div className="project-text">
          <h3>🚉 Complaint Track – Railway Issue Response System</h3>
          <p>
            Complain Track is a web platform that helps railway passengers register and
track their complaints. It offers real-time updates and enhancing transparency.
          </p>
          <div className="tech-tags">
            <span className="tech-tag">React+Vite</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Firebase</span>
            <span className="tech-tag">HTML,CSS</span>
            <span className="tech-tag">Express</span>
          </div>
          <a
            className="btn"
            href="https://github.com/Deepana-06/Complaint-Track-Railway-Issue-Response-System"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <img src={project1} alt="Complaint Track" className="project-img-right" />
      </div>

      
      <div className="project-row">
        <div className="project-text">
          <h3>🩺 Transforming Healthcare Delivery</h3>
          <p>
            Enhance patient outcomes and experiences and reduce and improve resource
allocation in implement innovative technologies and models of care.
          </p>
          <div className="tech-tags">
            <span className="tech-tag">Power BI</span>
            <span className="tech-tag">Mural</span>
            <span className="tech-tag">Data Visualization</span>
          </div>
          <a
            className="btn"
            href="https://github.com/Deepana-06/Design-Thinking-"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <img src={project2} alt="Healthcare Project" className="project-img-right" />
      </div>
    </section>
  );
};

export default Projects;
