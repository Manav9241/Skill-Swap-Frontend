import React, { useState } from "react";
import "./skill-styles.css";

function CreateSkillBox(props) {
  const [newSkill, setNewSkill] = useState({
    skill: "",
    proficiency: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNewSkill(prevNewSkill => {
      return {
        ...prevNewSkill,
        [name]: value
      };
    });
  }

  function submitNewSkill(event) {
    props.onAdd(newSkill);
    setNewSkill({
      skill: "",
      proficiency: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form id="createServeSkillBox" className="formBox-skill">
        <input
          name="skill"
          onChange={handleChange}
          value={newSkill.skill}
          placeholder="Skill"
        />
        <select
          id="skillProficiency"
          name='proficiency'
          value={`${newSkill.proficiency || 'proficiency'}`}
          onChange={handleChange}
      >
          <option value="selected">Proficiency</option>
          <option value="0">Never Touched</option>
          <option value="1">Beginner</option>
          <option value="2">Intermediate</option>
          <option value="3">Advanced</option>
        </select>
        <button form="createServeSkillBox" onClick={submitNewSkill}>Add</button>
      </form>
    </div>
  );
}

export default CreateSkillBox;