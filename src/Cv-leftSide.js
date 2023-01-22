import React from 'react';
import PersonalProfiles from './PersonalProfiles';
import Me from './me.png'

const CVLeft = () => {
  return (
    <div className="grid-item-left">
      <div className="contact-info">
        <img className="img-circle center-block" src={Me} width="200" alt="profile pic" />
        <br />
      <div className="name-surname">
        <h1>Robertas Kirkickas</h1>
        <h3>Junior Full-Stack Web Developer</h3>
      </div>
<br></br>
        <h2>Contact</h2>
          <p>Email: <a href='mailto:robertas3000@hotmail.com'>Robertas3000@hotmail.com</a></p>
          <p>Location: Ipswich, United Kingdom</p>
      </div>
      <br></br>
        <h2>Personal Profiles</h2>
        <PersonalProfiles />
        <br></br>
      <div className="tech-skills">
        <h2>Technical Skills</h2>
        <p>JavaScript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Node</p>
        <p>React</p>
      </div>
      <br></br>
      <div className="skills">
        <h2>Skills</h2>
        <p>Attention to detail</p>
        <p>Problem Solving Adaptive</p>
      </div>
      <br></br>
      <div className="languages">
        <h2>Languages</h2>
        <p>Lithuanian</p>
        <p>English</p>
      </div>
    </div>
  );
};

export default CVLeft