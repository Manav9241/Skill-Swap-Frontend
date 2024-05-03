import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { getAPIcalls } from "../../utils/apiCalls";
import { useNavigate } from "react-router";

function Matching() {
  const [showSkillTeach, setShowSkillTeach] = useState(false);
  const [showSkillLearn, setShowSkillLearn] = useState(false);
  const [matchingData, setmatchingData] = useState([]) ;
  const [graphMatchingData, setgraphMatchingData] = useState([]) ;

  const handleSkillTeachClick = async () => {
    setShowSkillTeach(true);
    setShowSkillLearn(false);
    try {
      const userId = JSON.parse(localStorage.getItem("User")).id;
      const mid = "matchingAlgo/user/match/";
      const id = userId;
      // console.log(id);
      const response = await getAPIcalls(mid, id);
      if (response.status === 200) {
        setmatchingData(response.data);
      }
    } catch (error) {}
  };

  const handleSkillLearnClick = async() => {
    setShowSkillLearn(true);
    setShowSkillTeach(false);
    try {
      const userId = JSON.parse(localStorage.getItem("User")).id;
      const mid = "matchingAlgo/user/match/graph/";
      const id = userId;
      // console.log(id);
      const response = await getAPIcalls(mid, id);
      if (response.status === 200) {
        setgraphMatchingData(response.data);
      }
    } catch (error) {}
  };
  const pageRoute = useNavigate() ;
  const handleConnect = async(groupId)=>{
      try {
            const userId = JSON.parse(localStorage.getItem("User")).id ;
            const mid = "matchingAlgo/user/confirmation/" ;
            const id = groupId + "/" + userId ;
            const response = await getAPIcalls(mid, id) ;
            if(response.status === 200){
                  localStorage.setItem("groupDetails", JSON.stringify(response.data)) ;
                  pageRoute('/group') ;
            }
            
      } catch (error) {
            
      }
  } ;
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div className="w-1/2 max-w-lg p-4">
          <button
            onClick={handleSkillTeachClick}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
          >
            One to One Matching
          </button>
          {showSkillTeach && matchingData.length > 0 ? (
            <div>
              {matchingData.map((groups, i) => (
                  
                <div className="bg-white p-4 border border-gray-300 rounded-md">
                  Group: {i+1}
                  {     
                        groups.group.map((item) =>(
                              <div>
                                    <h2>Instructor: {item.teacher}</h2>
                                    <h2>Learner: {item.student}</h2>
                                    <h2>Skill: {item.skill}</h2>
                                    <hr />
                              </div>
                        ))
                  }
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleConnect(groups.id)}>
                    Connect
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
                  <h2>Sorry no match until now!!</h2>
                  <h2>Please keep calm, Our strongest algorithm is working for you</h2>
                  <h2>If not found, try Right side matching for bigger group</h2>
            </div>
          )}
        </div>
        <div className="w-1/2 max-w-lg p-4">
          <button
            onClick={handleSkillLearnClick}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
          >
            Group Matching
          </button>
          {showSkillLearn && graphMatchingData.length > 0 ? (
            <div>
              {graphMatchingData.map((groups, i) =>(
                  <div className="bg-white p-4 border border-gray-300 rounded-md mb-4">
                        Group: {i+1}
                  {
                        groups.group.map((item) =>(
                              <div>
                                    <h2>Instructor: {item.teacher}</h2>
                                    <h2>Learner: {item.student}</h2>
                                    <h2>Skill: {item.skill}</h2>
                                    <hr />
                              </div>
                        ))
                  }
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleConnect(groups.id)}>
                    Connect
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
                  <h2>Sorry no match until now!!</h2>
                  <h2>Please keep calm you group is comming soon</h2>
                  <h2>If not found, try Left side premium version</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Matching;
