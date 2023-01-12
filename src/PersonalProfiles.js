import React from 'react';
import hyperion from './hyperiondev.jpg'

const PersonalProfiles = () => {
  return (
    <div className="personal-profiles">

      <a href="https://github.com/RobertasKirkickas" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github" style={{ fontSize: '30px' }}></i>
      </a>

      <a href="https://hyperiondev.com/portfolio/109529/" target="_blank" rel="noopener noreferrer">
  <img src={hyperion} alt="hyperiondev" style={{ width: '30px' }} />
  </a>

      <a href="https://linkedin.com/in/robertas-kirkickas" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin" style={{ fontSize: '30px' }}></i>
      </a>

    </div>
  );
};

export default PersonalProfiles;
