import { useEffect, useState } from "react";
import WidgetCard from "../UI/WidgetCard";
import styles from "./healthWidget.module.css";

const HealthWidget = () => {
  const [waterCount, setWaterCount] = useState("--");
  const [coffeeCount, setCoffeeCount] = useState("--");
  const [stepCount, setStepCount] = useState("--");
  const [sleepCount, setSleepCount] = useState("--");
  const [selectedMood, setSelectedMood] = useState("--");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("trackerList")) || [];
    if (storedData.length > 0) {
      const latestItem = storedData[0];
      setWaterCount(latestItem.waterCount || 0);
      setCoffeeCount(latestItem.coffeeCount || 0);
      setStepCount(latestItem.stepCount || 0);
      setSleepCount(latestItem.sleepCount || 0);
      setSelectedMood(latestItem.selectedMood || "How are you?");
    }
  }, []);

  return (
    <div className={styles.healthWidget}>
      <WidgetCard value={stepCount} category={"steps"} />
      <WidgetCard value={sleepCount} category={"sleep"} />
      <WidgetCard value={coffeeCount} category={"coffee"} />
      <WidgetCard value={selectedMood} category={"mood"} />
      <WidgetCard value={waterCount} category={"water"} />
      <WidgetCard value={waterCount} category={"bmi"} />
    </div>
  );
};

export default HealthWidget;
