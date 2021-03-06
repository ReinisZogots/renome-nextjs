import React from "react";
import Image from "next/image";
import Structure from "../shared/jsons/structure.json";
import styles from "../styles/Submenu.module.scss";

const Submenu = ({ toggleSubMenu, setIsSubMenuOpen }) => {
  const subDropDown = Structure?.menu;
  const reducedMenuItem = subDropDown.reduce((acc, menuItem) => {
    if (menuItem.isSubMenu) return { ...acc, menuItem };
    return acc;
  }, []);

  return (
    <ul className={styles["submenu"]}>
      <div
        className={styles["submenu__section__back-section"]}
        onClick={() => toggleSubMenu()}
      >
        <div className={styles["submenu__section__back-section__arrow"]}>
          <Image
            width={18}
            height={18}
            src="/assets/icons/arrow-left-features.svg"
            alt="Left arrow icon"
          />
        </div>
        <div
          className={`${styles["submenu__section__submenu-text"]} ${styles["submenu__section__submenu-text__back-text"]}`}
        >
          back
        </div>
      </div>
      {reducedMenuItem.menuItem.subMenu.map((submenuItem, index) => {
        return (
          <li className={styles["submenu__section"]} key={index}>
            <a
              className={styles["submenu__section__submenu-text"]}
              href={submenuItem.url}
            >
              {submenuItem.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Submenu;
