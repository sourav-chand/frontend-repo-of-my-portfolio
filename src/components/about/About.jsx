import React from "react";
import "./About.css";
import Image from "../../assets/avatar-1.svg.jpg";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
    <img src={Image} alt="" className="about__img sourav" style={{ borderRadius: '125px' }} />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Sourav Chand, a passionate full-stack web developer with
              expertise in both frontend and backend technologies. My journey
              began with building responsive and interactive web interfaces
              using HTML, CSS, and JavaScript (ES6+), and over time, I have
              expanded my skill set to backend development and database
              management. <br></br><br></br> Fast forward to today, I specialize in developing
              scalable and efficient applications using Node.js and Express.js
              for backend logic, along with MongoDB and MySQL for data
              management. I also have experience working with PHP for web
              development and continuously enhance my knowledge in Linux,
              cybersecurity, and data science. <br></br><br></br> My current focus is on building
              more projects to strengthen my portfolio while mastering advanced
              backend concepts and security best practices. I believe in
              continuous learning and innovation, and I am always excited to
              collaborate on challenging projects that push my technical
              abilities further.
            </p>
            <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>Redis</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
