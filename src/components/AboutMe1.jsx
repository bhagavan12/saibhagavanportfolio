import React from 'react'
import '../styles/AboutMe1.css';
import Aboutme from './Aboutme';

const AboutMe1 = () => {
  const expertise = [
    {
      title: 'Full-Stack Development',
      description: 'Hands-on experience with the MERN stack, building and deploying scalable web apps across different domains.',
      badges: ['React', 'Node.js', 'Express', 'MongoDB', 'Spring Boot'],
    },
    {
      title: 'API Integration & Optimization',
      description: 'Efficiently connecting frontend and backend services, optimizing performance through proper caching, throttling, and structured API design.',
      badges: ['Postman', 'REST APIs', 'Axios', 'API Gateway'],
    },
    {
      title: 'Security Principles',
      description: 'Implementing secure authentication, authorization, and encryption to protect data and user privacy in modern web apps.',
      badges: ['JWT','HTTPS', 'AES Encryption', 'Firebase Auth'],
    },
    {
      title: 'Cloud-Native App Development',
      description: 'Designing and deploying microservices using modern serverless and cloud-native architecture on AWS and Firebase.',
      badges: ['AWS Lambda', 'DynamoDB', 'S3', 'Firebase', 'Vercel'],
    },
  ];

  const coursework = [
    'Software Engineering',
    'Web Technologies',
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Cloud Computing',
    'Operating Systems',
    'Computer Networks',
  ];

  return (
    <section className="about-me1" id="about">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">About Me
            <hr className="headinguline"></hr>
        </h2>
        <div className="intro">
          <p>Passionate Computer Science student at KL University, driven by a love for clean code, scalable architecture, and real-world problem-solving.</p>
          <p>Crafting innovative full-stack solutions while constantly exploring new technologies in the evolving tech landscape.</p>
        </div>
        <div className="expertise">
          <h3><span className='dashicons--performance'></span>Core Expertise</h3>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article key={index} className="expertise-card">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="badges">
                  {item.badges.map((badge, idx) => (
                    <span key={idx} className="badge" aria-label={`${badge} Badge`}>{badge}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="coursework">
          <h3><span className='ph--key-duotone'></span>Key Coursework</h3>
          <div className="badges">
            {coursework.map((course, index) => (
              <span key={index} className="badge" aria-label={`${course} Course`}>{course}</span>
            ))}
          </div>
        </div>
        <Aboutme/>
      </div>
    </section>
  );
};

export default AboutMe1;
