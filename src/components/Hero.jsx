// import '../styles/Hero.css';
// import React, { useState, useEffect } from 'react';
// import Marquee from './sub/Marquee';
// export default function HeroSection() {
//   const [currentImg, setCurrentImg] = useState('./img/image.webp');

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(max-width: 768px)');

//     const handleChange = (e) => {
//       if (e.matches) {
//         setCurrentImg("./img/image.png");
//       } else {
//         setCurrentImg('./img/image.webp');
//       }
//     };

//     // Initial check
//     handleChange(mediaQuery);

//     // Listen for changes
//     mediaQuery.addEventListener('change', handleChange);

//     // Cleanup listener on unmount
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   return (
//     <section className="hero">
//         <Marquee />
//       <div className="hero-left">
//         <h1 className="hero-heading">Hi, I'm Sai Bhagavan</h1>
//         <p className="hero-subheading">
//           I am a Student, and skilled in web development and cloud computing, I am a quick learner and passionate one looking to put my expertise to use in a fast-paced work environment.
//         </p>
//         {/* <div className="hero-buttons">
//           <a href="#projects" className="hero-btn">View Projects</a>
//           <a href="#contact" className="hero-btn hero-btn-outline">Contact Me</a>
//         </div> */}
//         <div className="hero-socials">
//           <a href="https://www.linkedin.com/in/javvadi-sai-bhagavan-793960248/" target="_blank" rel="noreferrer">
//             <span className='line-md--linkedin' alt="LinkedIn" />
//           </a>
//           <a href="https://github.com/bhagavan12" target="_blank" rel="noreferrer">
//             <span className='mdi--github' alt="Github" />
//           </a>
//           <a href="mailto:2100032454cseh@gmail.com">
//             <span className='streamline--gmail' alt="Mail" />
//           </a>
//           <a href="https://www.instagram.com/teja.javvadi/" target="_blank" rel="noreferrer">
//             <span className='line-md--instagram' alt="Instagram" />
//           </a>
//         </div>

//       </div>

//       <div className="hero-right">
//         {/* The background scrolling text sits behind */}


//         {/* Foreground photo */}
//         <div className="hero-photo">
//           <img
//             src={currentImg}
//             alt="Profile"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import '../styles/Hero.css';
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Marquee from './sub/Marquee';

export default function HeroSection() {
  const [currentImg, setCurrentImg] = useState('./img/image.webp');
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = (e) => {
      if (e.matches) {
        setCurrentImg("./img/image.png");
      } else {
        setCurrentImg('./img/image.webp');
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="hero">
      <Marquee sline="ReactJS | NodeJS | Spring Boot | ..." fline="Full Stack Developer | Cloud Enthusiast | ..." zi='0' />
      <div className="hero-left">
        <h1 className="hero-h1">Hello, I'm
          <span className='hero-heading'>
            Sai Bhagavan
          </span>
        </h1>
        <p className="hero-subheading">
          Building innovative digital solutions with cutting-edge technologies. Specialized in MERN stack, cloud computing, and Java to drive impactful business growth. Passionate about learning and adapting to new challenges in the tech landscape.
        </p>

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
        <div className="hero-photo">
          <img src={currentImg} alt="Profile" />
        </div>
        <div className="hero-info-block left"><span className='pepicons-print--star'></span>9.42 CGPA</div>
        <div className="hero-info-block right"><span className='mynaui--code-waves-solid'></span>10+ Projects</div>
        <div className="hero-info-block right1"><span className='certified--star'></span>5 Certs</div>
      </div>
    </section>
  );
}