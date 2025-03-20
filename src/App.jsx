import "./index.css";
import { useState } from "react";
import Homepage from './pages/homepage';
import HealthTracker from './pages/HealthTracker';
import WorkoutRoom from './pages/WorkoutRoom';
import HireTrainers from './pages/HireTrainers';

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <>
      <nav className="nav">
        <li onClick={() => setCurrentPage(<Homepage />)}>Home</li>
        <li onClick={() => setCurrentPage(<HealthTracker />)}>Health Tracker</li>
        <li onClick={() => setCurrentPage(<WorkoutRoom />)}>Fitness Room</li>
        <li onClick={() => setCurrentPage(<HireTrainers />)}>Hire trainers</li>        
      </nav>
      {currentPage}
    </>
  );
}

export default App;
