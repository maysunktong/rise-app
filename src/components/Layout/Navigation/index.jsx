import HealthTracker from "../../../pages/HealthTracker/index";
import HireTrainers from "../../../pages/HireTrainers/index";
import WorkoutRoom from "../../../pages/WorkoutRoom/index";
import Homepage from '../../../pages/homepage';
import styles from "./nav.module.css"

const Navigation = ({ setCurrentPage }) => {
  return (
    <ul className={styles.navDesktop}>
      <li onClick={() => setCurrentPage(<Homepage />)}>Dashboard</li>
      <li onClick={() => setCurrentPage(<HealthTracker />)}>Health Tracker</li>
      <li onClick={() => setCurrentPage(<WorkoutRoom />)}>Workout Room</li>
      <li onClick={() => setCurrentPage(<HireTrainers />)}>Hire trainers</li>
    </ul>
  );
};
export default Navigation;
