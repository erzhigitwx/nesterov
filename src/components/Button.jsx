import React from "react";
import styles from "../styles/App.module.scss";
import arrowRight from "../../public/assets/image/arrowRight.svg";

const Button = ({ text, color = "#000000" }) => {
  return (
    <div className={styles.button}>
      <div />
      <li style={{ color: color }}>{text}</li>
      <img src={arrowRight} alt="arrow right" style={{ color: color }} />
    </div>
  );
};

export default Button;
