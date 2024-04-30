import React from "react";
import "./skill-styles.css";

function Skill(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  
  const Proficiency = [
    'Never Touched',
    'Beginner',
    'Intermediate',
    'Advanced',
  ]

  return (
    <div className="skill-box">
      <h1>{props.skill.charAt(0).toUpperCase() + props.skill.slice(1)}</h1>
      <p>{Proficiency[parseInt(props.proficiency)]}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Skill;