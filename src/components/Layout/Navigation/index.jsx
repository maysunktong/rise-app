import HealthTracker from "../../../pages/HealthTracker/index";
import HireTrainers from "../../../pages/HireTrainers/index";
import WorkoutRoom from "../../../pages/WorkoutRoom/index";
import Homepage from '../../../pages/homepage';

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav className="nav">
      <li onClick={() => setCurrentPage(<Homepage />)}>Home</li>
      <li onClick={() => setCurrentPage(<HealthTracker />)}>Health Tracker</li>
      <li onClick={() => setCurrentPage(<WorkoutRoom />)}>Fitness Room</li>
      <li onClick={() => setCurrentPage(<HireTrainers />)}>Hire trainers</li>
    </nav>
  );
};
export default Navigation;
