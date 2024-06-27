import { useState } from 'react';
import './App.css';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function App() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className="App">
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="dd/MM/yyyy" filterDate={date => date.getDay() !== 6 && date.getDay !== 0} isClearable></DatePicker>
    </div>
  );
}

export default App;
