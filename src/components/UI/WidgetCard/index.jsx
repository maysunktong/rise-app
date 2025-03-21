import WidgetData from "../../../data/widget";
import styles from "./healthCard.module.css";

const WidgetCard = ({ value, category }) => {
  const widget = WidgetData.find((item) => item.name === category);

  return (
    <div className={styles.widgetCard}>
      <div>
        <h3>{category}</h3>
        <p>{value}</p>
      </div>
      <div>
        {widget && (
          <div className={`${styles.widgetImageContainer} ${styles[category]}`}>
            <img src={widget.image} alt={category} width={100} />
          </div>
        )}
      </div>
    </div>
  );
};
export default WidgetCard;
