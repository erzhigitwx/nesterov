import React, { useCallback } from "react";
import styles from "../../styles/App.module.scss";
import mapPin from "../../../public/assets/image/mapPin.svg";
import logo from "../../../public/assets/image/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { burgerChangeActionCreator } from "../../store/burgerMenu";
import { Burger } from "./burger/Burger";
import { NavbarContact } from "./NavbarContact";

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.burgerChange.isOpen);
  const changeIsOpen = useCallback(function () {
    dispatch(burgerChangeActionCreator());
  }, []);
  return (
    <header className={styles.header}>
      {(isOpen && <Burger dispatch={dispatch} />) || (
        <div className={styles.navbar}>
          <div className={styles["navbar-first__column"]}>
            <img src={logo} alt="logo" className={styles["navbar-logo"]} />

            <div className={styles["navbar-map"]}>
              <img src={mapPin} alt="pin" />
              <p>Новосибирск</p>
            </div>
          </div>

          <div className={styles["navbar-second__column"]}>
            <NavbarContact />
            <div className={styles["navbar-burger"]} onClick={changeIsOpen}>
              <div />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export { Navbar };
