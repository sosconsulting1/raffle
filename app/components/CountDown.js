import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

    function calculateRemainingTime() {
      const fiveDaysInMilliseconds = 5 * 24 * 60 * 60 * 1000; // 5 days
      const now = new Date().getTime();
      const endTime = now + fiveDaysInMilliseconds;
      return endTime - now;
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1000);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  return (
    
    <div>
    <h1 className='text-center font-bold text-xs text-[#085da0] mt-4'>Win $10,000 Each Week!</h1>
<h1 className='text-center font-bold text-xs text-[#085da0] mb-3'>
Next Add-On Deadline</h1>
   
    <div className='flex justify-center text-[#085da0] '>
      
      <div className='flex flex-col justify-center items-center text-xl'>
      <p className='text-[#085da0]'>{`${days}`}</p>
      <p>days</p>
      </div>

      <div className='flex flex-col ml-6 justify-center items-center text-xl'>
        <p>{`${hours}`}</p>
        <p>hrs</p>
        </div>
        <div className='flex flex-col mx-6 justify-center items-center text-xl ' >
        <p>{`${minutes}`}</p>
        <p>mins</p>
        </div>
        <div className='flex flex-col justify-center items-center text-xl '>
        <p>{`${seconds}`}</p>
        <p>secs</p>
        </div>
    </div>
    </div>
   
  );
};

export default Countdown;
