import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import myPhoto from "../assets/photoss.jpg";

const Home = () => {
  return (
    <section id="home" className="home-flex">
      {/* LEFT SIDE */}
      <div className="home-left">
     
        <h2 className="intro-heading">
          Hi, I'm <span className="name-highlight">Deepana Dhanagopal</span>
        </h2>
        <h3 className="sub-heading">
          Artificial Intelligence & Data Science Student
        </h3>
        <p className="bio">
          ✨Passionate about creating innovative solutions with cutting-edge technologies.<br/>
          🌟Bridging data, design, and development into seamless, smart applications.
        </p>
        <div className="social-icons">
          <a href="https://github.com/Deepana-06" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/deepana-dhanagopal-193278259" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>

          <a href="mailto:2005deepana@gmail.com">
            <FaEnvelope size={24} />
          </a>
          <a href="/RResume Deepana (1).pdf" download className="resume-btn">
                 ⬇️Download Resume
</a>
        </div>
      </div>

    
      <div className="home-right">
        <img src={myPhoto} alt="Deepana" className="passport-photo" />
      </div>
    </section>
  );
};

export default Home;
