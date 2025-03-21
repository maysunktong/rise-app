import styles from "./healthCard.module.css";

const WidgetCard = ({ value, category }) => {
  return (
    <div className={styles.widgetCard}>
      <div>
        <h3>{category}</h3>
        <p>{value}</p>
      </div>
      <div>
        <img src={`../../../assets/widget/${category}.png`} alt={category} />
      </div>
    </div>
  );
};
export default WidgetCard;
