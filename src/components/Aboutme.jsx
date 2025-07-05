import React from "react";
import "../styles/AboutMe.css";
import data from "../data/index.json";
export default function AboutMe() {
  const education = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSHp7AQMO9lYsiaIHdT3VtaHwftSFJt3Lhpoyx6uADkGfpdEpRS_RW42ieEinEP6g4kc&usqp=CAU",
      college: "KL University",
      location: "Vijayawada, AP",
      degree: "B.Tech in Computer Science",
      duration: "2021 - 2025",
    },
    {
      logo: "https://media.licdn.com/dms/image/C4E0BAQGCt-ugqJM7fQ/company-logo_200_200/0/1630622257402?e=2147483647&v=beta&t=e4BLdQiAAKBDYRZHV8Jk8Di_ozjIW6k4lPNMBE4BhGU",
      college: "Sasi Jr College",
      location: "Palakollu, AP",
      degree: "Intermediate (MPC)",
      duration: "2019 - 2021",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZBnugG3vnsdqzgo2dSY-qLmlxw3Kp2PwYKVor0HgVw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZBnugG3vnsdqzgo2dSY-qLmlxw3Kp2PwYKVor0HgVw&s",
      college: "Narayana School",
      location: "Razole, AP",
      degree: "High School",
      duration: "2019",
    },
  ];




  return (
    <section className="about-me" >
      
      <div className="about-left">
      
        <h2>Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="logo-container">
                <img src={edu.logo} alt="College Logo" />
              </div>
              <div className="timeline-box" data-aos="fade-right">
                <h3>{edu.college}</h3>
                <p className="location">{edu.location}</p>
                <p className="degree">{edu.degree}</p>
                <p className="duration">{edu.duration}</p>
              </div>
              {index < education.length - 1 && <div className="line"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="about-right" >
        <h2>Coding Profiles</h2>
        <div className="profiles-grid">
          {data.skillscoding.map((profile, index) => (
            <a href={profile.link} className="profile-card" key={index} target="_blank" rel="noopener noreferrer">
            {/* <div> */}
              <span className={`${profile.logo} img`}></span>
              <h6>{profile.platform}</h6>
            {/* </div>  */}
              {/* <p>{profile.stat}</p> */}
            </a>
          ))}
        </div>
          
        <h2 style={{marginTop:"50px"}}>Skills</h2>
        <div className="skills-grid">
          
          {data.skills.map((skill, index) => (
            <span className={`${skill.src} skill-logo`} alt="Skill" key={index} data-aos="fade-up" />
          ))}
        </div>
      </div>
    </section>
  );
}
