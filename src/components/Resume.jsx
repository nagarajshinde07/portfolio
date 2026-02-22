import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <section className="resume-section">

      {/* Tabs */}
      <div className="tabs">
        <button className="tab active">Education</button>
        <button className="tab">Professional Skills</button>
        <button className="tab">Experience</button>
        <button className="tab">Achievements</button>
      </div>

      {/* Timeline Grid */}
      <div className="timeline-grid">

        {/* Education Column */}
        <div className="timeline-column">
          <span className="timeline-year">2010 - 2027</span>
          <h2 className="timeline-title">Education Quality</h2>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <h3 className="card-title">BCA in Computer Application</h3>
             
              </div>
              <p className="card-subtitle">
               Rani Channamma University (2024 - 2027)
              </p>
              <p className="card-description">
                The training provided by universities prepares people to work in
                various sectors of the economy.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <h3 className="card-title">AS - Science & BIO</h3>
               
              </div>
              <p className="card-subtitle">
               shanitiniketan pu clg Khanapur (20023 - 2024)
              </p>
              <p className="card-description">
                Higher education leads to academic degrees.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <h3 className="card-title">AS - Science & bio</h3>
                
              </div>
              <p className="card-subtitle">
                kle pu College Khanapur(2022 - 2023)
              </p>
              <p className="card-description">
                Higher education leads to academic degrees.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <h3 className="card-title">Secondary School Education</h3>
               
              </div>
              <p className="card-subtitle">
                halashi high school halashi (2019 - 2022)
              </p>
              <p className="card-description">
                Secondary education covers two phases.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div className="timeline-column">
          <span className="timeline-year">2010 - 2022</span>
          <h2 className="timeline-title">Job Experience</h2>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <h3 className="card-title">Sr. Software Engineer</h3>
                <span className="card-badge">India</span>
              </div>
              <p className="card-subtitle">
                fresher (2022 - 2024)
              </p>
              <p className="card-description">
                Built projects and trained junior developers.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <h3 className="card-title">Web Developer & Trainer</h3>
                <span className="card-badge">India</span>
              </div>
              <p className="card-subtitle">
                fresher (2021 - 2022)
              </p>
              <p className="card-description">
                Developed web applications and trained junior developers.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <h3 className="card-title">Front-end Developer</h3>
                <span className="card-badge">India</span>
              </div>
              <p className="card-subtitle">
                freelancing
              </p>
              <p className="card-description">
                Built responsive UI components.
              </p>
            </div>
          </div>
        </div>
   

      </div><hr />
    </section>
  );
};

export default Resume;