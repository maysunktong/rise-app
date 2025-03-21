import HealthCard from "../UI/HealthCard";
import styles from "./healthWidget.module.css";

const HealthWidget = () => {
  return (
    <div className={styles.healthWidget}>
      <HealthCard />
      <HealthCard />
      <HealthCard />
      <HealthCard />
      <HealthCard />
      <HealthCard />
    </div>
  );
};
export default HealthWidget;
