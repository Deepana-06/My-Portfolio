import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>

      {/* Programming Languages */}
      <div className="skill-group">
        <h3>👩‍💻 Programming Languages</h3>
        <div className="skill-buttons">
          <span className="skill-btn">C</span>
          <span className="skill-btn">SQL</span>
          <span className="skill-btn">Java</span>
          <span className="skill-btn">Python</span>
        </div>
      </div>

      {/* Software Tools */}
      <div className="skill-group">
        <h3>💼 Software Tools & Technologies</h3>
        <div className="skill-buttons">
          <span className="skill-btn">Canva</span>
          <span className="skill-btn">IBM SPSS</span>
          <span className="skill-btn">MySQL</span>
          <span className="skill-btn">Mural</span>
          <span className="skill-btn">Power BI</span>
          <span className="skill-btn">VS Code</span>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="skill-group">
        <h3>🤝 Soft Skills</h3>
        <div className="skill-buttons">
          <span className="skill-btn">Teamwork</span>
          <span className="skill-btn">Communication</span>
          <span className="skill-btn">Problem-Solving</span>
          <span className="skill-btn">Time Management</span>
          <span className="skill-btn">Leadership</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
