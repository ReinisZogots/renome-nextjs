import React from "react";
import Image from "next/image";
import styles from "../../styles/Carousel.module.scss"

const SlideButton = ({ direction, moveSlide }) => {
  return (
    <div className={styles["carousel__slide-button"]} onClick={moveSlide}>
      {direction === "next" 
        ? (<div className={styles["carousel__slide-button__arrow"]}>
            <Image width={24} height={24} src="/assets/icons/arrow-right.svg" alt="Right arrow icon" />
          </div>) 
        : (<div className={styles["carousel__slide-button__arrow"]}>
            <Image width={24} height={24} src="/assets/icons/arrow-left.svg" alt="Left arrow icon" />
          </div>)
      }
    </div>
  );
};

export default SlideButton;