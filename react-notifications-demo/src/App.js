import './App.css';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  )
}


toast.configure()

function App() {




  const notify = () => {
    toast("Basic notification!", {position: toast.POSITION.TOP_LEFT, autoClose: 8000})
    toast(<CustomToast />, {position: toast.POSITION.TOP_LEFT, autoClose: 8000})
    // toast("Basic notification!", {position: toast.POSITION.TOP_CENTER, autoClose: false})
    // toast("Basic notification!", {position: toast.POSITION.TOP_RIGHT})
    // toast("Basic notification!", {position: toast.POSITION.BOTTOM_LEFT})
    // toast("Basic notification!", {position: toast.POSITION.BOTTOM_CENTER})
    // toast("Basic notification!", {position: toast.POSITION.BOTTOM_RIGHT})
  //   toast.success("Success notification", {position: toast.POSITION.TOP_RIGHT})
  //   toast.info("info notification", {position: toast.POSITION.TOP_RIGHT})
  //   toast.warn("warn notification", {position: toast.POSITION.TOP_RIGHT})
  //   toast.error("error notification", {position: toast.POSITION.TOP_RIGHT})
  }
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
