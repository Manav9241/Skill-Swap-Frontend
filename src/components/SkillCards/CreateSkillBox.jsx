import React, { useState } from "react";
import "./skill-styles.css";

function CreateSkillBox(props) {
  const [newSkill, setNewSkill] = useState({
    skill: "",
    level: null
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(event.target);
    const updateValue = (name==='skill'? value : event.target.options.selectedIndex-1);
    console.log(name , updateValue , typeof updateValue);
    setNewSkill(prevNewSkill => {
      return {
        ...prevNewSkill,
        [name]: updateValue
      };
    });
  }

  function submitNewSkill(event) {
    props.onAdd(newSkill);
    setNewSkill({
      skill: "",
      level: null
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
          id="skilllevel"
          name='level'
          placeholder='level'
          value={newSkill.level}
          onChange={handleChange}
      >
          <option value={-1}>level</option>
          <option value={0}>Never Touched</option>
          <option value={1}>Beginner</option>
          <option value={2}>Intermediate</option>
          <option value={3}>Advanced</option>
        </select>
        <button form="createServeSkillBox" onClick={submitNewSkill}>Add</button>
      </form>
    </div>
  );
}

export default CreateSkillBox;