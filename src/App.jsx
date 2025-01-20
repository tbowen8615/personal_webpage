import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="#about-me" className="navbar-link">About Me</a></li>
          <li className="navbar-item"><a href="#experience" className="navbar-link">Experience</a></li>
          <li className="navbar-item"><a href="#education" className="navbar-link">Education</a></li>
          <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
          <li className="navbar-item"><a href="#certifications" className="navbar-link">Certifications</a></li>
        </ul>
      </nav>
      <div className="content">
        <section id="home">
          <h1>Home</h1>
          <p>Welcome to my webpage!</p>
        </section>
        <section id="about-me">
          <h1>About Me</h1>
          <p>Here is some information about me.</p>
        </section>
        <section id="experience">
          <h1>Experience</h1>
          <p>Details about my work experience go here.</p>
        </section>
        <section id="education">
          <h1>Education</h1>
          <p>Details about my education go here.</p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <p>Details about my projects go here.</p>
        </section>
        <section id="certifications">
          <h1>Certifications</h1>
          <p>Details about my certifications go here.</p>
        </section>
      </div>
    </div>
  );
};

export default App;
