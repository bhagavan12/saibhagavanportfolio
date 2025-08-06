
// import React, { useEffect, useState, useContext } from 'react';
// import { ThemeContext } from './ThemeProvider';
// import '../styles/Projects.css';
// import projectsData from '../data/index.json';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function ProjectsAccordion() {
//   const { theme } = useContext(ThemeContext);
//   const [selectedProject, setSelectedProject] = useState(projectsData.portfolio[0]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleSelect = (project) => {
//     setSelectedProject(project.id === selectedProject.id ? projectsData.portfolio[0] : project);
//   };

//   useEffect(() => {
//     AOS.refresh();
//   }, [selectedProject]);

//   return (
//     <div className={`accordion-container ${theme}`}>
//       <h2 className="section-title">Projects
//             <hr className="headinguline"></hr>
//         </h2>
//       <section className={`accordion-section`}>
//         <div className="accordion-left ">
//           {projectsData.portfolio.map((project) => (
//             <div key={project.id} className="accordion-left-wrapper">
//               <div
//                 className={`accordion-item ${selectedProject?.id === project.id ? 'active' : ''}`}
//                 onClick={() => handleSelect(project)}
//               >
//                 <span className="project-name">{project.title}</span>
//                 <span className={`arrow ${selectedProject?.id === project.id ? 'rotate' : ''}`}>&#8250;</span>
//               </div>

