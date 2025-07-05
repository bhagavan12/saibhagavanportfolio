import React, { useEffect, useState } from "react";
import '../styles/Projects.css'; // adjust path if needed
import projectsData from "../data/index.json";


// export default function ProjectsAccordion() {
//   const [selectedProject, setSelectedProject] = useState(projectsData.portfolio[0]);

//   const handleSelect = (project) => {
//     setSelectedProject(project);
//   };

//   return (
//     <section className="accordion-section">
//       <div className="accordion-left">
//         {projectsData.portfolio.map((project) => (
//           <div
//             key={project.id}
//             className={`accordion-item ${selectedProject.id === project.id ? "active" : ""}`}
//             onClick={() => handleSelect(project)}
//           >
//             <span className="project-name">{project.title}</span>
//             <span className={`arrow ${selectedProject.id === project.id ? "rotate" : ""}`}>&#8250;</span>
//           </div>
//         ))}
//       </div>

//       <div className="accordion-right">
//         <div className="project-detail">
//           <img src={selectedProject.src} alt={selectedProject.title} className="project-gif" />
//           <h3 className="project-title">{selectedProject.title}</h3>
//           <p className="project-description">{selectedProject.description}</p>

//           <div className="project-tech">
//             {selectedProject.used.map((tech, idx) => (
//               <span key={idx} className="tech-badge">{tech}</span>
//             ))}
//           </div>

//           <div className="project-links">
//             {selectedProject.linkd && (
//               <a href={selectedProject.linkd} target="_blank" rel="noopener noreferrer" className="btn">
//                 Live Demo
//               </a>
//             )}
//             {selectedProject.linkg && (
//               <a href={selectedProject.linkg} target="_blank" rel="noopener noreferrer" className="btn">
//                 GitHub
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function ProjectsAccordion() {
  const [selectedProject, setSelectedProject] = useState(projectsData.portfolio[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // const srcs="projec";
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (project) => {
    setSelectedProject(project.id === selectedProject.id ? projectsData.portfolio[0] : project);
  };
  useEffect(() => {
  AOS.refresh();   // This tells AOS to re-scan the DOM and animate again
}, [selectedProject]);

  return (
    <div>

      <h3 className="heading">Projects</h3>
      <section className="accordion-section">
        <div className="accordion-left">
          {projectsData.portfolio.map((project) => (
            <div key={project.id} className="accordion-item-wrapper">
              <div
                className={`accordion-item ${selectedProject?.id === project.id ? "active" : ""}`}
                onClick={() => handleSelect(project)}
              >
                <span className="project-name">{project.title}</span>
                <span className={`arrow ${selectedProject?.id === project.id ? "rotate" : ""}`}>&#8250;</span>
              </div>

              {isMobile && selectedProject?.id === project.id && (
                <div className="project-detail mobile-detail" data-aos="fade-down" key={selectedProject.id}>
                  <img src={selectedProject.src} alt={project.title} className="project-gif" />
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