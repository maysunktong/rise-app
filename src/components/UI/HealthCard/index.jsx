import styles from "./healthCard.module.css"

const HealthCard = () => {
  return <div className={styles.healthCard}>
    <div>
      <h3>Name</h3>
      <p>stats</p>
    </div>
    <div>
      image
    </div>
  </div>;
};
export default HealthCard;
