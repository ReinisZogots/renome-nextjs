import React from "react";
import Image from "next/image";
import Structure from "../structure.json";
import styles from "../../styles/Menu.module.scss"

const Menu = ({ toggleSubMenu }) => {
  const dropDown = Structure?.menu;
  const getMenuItem = (menuItem, index) => {
    if (menuItem.title === "Search") {
      return (
        <li className={`${styles.menu__section} ${styles.menu__section__search}`} key={index}>
          <input
            className={styles["menu__section__search-input"]}
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
          />
          <Image width={14} height={17} src="/assets/icons/search.svg" alt="Magnifying glass icon" />
        </li>
      );
    } else if (menuItem.isSubMenu) {
      return (
        <li
          className={`${styles.menu__section} ${styles.menu__section__features}`}
          key={index}
          onClick={() => toggleSubMenu()}
        >
          <a className={styles.menu__section__text} href={menuItem.url}>
            {menuItem.title}
          </a>
          <div className={styles.menu__section__features__arrow}>
            <Image width={18} height={18} src="/assets/icons/arrow-right-features.svg" alt="Right arrow icon" />
          </div>
        </li>
      );
    } else {
      return (
        <li className={styles.menu__section} key={index}>
          <a className={styles.menu__section__text} href={menuItem.url}>
            {menuItem.title}
          </a>
        </li>
      );
    }
  };

  return (
    <ul className={styles.menu}>
      {dropDown.map((menu, index) => {
        return getMenuItem(menu, index);
      })}
    </ul>
  );
};

export default Menu;