import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { postAPIcalls } from '../../utils/apiCalls';
import { useNavigate } from 'react-router';

const weekSchedule = [
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
];

const Schedule = () => {

  // Initialize the 7x24 state array
  const [weekSchedule, setWeekSchedule] = useState(Array.from({ length: 7 }, () =>
    Array.from({ length: 24 }, () => false)
  ));

  const [learnTime, setLearnTime] = useState('');
  const [teachTime, setTeachTime] = useState('');

  // Function to toggle the color of a specific cell
  const toggleColor = (dayIndex, hourIndex) => {
    const updatedSchedule = [...weekSchedule];
    updatedSchedule[dayIndex][hourIndex] = !updatedSchedule[dayIndex][hourIndex];
    setWeekSchedule(updatedSchedule);
  };
  const pageRoute = useNavigate() ;
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform update logic here, such as calling an API to update the user's profile
    const user = JSON.parse(localStorage.getItem("User")) ;
    const userName = user.name
    const userSchedule = {
      user: user.id,
      learnTime: learnTime,
      teachTime: teachTime,
      schedule: weekSchedule
    }
    //API- http://localhost:5000/api/schedulingAlgo/user/schedule/:id  /api/schedulingAlgo/user/schedule/:id
    try {
      const id = user.id ;
      const mid = "schedulingAlgo/user/schedule/" ;
      const response = postAPIcalls(mid, id, userSchedule) ;
      if(response.status === 200){
            // console.log(response.data);
            pageRoute('/schedules') ;
      }
    } catch (error) {
      alert("You have already added or other have not added!!") ;
    }
    // console.log(userSchedule);
    // You can replace the console logs with actual update logic
};

  return (
    <div>
      <Navbar />
      <form id="enterScheduleForm" onSubmit={handleSubmit}>
      <div style={{textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: '20px'
        }}>
        <h1 style={{fontSize: '2.5em' , paddingTop:'15px',paddingBottom:'10px'}}>Weekly Schedule</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '50px repeat(24, 45px)', gap: '5px' }}>
          {/* Empty space for day labels */}
          <div />
          {/* Displaying hour labels */}
          {Array.from({ length: 24 }, (_, hourIndex) => (
            <div key={`hour-${hourIndex}`} style={{ textAlign: 'center' , fontSize:'0.9em' }}>{hourIndex}:00</div>
          ))}
          {/* Displaying schedule grid */}
          {weekSchedule.map((daySchedule, dayIndex) => (
            <React.Fragment key={`day-${dayIndex}`}>
              {/* Displaying day labels */}
              <div style={{ textAlign: 'left', padding:'0px 5px 0px 10px', fontSize:'0.9em', alignContent: 'center'}}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][dayIndex]}</div>
              {/* Displaying each hour's schedule for the day */}
              {daySchedule.map((isGreen, hourIndex) => (
                <div
                  key={`cell-${dayIndex}-${hourIndex}`}
                  style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: isGreen ? 'green' : 'red',
                    cursor: 'pointer',
                  }}
                  onClick={() => toggleColor(dayIndex, hourIndex)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
        <div>
          <label htmlFor="learnTime">Learn Time(hours per week):</label>
          <input
            type="text"
            id="learnTime"
            value={learnTime}
            onChange={(e) => setLearnTime(e.target.value)}
            style={{backgroundColor: 'lightGrey' , margin:'10px'}}
            required
          />
        </div>
        <div>
          <label htmlFor="teachTime">Teach time(hours per week):</label>
          <input
            type="text"
            id="teachTime"
            value={teachTime}
            onChange={(e) => setTeachTime(e.target.value)}
            style={{backgroundColor: 'lightGrey' , margin:'10px'}}
            required
          />
        </div>
      <button type="submit" style={{width:'100px', height:'35px' , borderRadius: '4%' , backgroundColor: 'Cyan' , margin:'10px'}}>Submit</button>
      </div>
      </form>
    </div>
  );
};

export default Schedule;