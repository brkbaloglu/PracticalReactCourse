import './App.css';
import ReactPlayer from "react-player"


function App() {
  return (
    <div className="App">
      <ReactPlayer 
      url="video-url"
      controls
      width="480px" 
      height="240px"
      onReady={() => console.log("onReady")}
      onStart={() => console.log("onStart")}
      onPause={() => console.log("onPause")}
      onEnded={() => console.log("onEnded")}
      onError={() => console.log("onError")}
      ></ReactPlayer>      
    </div>
  );
}

export default App;
