import './App.css';
import CountUp, { useCountUp } from "react-countup"

function App() {

  const { countUp, start, pauseResume, reset, update} = useCountUp({
    duration: 5,
    end: 100000,
    startOnMount: false
  })
 
  
  return (
    <div className="App">
      <CountUp end={200} duration={5} start={1} prefix='$' decimal={2}> suffix="USD"</CountUp>
      <h1>
        {
          countUp
        }
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/ Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div>
  );
}

export default App;
