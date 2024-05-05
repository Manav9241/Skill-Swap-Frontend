import React from "react";
import "./skill-styles.css";

function Skill(props) {
  function handleClick(e) {
    e.preventDefault() ;
    props.onDelete(props.id);
  }
  console.log(props);
  const level = [
    'Never Touched',
    'Beginner',
    'Intermediate',
    'Advanced',
  ]

  return (
    <div className="skill-box">
      <h1>{props.skill.charAt(0).toUpperCase() + props.skill.slice(1)}</h1>
      <p>{level[parseInt(props.level)]}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Skill;