import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';
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
import AboutMe1 from './components/AboutMe1';

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
    //  <ThemeProvider>

    <div className='app' style={{ overflowX: 'hidden' }}>
      {/* <div className="marquee-gradient-left"></div>
      <div className="marquee-gradient-right"></div> */}
      <Navbar />
      <section id="hero"><Hero /></section>
      <hr className="page-break" />
      <section id="aboutme"><AboutMe1 /></section>
      <hr className="page-break" />
      {/* <section id="aboutme"><Aboutme /></section> */}
      <section id="achievements"><Achievements /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="social"><SocialLinks /></section>
      <section id="social"><Contact></Contact></section>
      <ThemeToggle />

    </div>
    //  </ThemeProvider>
  );
}
