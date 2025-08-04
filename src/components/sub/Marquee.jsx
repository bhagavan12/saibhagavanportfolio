import React from 'react'

// Marquee.jsx
export default function Marquee({fline,sline,zi}) {
  return (
    <div className="marquee-container" style={{ zIndex: `${zi}` }}>
      <div className="marquee">
        <span>{fline}</span>
      </div>
      <div className="marquee marquee2">
        <span>{sline}</span>
      </div>
      <div className="marquee-gradient-left"></div>
      <div className="marquee-gradient-right"></div>
    </div>
  );
}
