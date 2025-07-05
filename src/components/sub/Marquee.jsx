import React from 'react'

// Marquee.jsx
export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span>Full Stack Developer | Cloud Enthusiast | ...</span>
      </div>
      <div className="marquee marquee2">
        <span>ReactJS | NodeJS | Spring Boot | ...</span>
      </div>
      <div className="marquee-gradient-left"></div>
      <div className="marquee-gradient-right"></div>
    </div>
  );
}
