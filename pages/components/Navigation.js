import React, { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import Submenu from "./Submenu";
import Image from "next/image";
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
      <div className={styles.navigation__logo}>
      <Image width={96} height={25}  src="/assets/images/logo.svg" alt="Logo" />
      </div>
      <div className={styles["navigation__button-container"]}>
        <button onClick={() => toggleCart()}>
          <Image
            width={15}
            height={19}
            src="/assets/icons/cart.svg"
            alt="Shopping cart icon"
          />
        </button>
        <div className={styles["navigation__button-container__cart-item-count"]}>2</div>
        <div className={styles["navigation__button-container__vertical-line-icon"]}>
          <Image
            width={8}
            height={95} 
            src="/assets/icons/vertical-line-20.svg"
            alt="Vertical line"
          />
        </div>
        <button onClick={() => toggleMenu()}>
          {isMenuOpen || isSubmenuOpen 
            ? (<div className={styles["navigation__button-container__hamburger-icon"]}>
                <Image
                  width={20}
                  height={18}
                  src="/assets/icons/close-icon.svg"
                  alt="Close icon"
                />
              </div>) 
            : (<div className={styles["navigation__button-container__hamburger-icon"]}>
                <Image
                  width={20}
                  height={18}
                  src="/assets/icons/hamburgerMenu18.svg"
                  alt="Hamburger menu icon"
                />
              </div>)
          }
        </button>
      </div>

      {isMenuOpen && <Menu toggleSubMenu={toggleSubMenu} />}
      {isCartOpen && <Cart />}
      {isSubmenuOpen && <Submenu toggleSubMenu={toggleSubMenu} />}
    </div>
  );
};

export default Navigation;