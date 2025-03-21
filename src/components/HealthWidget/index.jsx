import { useEffect, useState } from "react";
import WidgetCard from "../UI/WidgetCard";
import styles from "./healthWidget.module.css";

const HealthWidget = () => {
  const [waterCount, setWaterCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [sleepCount, setSleepCount] = useState(0);
  const [selectedMood, setSelectedMood] = useState("How are you?");

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
      <WidgetCard value={sleepCount} category={"sleep"} />
      <WidgetCard value={coffeeCount} category={"coffee"} />
      <WidgetCard value={stepCount} category={"steps"} />
      <WidgetCard value={selectedMood} category={"mood"} />
      <WidgetCard value={waterCount} category={"water"} />
    </div>
  );
};

export default HealthWidget;
