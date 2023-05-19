import React from "react";
import email from "../../../public/assets/image/contact/email.svg";
import phone from "../../../public/assets/image/contact/phone.svg";
import styles from "../../styles/App.module.scss";

const NavbarContact = () => {
  return (
    <div className={styles["navbar-contact"]}>
      <div className={styles["navbar-contact__inner"]}>
        <img src={email} alt="email" />
        <img src={phone} alt="phone" />
        <p>+7 495 419-15-18</p>
      </div>

      <p className={styles["navbar-contact__order"]}>Заказать звонок</p>
    </div>
  );
};

export { NavbarContact };
