// import React from "react";
// import Marquee from "./sub/Marquee";
// import "../styles/Achievements.css";
// export default function Achievements() {
//   const publications = 
//     {
//       title: "Secure Encryption Framework for Multi-Cloud Environments: Leveraging Symmetric and Asymmetric Encryption",

//       publisher: "IEEE Xplore",
//       year: "09 February 2024",
//       link: "https://ieeexplore.ieee.org/document/10394865"
//     }
//   const leetcode={
//       "id":"6",
//       "title":"LeetCode 50 Days",
//       "src":'./img/leetcode_50days.gif',
//       "link":"https://leetcode.com/saibhagavan32454/",
//       "date":"January 2023"
//     }
//   const openLinkInNewTab = (url) => {
//     const newTab = window.open(url, '_blank');
//     newTab.focus();
//   }
//   return (
//     <section className="achievements" style={{ position: "relative" }}>
//       <div className="marquee-container" style={{ zIndex: "-11" }}>
//         <div className="marquee">
//           <span>AWS Certified CP | Developer-Associate | ...</span>
//         </div>
//         <div className="marquee marquee2">
//           <span>EX-183 | Hackerrank FrontEnd | ...</span>
//         </div>
//         <div className="marquee-gradient-left"></div>
//         <div className="marquee-gradient-right"></div>
//       </div>
//       <h3>Acheivements</h3>
//       <div className="certificates-grid" style={{ zIndex: "100" }} data-aos="fade-left">

//         {/* Embed example badge - replace with your real badge ids */}
//         <div className="cert-badge">
//           <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7e70bcb9-763a-40a7-8134-5be1dfb82bbd" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
//         </div>
//         <div className="cert-badge">
//           <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="c89ab085-7ea9-4cdc-8bde-5700a6e0be36" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
//         </div>
//         <div className="cert-badge">
//           <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f1b79f48-643d-4b69-b0b5-63322e0eae04" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
//         </div>
//         <div className="cert-badge">
//           <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9e7b6c5c-a172-47fc-9e57-8a8d749231b2" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
//         </div>
//         <div>
//           <div className="" style={{ border: '1px solid #ddd', borderRadius: '4px 4px 0px 0px', padding: "28px 7px 0px 7px", boxShadow: '0 4px 12px rgba(18, 18, 18, 0.03)', textAlign: 'center', width: "140px", cursor: "pointer" }} onClick={() => openLinkInNewTab("https://www.hackerrank.com/certificates/6dac59afeb89")}>
//             <img
//               src='./img/hackerrankfe.png'
//               alt="HackerRank Logo"
//               className=""
//               style={{ width: "100px", height: "100px", borderRadius: "2px", boxShadow: "0 4px 12px rgba(18, 18, 18, 0.075)" }}
//             />
//             <p style={{fontSize:"0.8rem"}}>Frontend
//               <div className="truncate"> Developer(React)</div>
//               <i className="truncate" style={{ fontSize: '0.7rem', marginTop: "4px", color: "rgb(134, 132, 132)" }}>Issuer: Hackerank</i>
//             </p>
//           </div>
//           <div style={{ border: '1px solid #ddd', borderTop: "0px solid #ddd", backgroundColor: "rgba(205, 202, 202, 0.24)", fontSize: "0.6rem", padding: "4px 6px", width: "91.5%", color: "rgb(160, 158, 158)", alignItems: "center", display: "flex", justifyContent: "center", margin: "auto" }}>
//             PROVIDED BY
//             <span className="simple-icons--hackerrank" style={{ width: "15px", border: "1px solid black", marginLeft: "1px" }}></span>
//           </div>
//         </div>
//       </div>

//       {/* <h3 style={{ fontSize: "1.3rem" }}>Publications</h3> */}
//       <div className="publications-list">
//           <div className="pub-card1">
//             <h4>{publications.title}</h4>
//             <p className="pub-meta">
//               {publications.publisher} &nbsp;|&nbsp; {publications.year}
//             </p>
//             <a href={publications.link} target="_blank" rel="noopener noreferrer" className="pub-link">
//               View Publication
//             </a>
//           </div>

//       </div>

