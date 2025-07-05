import '../styles/DockDemo.css';
import React from 'react';

export default function DockNavbar() {
  const navItems = [
    { label: 'Home', icon: 'material-symbols--home-outline-rounded', link: '#hero' },
    { label: 'About Me', icon: 'cib--about-me', link: '#aboutme' },
    { label: 'Acheivements', icon: 'mdi--certificate-outline', link: '#achievements' },
    { label: 'Projects', icon: 'pajamas--project', link: '#projects' },
    { label: 'Resume', icon: 'pepicons-pop--cv', link: '#resume' },
  ];

  return (
    <nav className="dock-navbar">
      {navItems.map((item, index) => (
        <a href={item.link} className="dock-item" key={index}>
          <span className={item.icon}></span>
          <span className="dock-label">{item.label}</span>
        </a>
      ))}
      
    </nav>
  );
}
