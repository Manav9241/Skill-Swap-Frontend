import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { getAPIcalls } from '../../utils/apiCalls';

// Sample data for demonstration

const scheduleData = [
  [
    [{ teacher: 'user4', student: 'user1', skill: 'C++' },{ teacher: 'user5', student: 'user3', skill: 'Python' }], 
    [{ teacher: 'user3', student: 'user2', skill: 'JavaScript' }],
    [],
    [],
    [{ teacher: 'user5', student: 'user3', skill: 'Python' }],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [{ teacher: 'user2', student: 'user4', skill: 'Java' }],
    [],
    [{ teacher: 'user3', student: 'user1', skill: 'HTML/CSS' }],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [{ teacher: 'user4', student: 'user1', skill: 'C++' }], 
    [{ teacher: 'user3', student: 'user2', skill: 'JavaScript' }],
    [],
    [],
    [{ teacher: 'user5', student: 'user3', skill: 'Python' }],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [{ teacher: 'user2', student: 'user4', skill: 'Java' }],
    [],
    [{ teacher: 'user3', student: 'user1', skill: 'HTML/CSS' }],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [{ teacher: 'user4', student: 'user1', skill: 'C++' }], 
    [{ teacher: 'user3', student: 'user2', skill: 'JavaScript' }],
    [],
    [],
    [{ teacher: 'user5', student: 'user3', skill: 'Python' }],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [{ teacher: 'user2', student: 'user4', skill: 'Java' }],
    [],
    [{ teacher: 'user3', student: 'user1', skill: 'HTML/CSS' }],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [{ teacher: 'user4', student: 'user1', skill: 'C++' }], 
    [{ teacher: 'user3', student: 'user2', skill: 'JavaScript' }],
    [],
    [],
    [{ teacher: 'user5', student: 'user3', skill: 'Python' }],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [{ teacher: 'user2', student: 'user4', skill: 'Java' }],
    [],
    [{ teacher: 'user3', student: 'user1', skill: 'HTML/CSS' }],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [{ teacher: 'user4', student: 'user1', skill: 'C++' }], 
    [{ teacher: 'user3', student: 'user2', skill: 'JavaScript' }],
    [],
    [],
    [{ teacher: 'user5', student: 'user3', skill: 'Python' }],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [{ teacher: 'user2', student: 'user4', skill: 'Java' }],
    [],
    [{ teacher: 'user3', student: 'user1', skill: 'HTML/CSS' }],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [{ teacher: 'user4', student: 'user1', skill: 'C++' }], 
    [{ teacher: 'user3', student: 'user2', skill: 'JavaScript' }],
    [],
    [],
    [{ teacher: 'user5', student: 'user3', skill: 'Python' }],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [{ teacher: 'user2', student: 'user4', skill: 'Java' }],
    [],
    [{ teacher: 'user3', student: 'user1', skill: 'HTML/CSS' }],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [{ teacher: 'user4', student: 'user1', skill: 'C++' }], 
    [{ teacher: 'user3', student: 'user2', skill: 'JavaScript' }],
    [],
    [],
    [{ teacher: 'user5', student: 'user3', skill: 'Python' }],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [{ teacher: 'user2', student: 'user4', skill: 'Java' }],
    [],
    [{ teacher: 'user3', student: 'user1', skill: 'HTML/CSS' }],
    [],
    [],
    [],
    [],
    []
  ],
  // Repeat similar structures for other days...
];

const Schedule = () => {
  const [schedule, setSchedule] = useState(scheduleData);

  const fetchData = async() =>{
      const id = JSON.parse(localStorage.getItem("User")).id ;
      const mid = "schedulingAlgo/user/show-schedule/"
      try {
            const response = await getAPIcalls(mid, id) ;
            if(response.status === 200){
                  console.log(response.data[0].scheduleMatrix); 
                  setSchedule(response.data[0].scheduleMatrix) ;
            }
      } catch (error) {
            
      }
  }

  useEffect(() => {
   fetchData() ;
  }, [])

  return (
    <div>
        <Navbar />
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mt-5 mb-4">Schedule</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              {Array.from({ length: 7 }, (_, i) => <th key={i} className="px-4 py-2">Day {i + 1}</th>)}
            </tr>
          </thead>
          <tbody>
            {/* Loop through time slots */}
            {Array.from(Array(24).keys()).map((hour) => (
              <tr key={hour}>
                <td className="px-4 py-2 border border-gray-300">{`${hour < 10 ? '0' : ''}${hour}:00 - ${hour < 9 ? '0' : ''}${hour + 1}:00`}</td>
                {/* Loop through days */}
                {schedule.map((daySchedule, dayIndex) => (
                  <td key={`${dayIndex}-${hour}`} className="px-4 py-2 border border-gray-300">
                    {/* Display details if available */}
                    {daySchedule[hour] && daySchedule[hour].length > 0 ? (
                      daySchedule[hour].map((detail, index) => (
                        <div key={index}>
                          <p>Teacher : {detail.teacherName}</p>
                          <p>Learner : {detail.studentName}</p>
                          <p>Skill : {detail.skill}</p>
                          {/* Add some spacing between records */}
                          {index !== daySchedule[hour].length - 1 && <hr className="my-2" />}
                        </div>
                      ))
                    ) : (
                      <p>None</p>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Schedule;