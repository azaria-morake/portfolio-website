// Skills.js
import React, { useState, useRef, useEffect } from 'react';
import './Skills.css';
import './Navbar.css';
import './Articles.css';
import ServiceRequestForm from './ServiceRequestForm';


const skillsData = [
  {
    title: 'Languages',
    techIcons: [
      'c-plain.png',
      'python-plain.png',
      'Property 1=ruby-plain.png',
      'javascript-plain.png',
      'typescript-plain.png',
      'html5-plain-wordmark.png',
      'css3-plain.png',
    ],
    description:
      'I use multiple languages for a wide range of applications, from systems programming in C to web development in JavaScript and Ruby. I create responsive and user-friendly web applications using HTML5, CSS3, and Bootstrap.',
  },
  {
    title: 'Frameworks/Libraries',
    techIcons: [
      'nodejs-plain.png',
      'react-original.png',
      'flask-original.png',
      'django-plain.png',
      'bootstrap-plain.png',
      'eslint-original.png',
    ],
    description:
      'Experienced in full-stack development with frameworks like Flask, Django for backend, and React for frontend.',
  },
  {
    title: 'Databases',
    techIcons: [
      'mysql-plain.png',
      'postgresql-plain.png',
      'mongodb-plain-wordmark.png',
      'sqlite-plain.png',
    ],
    description:
      'Skilled in relational and NoSQL databases, ensuring optimal data storage and retrieval.',
  },
  {
    title: 'Version Control/Collaboration & Deployment/DevOps',
    techIcons: ['git-plain.png', 'github-original.png', 'heroku-plain.png', 'docker-plain.png'],
    description:
      'I use Git and GitHub for version control, ensuring smooth collaboration and project management. I use Docker for containerization and Heroku for easy deployment of web applications.',
  },
  {
    title: 'Operating Systems, IDEs & Design Tools',
    techIcons: ['ubuntu-plain.png', 'visualstudio-plain.png', 'figma-plain.png'],
    description:
      'I primarily work with Ubuntu, focusing on system administration and server-side development. My preferred IDE is VS Code, offering great support for a wide range of languages and tools. Sometimes I like to work exclusively in bash, then I will use Vim, Emacs or Nano.',
  },
  {
    title: 'Resume',
    techIcons: ['resume.png'],
    description:
      'My resume includes more details about me. Please click download to view in PDF format. Thanks for your time. Tc.',
  },
  {
    title: 'Request A Service',
    techIcons: ['service.png'],
    description:
      'You can request any software, research, or consultant service by filling out the Service Request form by clicking the button below.',
  },
];

const Skills = () => {
  const [expandedCard, setExpandedCard] = useState(null); // Track expanded card
  const [skillsOrder, setSkillsOrder] = useState(skillsData); // Track the order of the cards
  const skillsContainerRef = useRef(null); // Ref to the container for detecting outside clicks
  const [showServiceRequestModal, setShowServiceRequestModal] = useState(false); // State to control the modal

  // Handle card click
  const handleCardClick = (index) => {
    if (expandedCard === skillsOrder[index].title) {
      // If clicked again, collapse it
      setExpandedCard(null);
      setSkillsOrder(skillsData); // Restore original order
    } else {
      // If a different card is clicked, expand the clicked card and scroll to the top
      const updatedSkills = [...skillsOrder];
      const [clickedSkill] = updatedSkills.splice(index, 1); // Remove the clicked skill
      updatedSkills.unshift(clickedSkill); // Move it to the top of the stack
      setSkillsOrder(updatedSkills); // Update the order state
      setExpandedCard(clickedSkill.title); // Set the clicked card as expanded

      // Scroll to the top when a new card is clicked
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  // Handle clicks outside the skills container
  const handleClickOutside = (event) => {
    if (skillsContainerRef.current && !skillsContainerRef.current.contains(event.target)) {
      // If clicked outside the container, collapse any expanded card
      setExpandedCard(null);
      setSkillsOrder(skillsData); // Restore original order
    }
  };

  // Handle resume download
  const handleResumeDownload = () => {
    window.open('', '');
  };

  // Set up and clean up event listeners for detecting outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [skillsContainerRef]);

  // Open Service Request Modal
  const handleOpenServiceRequest = () => {
    setShowServiceRequestModal(true);
  };

  // Close Service Request Modal
  const handleCloseServiceRequest = () => {
    setShowServiceRequestModal(false);
  };

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Tech Stack</h2>
      <div className="skills-container" ref={skillsContainerRef}>
        {skillsOrder.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${expandedCard === skill.title ? 'expanded' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="skill-header">
              <div className="skill-name">{skill.title}</div>
            </div>
            <div className="tech-icons tech-stach-icons img:hover">
              {skill.techIcons.map((techIcon, i) => (
                <img key={i} src={techIcon} alt="Tech Icon" className="tech-icon" />
              ))}
            </div>
            {expandedCard === skill.title && (
              <div className="skill-description">
                <p>{skill.description}</p>
                {skill.title === 'Resume' && (
                  <button className="open-article-btn" onClick={handleResumeDownload}>
                    Download Resume
                  </button>
                )}
                {skill.title === 'Request A Service' && (
                  <button className="open-article-btn" onClick={handleOpenServiceRequest}>
                    Open Service Request Form
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Service Request Form Modal */}
      <>
      {showServiceRequestModal && (
      <>
        <div className="modal-overlay"></div>
        <ServiceRequestForm className='modal-form' show={showServiceRequestModal} handleClose={handleCloseServiceRequest} />
      </>
      )}
      </>   
    </div>
  );
};

export default Skills;
