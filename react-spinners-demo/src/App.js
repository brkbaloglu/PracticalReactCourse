import './App.css';
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners"

function App() {
  return (
    <div className="App">
      <BounceLoader size={24} color='red' loading></BounceLoader>
      <BarLoader size={48} color='orange' loading></BarLoader>
      <BeatLoader size={72} color='maroon' loading></BeatLoader>
    </div>
  );
}

export default App;
