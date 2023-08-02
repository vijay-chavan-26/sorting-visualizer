import React from 'react'

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <div className="time-com">
        <h1 className="time-com-heading">Time Complexity</h1>
        <p id='Time_Worst' className='time-com-para'>Worst Case :</p>
        <p id='Time_Average' className='time-com-para'>Average Case :</p>
        <p id='Time_Best' className='time-com-para'>Best Case :</p>
      </div>
      <div className="speed-com">
        <h1 className="speed-com-heading">Speed Complexity</h1>
        <p id='Space_Worst' className='space-com-para'>Worst Case :</p>
      </div>
    </div>
  )
}

export default Sidebar