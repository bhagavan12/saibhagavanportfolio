import '../styles/Hero.css';
import React, { useState, useEffect } from 'react';
import Marquee from './sub/Marquee';
export default function HeroSection() {
  const [currentImg, setCurrentImg] = useState('./img/image.webp');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = (e) => {
      if (e.matches) {
        setCurrentImg("./img/image.png");
      } else {
        setCurrentImg('./img/image.webp');
      }
    };

    // Initial check
    handleChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="hero">
        <Marquee />
      <div className="hero-left">
        <h1 className="hero-heading">Hi, I'm Sai Bhagavan</h1>
        <p className="hero-subheading">
          I am a Student, and skilled in web development and cloud computing, I am a quick learner and passionate one looking to put my expertise to use in a fast-paced work environment.
        </p>
        {/* <div className="hero-buttons">
          <a href="#projects" className="hero-btn">View Projects</a>
          <a href="#contact" className="hero-btn hero-btn-outline">Contact Me</a>
        </div> */}
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/javvadi-sai-bhagavan-793960248/" target="_blank" rel="noreferrer">
            <span className='line-md--linkedin' alt="LinkedIn" />
          </a>
          <a href="https://github.com/bhagavan12" target="_blank" rel="noreferrer">
            <span className='mdi--github' alt="Github" />
          </a>
          <a href="mailto:2100032454cseh@gmail.com">
            <span className='streamline--gmail' alt="Mail" />
          </a>
          <a href="https://www.instagram.com/teja.javvadi/" target="_blank" rel="noreferrer">
            <span className='line-md--instagram' alt="Instagram" />
          </a>
        </div>

      </div>

      <div className="hero-right">
        {/* The background scrolling text sits behind */}


        {/* Foreground photo */}
        <div className="hero-photo">
          <img
            src={currentImg}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

// import React from 'react'
// import { Link } from 'react-router-dom';
// export default function Hero() {
//     return (
//         // <div>
//             <section id="heroSection" className="">
//                 <div class="herocont">
//                     <div class="imgcont">
//                         <div class="datacont">
//                             <h1>Hi! I'm </h1>
//                             <h1>Sai Bhagavan</h1>
//                         </div>
//                         <p id="desc">I am a Student, and skilled in web development and cloud computing, I am a quick learner and passionate one looking to put my expertise to use in a fast-paced work environment.</p>

//                     </div>
//                 </div>
//             </section>
//         // </div>
//     )
// }
// export default function HeroSection() {
//   const bubbles = [
//     { icon: '📂', label: '15+ Projects' },
//     { icon: '🎓', label: '5 Certifications' },
//     { icon: '🐙', label: '10+ Repos' },
//     { icon: '📚', label: 'Learning Next.js' },
//     { icon: '🗓️', label: '2+ Years Exp.' },
//   ];

//   return (
//     <section className="hero-section">
//       <div className="hero-text">
//         <h1 className="hero-heading">Hi, I’m Bhagavan</h1>
//         <p className="hero-subheading">
//           Full Stack Developer | Open Source Enthusiast
//         </p>
//         <div className="hero-buttons">
//           <a href="#projects" className="hero-btn">📂 View Projects</a>
//           <a href="#contact" className="hero-btn">📧 Contact</a>
//         </div>
//       </div>

//       <div className="hero-photo-container">
//         <div className="hero-photo">
//           <img src={img} alt="Your Profile" />
//           {bubbles.map((bubble, index) => (
//             <div className={`bubble float-${index}`} key={index}>
//               <span className="bubble-icon">{bubble.icon}</span>
//               <span className="bubble-label">{bubble.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }