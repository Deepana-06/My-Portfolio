import React, { useState } from "react";
import cert1 from "../assets/achievements1.jpg";
import cert2 from "../assets/achievements2.jpg";

const Achievements = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title">Achievements</h2>

      {/* Achievement 1 */}
      <div className="achievement-card">
        <div className="achievement-content">
          <h3>🏆 Student of the Month – April 2024</h3>
          <p>Awarded by AI & DS Department for academic excellence and project contributions.</p>
          <button className="view-btn" onClick={() => setShow1(!show1)}>
            {show1 ? "Hide" : "View"} Certificate
          </button>
        </div>
        {show1 && <img src={cert1} alt="Student of the Month" className="achievement-img" />}
      </div>

      {/* Achievement 2 */}
      <div className="achievement-card">
        <div className="achievement-content">
          <h3>🥇 Best Performer – Java Full Stack (VyTCDC)</h3>
          <p>Recognized for top performance in training and final project delivery, May 2024.</p>
          <button className="view-btn" onClick={() => setShow2(!show2)}>
            {show2 ? "Hide" : "View"} Certificate
          </button>
        </div>
        {show2 && <img src={cert2} alt="Best Performer" className="achievement-img" />}
      </div>
    </section>
  );
};

export default Achievements;
