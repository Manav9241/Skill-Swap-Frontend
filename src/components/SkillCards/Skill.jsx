import React from "react";

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
    <div className="note">
      <h1>{props.skill}</h1>
      <p>{Proficiency[parseInt(props.proficiency)]}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Skill;