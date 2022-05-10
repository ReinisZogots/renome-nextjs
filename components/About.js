import React from "react";
import Image from "next/image";
import Structure from "../shared/jsons/structure.json";
import leftImage from "../public/assets/images/about_img_2.png";
import rightImage from "../public/assets/images/about_img_1.png";
import styles from "../styles/About.module.scss";

const About = () => {
  const aboutData = Structure.about;

  return (
    <div className={styles.about}>
      <div className={styles["about__image-container"]}>
        <div className={styles["about__left-image"]}>
          <Image
            src={leftImage}
            alt="Top floor of a house with one window"
            layout="responsive"
          />
        </div>
        <div className={styles["about__right-image"]}>
          <Image
            src={rightImage}
            alt="Two story house surrounded by trees"
            layout="responsive"
          />
        </div>
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