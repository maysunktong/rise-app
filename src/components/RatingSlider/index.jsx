import { useState } from "react";
import styles from "./slider.module.css";

const RatingSlider = ({ min = 0, max = 10000, step = 1 }) => {
  const [value, setValue] = useState(1);

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.slider}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default RatingSlider;
