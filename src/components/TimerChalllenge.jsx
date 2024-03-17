import React, { useRef, useState } from 'react'


export const TimerChalllenge = ({title , targetTime}) => {
    const [timerstarted , setTimerStarted] = useState(false)
    const [timerExpired , setTimerExpired] = useState(false)

    const timer = useRef();

    function handleStart(){
        timer.current = setTimerStarted(true)
        setTimeout(() => {
            setTimerExpired(true)
        } , targetTime * 1000 )
        
    }

    function handleStop(){
        clearTimeout(timer.current)
    }

  return (
    <section className='challenge'>
        <h2>{title}</ h2>
        {timerExpired && "you lost"}
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
            <button onClick={handleStart}>
                {timerstarted ? "STOP CHALLENGE" : "START CHALLENGE" }
                {/*  */}
            </button>
        </p>
        <p className={timerstarted ? "acitve" : undefined}>
            {timerstarted ? "Timer is Running" : "Timer Inactive"}
        </p>
    </section>
  )
}
//start the challenge a timer starts then when you stop the timer in the middle of it all there are a lot of ways to do this
//well this one state we have here time started 
//finish pronlims one by one - minor to minor

//well we have two fucntion one to start the timer othe to stop the timer
//we need to call either one respectively -- if timer is running we call one function if it is not running we call another fuction(simple ternary operator will do the job)
// but we need to know whether it is running or not so inorder to check for that we need to establish a new state 

