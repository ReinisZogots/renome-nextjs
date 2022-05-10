import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4 className={styles.footer__heading}>follow us:</h4>
      <div className={styles["footer__social-media"]}>
        <a
          href="http://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height={34}
            width={34}
            src="/assets/icons/facebook-round-line.svg"
            alt="Facebook icon"
          />
        </a>
        <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
          <Image
            height={34}
            width={34}
            src="/assets/icons/twitter-round-line.svg"
            alt="Twitter icon"
          />
        </a>
        <a
          href="http://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height={34}
            width={34}
            src="/assets/icons/google-plus-round-line.svg"
            alt="Google plus icon"
          />
        </a>
      </div>
      <div className={styles.footer__logo} >
        <Image height={20} width={76} src="/assets/images/logo.svg" alt="Renome logo" />
      </div>
      <h4 className={styles["footer__copyright-text"]}>copyright 2022 renome by estetiq</h4>
    </div>
  );
};

export default Footer;