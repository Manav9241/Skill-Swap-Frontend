import React from "react";
import "./card.css"; // Import CSS file for styling

const Card = (props) => {
  return (
    <div className="card">
      {/* <div className="card-left">
                <img src={props.user.image} alt="User" className='card-image'/>
                <button className="connect-button">Connect</button>
            </div> */}

      <div className="card-left">
        <div className="card-image-container">
          <img src={props.user.image} alt="User" className="card-image" />
        </div>
        <button className="connect-button">Connect</button>
      </div>

      <div className="card-right">
        <div className="user-info">
          <h3>{props.user.name}</h3>
          <p>{props.user.description}</p>
        </div>
        {/* <div className="skills-section">
                    <h4>Skills I Can Teach</h4>
                    <ul>
                        {props.user.skillsToTeach.map((skill, index) => (
                            <li key={index}>{skill.name} - {skill.duration}</li>
                        ))}
                    </ul>
                </div>
                <div className="skills-section">
                    <h4>Skills I Want to Learn</h4>
                    <ul>
                        {props.user.skillsToLearn.map((skill, index) => (
                            <li key={index}>{skill.name} - {skill.duration}</li>
                        ))}
                    </ul>
                
                </div> */}
        <div className="skills-section-container">
          <div className="skills-section">
            <h4>Skills I Can Teach</h4>
            <ul>
              {props.user.skillsToTeach.map((skill, index) => (
                <li key={index}>
                  {skill.name} - {skill.duration}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-section">
            <h4>Skills to Learn</h4>
            <ul>
              {props.user.skillsToLearn.map((skill, index) => (
                <li key={index}>
                  {skill.name} - {skill.duration}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
