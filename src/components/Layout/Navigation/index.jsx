import { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { LuDumbbell } from "react-icons/lu";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { RiHome5Fill } from "react-icons/ri";
import Logo from "../../../assets/logo.svg";
import HealthTracker from "../../../pages/HealthTracker/index";
import HireTrainers from "../../../pages/HireTrainers/index";
import WorkoutRoom from "../../../pages/WorkoutRoom/index";
import Homepage from "../../../pages/homepage";
import styles from "./nav.module.css";

const Navigation = ({ setCurrentPage }) => {
  const [activePage, setActivePage] = useState("dashboard");
  const handleNavClick = (page, component) => {
    setActivePage(page);
    setCurrentPage(component);
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo" width={200} />
      </div>
      <p className={styles.menuHeader}>Menu</p>
      <ul className={styles.navDesktop}>
        <li
          className={activePage === "dashboard" ? styles.active : ""}
          onClick={() => handleNavClick("dashboard", <Homepage />)}
        >
          <RiHome5Fill /> Dashboard
        </li>
        <li
          className={activePage === "healthTracker" ? styles.active : ""}
          onClick={() => handleNavClick("healthTracker", <HealthTracker />)}
        >
          <IoCalendarOutline /> Health Tracker
        </li>
        <li
          className={activePage === "workoutRoom" ? styles.active : ""}
          onClick={() => handleNavClick("workoutRoom", <WorkoutRoom />)}
        >
          <LuDumbbell /> Workout Room
        </li>
        <li
          className={activePage === "hireTrainers" ? styles.active : ""}
          onClick={() => handleNavClick("hireTrainers", <HireTrainers />)}
        >
          <PiPaperPlaneTiltBold /> Hire Trainers
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
