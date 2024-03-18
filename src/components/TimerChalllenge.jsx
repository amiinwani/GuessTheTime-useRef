import React, { useRef, useState } from 'react'
import { ResultModal } from './ResultModal';


export const TimerChalllenge = ({title , targetTime}) => {
    // const [timerstarted , setTimerStarted] = useState(false)
    // const [timerExpired , setTimerExpired] = useState(false)
    const [timeRemaining , setTimeRemaining ] = useState(targetTime * 1000 )
    const timer = useRef();
    const dialog = useRef();

    const timerActive = timeRemaining > 0 &&  timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000)

    }

    function handleStart(){
         
        timer.current = setInterval(() => {
            timer.current = setTimeRemaining(prevTime => prevTime - 10 );
        } , 10 )
        
        setTimerStarted(true)
    }

    function handleStop(){
        clearInterval(timer.current)
    }

  return (
    <>
   { <ResultModal ref={dialog} targetTime={targetTime} result={"lossed "}/>}
    <section className='challenge'>
        <h2>{title}</ h2>
        {timerExpired && "you lost"}
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
            <button onClick={timerActive ? handleStop : handleStart }>
                {timerActive ? "STOP CHALLENGE" : "START CHALLENGE" }
                {/*  */}
            </button>
        </p>
        <p className={timerActive ? "acitve" : undefined}>
            {timerActive ? "Timer is Running" : "Timer Inactive"}
        </p>
    </section>
    </>
  )
}

//shopfy is not paying or what do you mean that 

//start the challenge a timer starts then when you stop the timer in the middle of it all there are a lot of ways to do this
//well this one state we have here time started 
//finish pronlims one by one - minor to minor

//well we have two fucntion one to start the timer othe to stop the timer
//we need to call either one respectively -- if timer is running we call one function if it is not running we call another fuction(simple ternary operator will do the job)
// but we need to know whether it is running or not so inorder to check for that we need to establish a new state 
//well shit posting on twitter that is one hell of a way to do somehting daniel it is pretl 

