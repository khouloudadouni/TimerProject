import React, { Component } from 'react';

const msToTime = ms => {
    const s =ms *1000
    const msPerSecond = 1000
    const msPerMinute = msPerSecond*60
    const msPerHour = msPerMinute*60

    const hours = Math.floor( s / msPerHour)
    const hoursRest = s % msPerHour
    const minutes = Math.floor(hoursRest / msPerMinute)
    const minutesRest = hoursRest % msPerMinute
    const Seconds = Math.floor(minutesRest / msPerSecond)
    return String(hours).padStart(2, 0)+
    ':'+String(minutes).padStart(2, 0)+
    ':'+String(Seconds).padStart(2, 0)
}

    const Time = ({ms}) => {return ( 
    <div className="time-container">
      <div className="time-inner-container">
            <div className="digits-time">
               {msToTime(ms)}
           </div>
                <div className="time-text">
                <div className="time-text-item">Hour</div>
                <div className="time-text-item">Minute</div>
                <div className="time-text-item">Seconde</div>
                </div>
          
       </div>
       </div>
            
         );
    
}
 
export default Time;