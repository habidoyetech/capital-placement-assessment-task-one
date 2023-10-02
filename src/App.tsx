import React from 'react';
import SideBar from './Components/SideBar';
import TopNavigation from './Components/TopNavigation';
import ApplicationForm from './Components/ApplicationForm';


function App () {
  return (
    <div className=" w-screen box-border font-poppins">
      <div className='pb-4  w-full flex space-x-2 relative box-border'>
        <SideBar/>
        <div className='w-full box-border' >
          <TopNavigation/>
          <ApplicationForm/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