//               {isMobile && selectedProject?.id === project.id && (
//                 <div className="project-detail mobile-detail" data-aos="fade-down" key={selectedProject.id}>
//                   <img src={selectedProject.src} alt={selectedProject.title} className="project-gif" />
//                   <h3 className="project-title">{selectedProject.title}</h3>
//                   <p className="project-description">{selectedProject.description}</p>
//                   <div className="project-tech">
//                     {project.used.map((tech, idx) => (
//                       <span key={idx} className="tech-badge">{tech}</span>
//                     ))}
//                   </div>
//                   <div className="project-links">
//                     {project.linkd && (
//                       <a href={project.linkd} target="_blank" rel="noopener noreferrer" className="btn">
//                         Live Demo
//                       </a>
//                     )}
//                     {project.linkg && (
//                       <a href={project.linkg} target="_blank" rel="noopener noreferrer" className="btn">
//                         GitHub
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {!isMobile && (
//           <div className="accordion-right">
//             {selectedProject && (
//               <div className="project-detail" data-aos="fade-right" key={selectedProject.id}>
//                 <img src={selectedProject.src} alt={selectedProject.title} className="project-gif" />
//                 <h3 className="project-title">{selectedProject.title}</h3>
//                 <p className="project-description">{selectedProject.description}</p>
//                 <div className="project-tech">
//                   {selectedProject.used.map((tech, idx) => (
//                     <span key={idx} className="tech-badge">{tech}</span>
//                   ))}
//                 </div>
//                 <div className="project-links">
//                   {selectedProject.linkd && (
//                     <a href={selectedProject.linkd} target="_blank" rel="noopener noreferrer" className="btn">
//                       Live Demo
//                     </a>
//                   )}
//                   {selectedProject.linkg && (
//                     <a href={selectedProject.linkg} target="_blank" rel="noopener noreferrer" className="btn">
//                       GitHub
//                     </a>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }
import React, { useEffect, useState, useContext, useRef } from 'react';
import { ThemeContext } from './ThemeProvider';
import '../styles/Projects.css';
import projectsData from '../data/index.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectsAccordion() {
  const { theme } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(projectsData.portfolio[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const accordionLeftRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      checkScrollability();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkScrollability = () => {
    const element = accordionLeftRef.current;
    if (element) {
      const isScrollableContent = element.scrollHeight > element.clientHeight;
      setIsScrollable(isScrollableContent);
      
      if (isScrollableContent) {
        const scrollTop = element.scrollTop;
        const scrollHeight = element.scrollHeight;
        const clientHeight = element.clientHeight;
        
        setCanScrollUp(scrollTop > 0);
        setCanScrollDown(scrollTop < scrollHeight - clientHeight);
      } else {
        setCanScrollUp(false);
        setCanScrollDown(false);
      }
    }
  };

  const handleScroll = () => {
    checkScrollability();
  };

  const scrollUp = () => {
    const element = accordionLeftRef.current;
    if (element) {
      element.scrollBy({ top: -120, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    const element = accordionLeftRef.current;
    if (element) {
      element.scrollBy({ top: 120, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollability();
  }, [projectsData.portfolio]);

  const handleSelect = (project) => {
    setSelectedProject(project.id === selectedProject.id ? projectsData.portfolio[0] : project);
  };

  useEffect(() => {
    AOS.refresh();
  }, [selectedProject]);

  return (
    <div className={`accordion-container ${theme}`}>
      <h2 className="section-title">Projects
        <hr className="headinguline"></hr>
      </h2>
      <section className={`accordion-section`}>
        <div className="accordion-left-wrapper">
          {/* Top Scroll Indicator */}
          {!isMobile && isScrollable && (
            <div className={`scroll-indicator scroll-indicator-top ${canScrollUp ? 'active' : ''}`}>
              <div className="scroll-arrow" onClick={scrollUp}><span className="iconamoon--arrow-up-2-fill"></span></div>
              {/* <div className="scroll-glow scroll-glow-top"></div> */}
            </div>
          )}
          
          <div 
            className="accordion-left" 
            ref={accordionLeftRef}
            onScroll={handleScroll}
          >
            {projectsData.portfolio.map((project) => (
              <div key={project.id} className="accordion-item-wrapper">
                <div
                  className={`accordion-item ${selectedProject?.id === project.id ? 'active' : ''}`}
                  onClick={() => handleSelect(project)}
                >
                  <span className="project-name">{project.title}</span>
                  <span className={`arrow ${selectedProject?.id === project.id ? 'rotate' : ''}`}>&#8250;</span>
                </div>

                {isMobile && selectedProject?.id === project.id && (
                  <div className="project-detail mobile-detail" data-aos="fade-down" key={selectedProject.id}>
                    <img src={selectedProject.src} alt={selectedProject.title} className="project-gif" />
                    <h3 className="project-title">{selectedProject.title}</h3>
                    <p className="project-description">{selectedProject.description}</p>
                    <div className="project-tech">
                      {project.used.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.linkd && (
                        <a href={project.linkd} target="_blank" rel="noopener noreferrer" className="btn">
                          Live Demo
                        </a>
                      )}
                      {project.linkg && (
                        <a href={project.linkg} target="_blank" rel="noopener noreferrer" className="btn">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Scroll Indicator */}
          {!isMobile && isScrollable && (
            <div className={`scroll-indicator scroll-indicator-bottom ${canScrollDown ? 'active' : ''}`}>
              {/* <div className="scroll-glow scroll-glow-bottom"></div> */}
              <div className="scroll-arrow" onClick={scrollDown}><span className="iconamoon--arrow-down-2-fill"></span></div>
            </div>
          )}
        </div>

        {!isMobile && (
          <div className="accordion-right">
            {selectedProject && (
              <div className="project-detail" data-aos="fade-right" key={selectedProject.id}>
                <img src={selectedProject.src} alt={selectedProject.title} className="project-gif" />
                <h3 className="project-title">{selectedProject.title}</h3>
                <p className="project-description">{selectedProject.description}</p>
                <div className="project-tech">
                  {selectedProject.used.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {selectedProject.linkd && (
                    <a href={selectedProject.linkd} target="_blank" rel="noopener noreferrer" className="btn">
                      Live Demo
                    </a>
                  )}
                  {selectedProject.linkg && (
                    <a href={selectedProject.linkg} target="_blank" rel="noopener noreferrer" className="btn">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}