import React, { useState } from 'react';
import '../styles/Publications.css'; // Adjust the path as necessary

const PublicationsPure = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const publications = [
        {
            title: 'Secure Encryption Framework for Multi-Cloud Environments: Leveraging Symmetric and Asymmetric Encryption',
            publisher: 'IEEE Xplore',
            year: '09 February 2024',
            link: 'https://ieeexplore.ieee.org/document/10394865',
            workinglink: 'https://team667capstoneproject.vercel.app/',
            img: './img/cap1.png',
            isPublished:"Published"
        },
        {
            title: 'Secure Data Handling via the ICED Methodology with AES, Merkle Trees, and Decentralized Storage',
            overview: 'This research-oriented project presents a multi-layered data protection system that ensures secure transmission, tamper detection, and decentralized storage using a combination of cryptographic and data processing techniques. The work was conducted as a part of my research on secure storage frameworks, emphasizing the integration of encryption, hashing, and distributed file systems.',
            technologiesused: ['AES', 'Merkle Trees', 'Pako.js', 'Bitwise Rotation', 'Filebase (IPFS-backed)', 'MongoDB'],
            keys: [
                'Designed a hybrid architecture combining on-chain and off-chain storage.',
                'Implemented Secure Data Handling via the ICED Methodology.',
                'Utilized Merkle Trees for data integrity verification.',
                'Employed Pako.js for efficient data compression.',
                'Integrated Filebase for decentralized storage solutions.'

            ],
            workinglink: 'https://team667capstone2.vercel.app/',
            img: './img/cap2.png',
            isPublished:"Research"
        }
    ];

    const handleViewMore = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const openLinkInNewTab = (url) => {
        window.open(url, '_blank');
    };

    return (
        <section className="publications-list">


            <div className="publications-container">
            
                {publications.map((pub, index) => (
                    <div
                        key={index}
                        className={`
              publication-card
              ${expandedCard === index ? 'expanded' : ''}
              ${expandedCard !== null && expandedCard !== index ? 'compressed' : ''}
            `}
                    >
                        {/* Background Gradient Overlay */}
                        {/* <div className="card-overlay" /> */}
                            <div className='pub-badge'>{pub.isPublished}</div>
                        <div className="card-content">
                            {/* Title Section */}
                            <div className="title-section">
                                <h3 className={`card-title ${expandedCard === index ? 'expanded' : 'normal'}`}>
                                    {pub.title}
                                </h3>

                                {pub.publisher && pub.year && (
                                    <p className="card-meta">
                                        {/* <span className="icon icon-file"></span> */}
                                        {pub.publisher} | {pub.year}
                                    </p>
                                )}
                                {pub.isPublished==="Research" && (
                                    <p className='card-meta'>Enhanced Research Extension</p>
                                )}
                            </div>

                            {/* Collapsed State Content */}
                            {expandedCard !== index && (
                                <div className="collapsed-content">
                                    {pub.link && (
                                        <button
                                            className="btn1 btn-publication-link"
                                            onClick={() => openLinkInNewTab(pub.link)}
                                        >
                                            <span className="portallink"></span>
                                            View Publication
                                        </button>
                                    )}

                                    {/* View More Button */}
                                    {index === 1 && (
                                        <button
                                            className="btn1 btn-publication-link"
                                            onClick={() => handleViewMore(index)}
                                        >
                                            View More
                                            <span className="iconamoon--arrow-down-2-fill" style={{ color: "1px solid #FFD700" }}></span>
                                        </button>
                                    )}

                                    {/* Prototype Image for first card */}
                                    {pub.workinglink && (
                                        <div
                                            className="prototype-demo"
                                            onClick={() => openLinkInNewTab(pub.workinglink)}
                                            style={{ visibility: index === 1 ? "visible" : "hidden" }}
                                        >
                                            <img src={pub.img} alt="Prototype Preview" className='cap1' />
                                            <div className='prototype-link-icon'>
                                                <span className="ph--link-duotone " style={{ border: "1px solid #FFD700", borderRadius: "50%" }}></span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Expanded State Content */}
                            {expandedCard === index && (
                                <div className="expanded-content">
                                    {pub.overview && (
                                        <div className="content-section">
                                            <h4 className="section-title1">
                                                <span className="ic--twotone-description"></span>
                                                Overview
                                            </h4>
                                            <p className="section-text">
                                                {pub.overview}
                                            </p>
                                        </div>
                                    )}

                                    {pub.technologiesused && (
                                        <div className="content-section">
                                            <h4 className="section-title1">
                                                <span className="pixel--technology"></span>
                                                Technologies Used
                                            </h4>
                                            <div className="badges">
                                                {pub.technologiesused.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="badge"
                                                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {pub.keys && (
                                        <div className="content-section">
                                            <h4 className="section-title1"><span className='ph--key-duotone'></span>Key Features</h4>
                                            <ul className="features-list">
                                                {pub.keys.map((key, keyIndex) => (
                                                    <li
                                                        key={keyIndex}
                                                        className="feature-item"
                                                        style={{ animationDelay: `${keyIndex * 0.1}s` }}
                                                    >
                                                        <span className="feature-icon icon-chevron"></span>
                                                        {key}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="action-buttons">
                                        {pub.workinglink && (
                                            <button
                                                className="btn1 btn-view-more"
                                                onClick={() => openLinkInNewTab(pub.workinglink)}
                                            >
                                                <span className="portallink"></span>
                                                View Prototype
                                            </button>
                                        )}

                                        <button
                                            className="btn1 btn-view-more"
                                            onClick={() => handleViewMore(index)}
                                        >
                                        <span className='mdi--arrow-collapse'></span>
                                            Collapse
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Animated Border Effect */}
                        <div className={`animated-border ${expandedCard === index ? 'active' : ''}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PublicationsPure;
// <a
//     href={pub.workinglink}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="prototype-image-wrapper"
// >
//     <img src="./img/cap1.png" alt="Prototype Preview" />
//     <div className='prototype-link-icon'>
//         <span className="ph--link-duotone " style={{ border: "1px solid #FFD700", borderRadius: "50%" }}></span>
//     </div>
// </a>