import React from "react";
import Structure from "../structure.json";
import styles from "../../styles/About.module.scss";

const About = () => {
  const aboutData = Structure.about;

  return (
    <div className={styles.about}>
      <div className={styles["about__image-container"]}>
        <img
          className={styles["about__left-image"]}
          src="/assets/images/about_img_2.png"
          alt="Top floor of a house with one window"
        />
        <img
          className={styles["about__right-image"]}
          src="/assets/images/about_img_1.png"
          alt="Two story house surrounded by trees"
        />
      </div>
      <div className={styles["about__text-container"]}>
        <h2 className={styles.about__heading}>{aboutData.title}</h2>
        <h4 className={styles.about__subheading}>{aboutData.subTitle}</h4>
        <p className={styles.about__description}>{aboutData.text}</p>
      </div>
    </div>
  );
};

export default About;