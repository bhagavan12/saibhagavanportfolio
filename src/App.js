import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

import './App.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default animation duration
      once: false,     // animation only once
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Typing animation time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="reveal">
        Sai Bhagavan's
        <span style={{color:"#ddd",fontSize:"1rem",display:'block',textAlign:"center"}}>portfolio</span>
          <div className="mask"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <div className="marquee-gradient-left"></div>
      <div className="marquee-gradient-right"></div> */}
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="aboutme"><Aboutme /></section>
      <section id="achievements"><Achievements /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="social"><SocialLinks /></section>
      <section id="social"><Contact></Contact></section>
      {/* <footer className="footer-contact">
        <h2>Let’s Connect</h2>
        <p>Reach out anytime — open for collaborations & opportunities!</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/javvadi-sai-bhagavan-793960248/" target="_blank" rel="noreferrer">
            <span className='line-md--linkedin' alt="LinkedIn" />
          </a>
          <a href="mailto:2100032454cseh@gmail.com">
            <span className='streamline--gmail' alt="Mail" />
          </a>
          <a href="https://github.com/bhagavan12" target="_blank" rel="noreferrer">
            <span className='mdi--github' alt="Github" />
          </a>
          <a href="https://www.instagram.com/teja.javvadi/" target="_blank" rel="noreferrer">
            <span className='line-md--instagram' alt="Instagram" />
          </a>

        </div>
      </footer> */}

    </div>
  );
}
