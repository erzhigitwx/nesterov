import React from "react";
import styles from "../../../styles/App.module.scss";
import { NavbarContact } from "../NavbarContact";
import { burgerChangeActionCreator } from "../../../store/burgerMenu";
import { Link } from "react-router-dom";

const Burger = ({ dispatch }) => {
  return (
    <div className={styles.burger}>
      <div className={styles["burger-header"]}>
        <NavbarContact />
        <div
          className={styles["navbar-burger"]}
          onClick={() => dispatch(burgerChangeActionCreator())}
        >
          <div />
        </div>
      </div>
      <div
        className={styles["burger-content"]}
        onClick={() => dispatch(burgerChangeActionCreator())}
      >
        <Link to={"/"}>
          <p>Главная</p>
        </Link>
        <Link to={"/aboutProject"}>
          <p>О проекте</p>
        </Link>
        <Link to={"/infrastructura"}>
          <p>Инфраструктура</p>
        </Link>
        <Link to={"/apartaments"}>
          <p>Квартиры</p>
        </Link>
        <Link to={"/documents"}>
          <p>Документы</p>
        </Link>
        <Link to={"/rules"}>
          <p>Условия продаж</p>
        </Link>
        <Link to={"/history"}>
          <p>Ход строительства</p>
        </Link>
        <Link to={"/contacts"}>
          <p>Контакты</p>
        </Link>
        <Link to={"/about"}>
          <p>О застройщике</p>
        </Link>
      </div>
    </div>
  );
};

export { Burger };
