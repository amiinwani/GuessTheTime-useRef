import { useState , useRef } from "react";

export default function Player() {  
  const playerName = useRef()
  const [enteredPlayerName , setEnterdPlayerName ] = useState(null)

  function handleClick(){
    setEnterdPlayerName( playerName.current.value)
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown Entitiy"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

//other wise we are doing a shit ton of work just to have a little thing 
// doing it using the this will save computer power 

//adding times and challenges

//when start challlenge button is pressend the challenge should be started


