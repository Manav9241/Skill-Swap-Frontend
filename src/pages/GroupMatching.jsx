import React, { useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import { getAPIcalls } from '../utils/apiCalls';



export default function YourComponent() {
  // State variables to manage the list of items and their checked status for each group
  const [message, setmessage] = useState(null)
  const [items, setItems] = useState(null);

  const handleSchedule = async(flag)=>{
    if(flag){
      // go to schedule fill page
    }else{
      // return showing not all accepted
      setmessage("All are not accepted so please wait for them!!") ;
    }
  } ;

  const fetchData = async ()=>{
    const mid = "matchingAlgo/user/group/" ;
      const id = JSON.parse(localStorage.getItem("User")).id ;
      const response = await getAPIcalls(mid, id) ;
      if(response.status === 200) {
        setItems(response.data) ;
      }
  }
  useEffect( ()=> {
      fetchData() ;
  }, [])



  return (
    <div > {/* Add margin-top here */}
      <Navbar />
      <div>
      <div className="flex justify-center mt-10">
        <div className="w-96 p-4 bg-gray-100 rounded-lg shadow-md mb-4">
          <div className="border-b mb-4 pb-4">
            <h1 className="text-xl font-bold mb-2">Ritik</h1>
            <div>
            {items != null ? 
            ( 
                  
                  items.result.map(item => (
                  <div key={item.name} className="flex items-center mb-2">
                    <span>{item.name}</span>
                    <div
                      className={`w-4 h-4 ml-2 rounded-full ${item.checked ? 'bg-green-500' : 'bg-red-500'}`}
                    ></div>
                  </div>
                ))
            )
            
            : ("")
            }
              
            </div>
          </div>
          <button
            onClick={() => handleSchedule(items.done)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
          {message!= null ? {message} : ("")}
            Schedule
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
