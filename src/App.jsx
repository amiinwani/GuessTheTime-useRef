import Player from './components/Player.jsx';
import { TimerChalllenge } from './components/TimerChalllenge';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChalllenge title={"easy"} targetTime={1}/>
        <TimerChalllenge title={"Not easy"} targetTime={5}/>
        <TimerChalllenge title={"Getting tough"} targetTime={10}/>
        <TimerChalllenge title={"Pros only"} targetTime={15}/>
      </div>
    </>
  );
}

export default App;




