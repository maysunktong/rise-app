import { useState } from "react";
import styles from "./slider.module.css";

const RatingSlider = ({ min = 0, max = 10000, step = 1, value, onChange}) => {

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.slider}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </>
  );
};

export default RatingSlider;
