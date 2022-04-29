import React, { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import Submenu from "./Submenu";
import styles from "../../styles/Navigation.module.scss"

const Navigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(isSubmenuOpen ? false : !isMenuOpen);
    setIsSubMenuOpen(false);
    setIsCartOpen(false);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubmenuOpen);
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };

  return (
    <div className={styles.navigation}>
      <img className={styles.navigation__logo} src="/assets/images/logo.svg" alt="Logo" />
      <div className={styles["navigation__button-container"]}>
        <button onClick={() => toggleCart()}>
          <img
            className={styles["navigation__button-container__cart-icon"]}
            src="/assets/icons/cart.svg"
            alt="Shopping cart icon"
          />
        </button>
        <div className={styles["navigation__button-container__cart-item-count"]}>2</div>
        <img
          className={styles["navigation__button-container__vertical-line-icon"]}
          src="/assets/icons/vertical-line-20.svg"
          alt="Vertical line"
        />
        <button onClick={() => toggleMenu()}>
          {isMenuOpen || isSubmenuOpen 
            ? (<img
                className={styles["navigation__button-container__hamburger-icon"]}
                src="/assets/icons/close-icon.svg"
                alt="Close icon"
              />) 
            : (<img
                className={styles["navigation__button-container__hamburger-icon"]}
                src="/assets/icons/hamburgerMenu18.svg"
                alt="Hamburger menu icon"
              />)
          }
        </button>
      </div>

      {/* {isMenuOpen || isSubmenuOpen
        ? document.body.classList.add("noScroll")
        : document.body.classList.remove("noScroll")
      } */}
      {isMenuOpen && <Menu toggleSubMenu={toggleSubMenu} />}
      {isCartOpen && <Cart />}
      {isSubmenuOpen && <Submenu toggleSubMenu={toggleSubMenu} />}
    </div>
  );
};

export default Navigation;