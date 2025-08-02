import React from "react";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="edu-card">
        <h3>B.Tech – Artificial Intelligence & Data Science</h3>
        <p>M.Kumarasamy College of Engineering, 2022 – 2026</p>
        <p>CGPA: 8.8</p>
      </div>

      <div className="edu-card">
        <h3>HSC (Higher Secondary)</h3>
        <p> Cheran Matric Hr. Sec. School, 2020 – 2022</p>
        <p>Percentage:92.3%</p>
      </div>

      <div className="edu-card">
        <h3>SSLC (Secondary School)</h3>
        <p>Cheran Matric Hr. Sec. School, 2019 – 2020</p>
        <p>Percentage: 91.4%</p>
      </div>
    </section>
  );
};

export default Education;
