import React, { useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';

// Group component representing each group of items
const Group = ({ groupName, items }) => {
  // Function to handle scheduling
  const handleSchedule = () => {
    // Implement your scheduling logic here
    console.log(`${groupName} - Schedule button clicked`);
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-96 p-4 bg-gray-100 rounded-lg shadow-md mb-4">
          <div className="border-b mb-4 pb-4">
            <h1 className="text-xl font-bold mb-2">{groupName}</h1>
            <div>
            {items ? 
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
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

const YourComponent = () => {
  // State variables to manage the list of items and their checked status for each group

//   const [groupItems, setGroupItems] = useState({});
//   useEffect(() => {
//       setGroupItems(JSON.parse(localStorage.getItem("groupDetails"))) ;
//   }, [])

//   const [group2Items, setGroup2Items] = useState([
//     { id: 1, name: 'Item A', checked: false },
//     { id: 2, name: 'Item B', checked: false },
//     { id: 3, name: 'Item C', checked: false },
//     // Add more items as needed
//   ]);

  return (
    <div > {/* Add margin-top here */}
      <Navbar />
      <Group groupName="Group 1" items={JSON.parse(localStorage.getItem("groupDetails"))} />
    </div>
  );
};

export default YourComponent;