//         </section>
//   );
// }
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Marquee from './sub/Marquee';
import '../styles/Achievements.css';
import PublicationsPure from './Publications';
export default function Achievements() {
  const { theme } = useContext(ThemeContext);

  const publications = [
    {
      title: 'Secure Encryption Framework for Multi-Cloud Environments: Leveraging Symmetric and Asymmetric Encryption',
      publisher: 'IEEE Xplore',
      year: '09 February 2024',
      link: 'https://ieeexplore.ieee.org/document/10394865',
      workinglink: 'https://team667capstoneproject.vercel.app/'
    },
    {
      title: 'A Secure Data Handling Framework Using AES, Merkle Trees, and Decentralized Storage',
      overview: 'This research-oriented project presents a multi-layered data protection system that ensures secure transmission, tamper detection, and decentralized storage using a combination of cryptographic and data processing techniques. The work was conducted as a part of my research on secure storage frameworks, emphasizing the integration of encryption, hashing, and distributed file systems.',
      technologiesused: ['AES', 'Merkle Trees', 'Pako.js', 'Bitwise Rotation', 'Filebase (IPFS-backed)', 'MongoDB'],
      keys: ['Designed a hybrid architecture combining on-chain and off-chain storage.',
        'Implemented AES encryption for secure data handling.',
        'Utilized Merkle Trees for data integrity verification.',
        'Employed Pako.js for efficient data compression.',
        'Integrated Filebase for decentralized storage solutions.'],
      workinglink: 'https://team667capstoneproject.vercel.app/'
    }
  ];

  const leetcode = {
    id: '6',
    title: 'LeetCode 50 Days',
    src: './img/leetcode_50days.gif',
    link: 'https://leetcode.com/saibhagavan32454/',
    date: 'January 2023',
  };

  const openLinkInNewTab = (url) => {
    const newTab = window.open(url, '_blank');
    newTab.focus();
  };
  return (
    <section className={`achievements ${theme}`} style={{ position: 'relative' }}>


      <Marquee fline="AWS Certified CP | Developer-Associate |..." sline="EX-183 | Hackerrank FrontEnd | LeetCode 50 Days" zi='-1' />
      <h2 className="section-title">Achievements
        <hr className="headinguline"></hr>
      </h2>
      <div className="certificates-grid" style={{ zIndex: '100' }} data-aos="fade-left">
        <h3><span className='ph--certificate-duotone'></span>Certifications</h3>
        <div className="cert-badge">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="7e70bcb9-763a-40a7-8134-5be1dfb82bbd"
            data-share-badge-host="https://www.credly.com"
          ></div>
          <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
        <div className="cert-badge">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="c89ab085-7ea9-4cdc-8bde-5700a6e0be36"
            data-share-badge-host="https://www.credly.com"
          ></div>
          <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
        <div className="cert-badge">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="f1b79f48-643d-4b69-b0b5-63322e0eae04"
            data-share-badge-host="https://www.credly.com"
          ></div>
          <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
        <div className="cert-badge">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="9e7b6c5c-a172-47fc-9e57-8a8d749231b2"
            data-share-badge-host="https://www.credly.com"
          ></div>
          <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
        <div>
          <div className="" style={{ border: '1px solid #ddd', borderRadius: '4px 4px 0px 0px', padding: "28px 7px 0px 7px", boxShadow: '0 4px 12px rgba(18, 18, 18, 0.03)', textAlign: 'center', width: "140px", cursor: "pointer" }} onClick={() => openLinkInNewTab("https://www.hackerrank.com/certificates/6dac59afeb89")}>
            <img
              src='./img/hackerrankfe.png'
              alt="HackerRank Logo"
              className=""
              style={{ width: "100px", height: "100px", borderRadius: "2px", boxShadow: "0 4px 12px rgba(18, 18, 18, 0.075)" }}
            />
            <div style={{ fontSize: "0.8rem" }}>Frontend
              <p className="truncate"> Developer(React)</p>
              <i className="truncate" style={{ fontSize: '0.7rem', marginTop: "4px", color: "rgb(134, 132, 132)" }}>Issuer: Hackerank</i>
            </div>
          </div>
          <div style={{ border: '1px solid #ddd', borderTop: "0px solid #ddd", backgroundColor: "rgba(205, 202, 202, 0.24)", fontSize: "0.6rem", padding: "4px 6px", width: "91.5%", color: "rgb(160, 158, 158)", alignItems: "center", display: "flex", justifyContent: "center", margin: "auto" }}>
            PROVIDED BY
            <span className="simple-icons--hackerrank" style={{ width: "15px", border: "1px solid black", marginLeft: "1px" }}></span>
          </div>
        </div>
      </div>
      <h3 className='pubhead'><span className='icon-park-twotone--notebook-one'></span>Research Work</h3>
      <PublicationsPure />
    </section>
  );
}
{/* <div className="publications-list">
        <div className="pub-card1">
          <h4>{publications[0].title}</h4>
          <p className="pub-meta">
            {publications[0].publisher} &nbsp;|&nbsp; {publications[0].year}
          </p>

          <a href={publications[0].link} target="_blank" rel="noopener noreferrer" className="pub-link">
            <span className="ph--link-duotone"></span>View Publication
          </a>

          <a
            href={publications[0].workinglink}
            target="_blank"
            rel="noopener noreferrer"
            className="prototype-image-wrapper"
          >
            <img src="./img/cap1.png" alt="Prototype Preview" />
            <div className='prototype-link-icon'>
              <span className="ph--link-duotone " style={{border:"1px solid #FFD700",borderRadius:"50%"}}></span>
            </div>
          </a>
        </div>

        <div className="pub-card1">
          <h4>{publications[1].title}</h4>
        </div>
      </div> */}