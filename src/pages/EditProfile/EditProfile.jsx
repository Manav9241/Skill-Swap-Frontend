import React , {useState} from 'react'
import Navbar from "../../components/Navbar/Navbar";
import CreateSkillBox from '../../components/SkillCards/CreateSkillBox';
import Skill from '../../components/SkillCards/Skill';
import "./edit-profile.css";


const user = {
  phoneNumber: '1234123412',
  bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptas exercitationem quidem doloremque dignissimos sapiente amet quam doloribus corrupti alias nostrum molestias nemo facere incidunt, minima ab vero omnis expedita?',
  serveSkill: [
    {
      skill: 'c++',
      proficiency: '2'
    },
  ],
  needSkill:[{
    skill: 'js',
    proficiency: '1'
  }],
}

const EditProfile = () => {
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [bio, setBio] = useState(user.bio);
  const [needSkill, setNeedSkill] = useState(user.needSkill[0]);
  const [serveSkill, setServeSkill] = useState([...user.serveSkill]);
  
  const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
  };

  const handleBioChange = (e) => {
      setBio(e.target.value);
  };

  const handleNeedSkillChange = (e) => {
    const {name , value} = e.target;
    const updateValue = (name==='skill'? value : e.target.options.selectedIndex.toString())
    setNeedSkill({
      ...needSkill, 
      [name]: updateValue
    })
  };

  function addServeSkill(newSkill) {
    const { skill , proficiency } = newSkill;
    if(skill && proficiency !== "proficiency") {
      setServeSkill(prevSkill => {
        return [...prevSkill, newSkill];
      });
    }
  }

  function deleteServeSkill(id) {
    setServeSkill(prevServeSkills => {
      return prevServeSkills.filter((skillItem, index) => {
        return index !== id;
      });
    });
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      // Perform update logic here, such as calling an API to update the user's profile
      const finalUser = {
        phoneNumber: phoneNumber,
        bio: bio,
        serveSkill: serveSkill,
        needSkill: [needSkill]
      }

      console.log(finalUser);
      // You can replace the console logs with actual update logic
  };

  return (
    <div>
        <Navbar />
      <div className="edit-profile">
          <h1>Edit Profile</h1>
          <form id="editProfileForm" className="profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                      type="text"
                      id="phoneNumber"
                      className="form-control"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="bio">Bio:</label>
                  <textarea
                      id="bio"
                      className="form-control"
                      value={bio}
                      onChange={handleBioChange}
                  />
              </div>
              <div className="form-group">
                  <h2>Update Need Skill</h2>
                  <label htmlFor="needSkill">Skill Name:</label>
                  <input
                      type="text"
                      id="needSkill"
                      name='skill'
                      className="form-control"
                      value={needSkill.skill}
                      onChange={handleNeedSkillChange}
                  />
                  <label htmlFor="skillProficiency">Proficiency:</label>
                  <select
                      id="skillProficiency"
                      name='proficiency'
                      className="form-control"
                      value={needSkill.proficiency}
                      onChange={handleNeedSkillChange}
                  >
                      <option value="0">Never Touched</option>
                      <option value="1">Beginner</option>
                      <option value="2">Intermediate</option>
                      <option value="3">Advanced</option>
                  </select>
              </div>
              <div className="form-group">
                <h2>List of Serve Skills</h2>
                <div className="create-skill-box">
                  <CreateSkillBox onAdd={addServeSkill} />
                </div>
                <div className="serve-skill-list">
                  {serveSkill.map((skillItem , index) => {
                    return (
                      <Skill
                        key={index}
                        id={index}
                        skill={skillItem.skill}
                        proficiency={skillItem.proficiency}
                        onDelete={deleteServeSkill}
                      />
                    )
                  })}
                </div>
              </div>
              <button type="submit" form="editProfileForm" className="submit-btn">Save Changes</button>
          </form>
      </div>
      </div>
  );
}

export default EditProfile
