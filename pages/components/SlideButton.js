import React from "react";
import styles from "../../styles/Carousel.module.scss"

const SlideButton = ({ direction, moveSlide }) => {
  return (
    <div className={styles["carousel__slide-button"]} onClick={moveSlide}>
      {direction === "next" 
        ? (<img src="/assets/icons/arrow-right.svg" alt="Right arrow icon" />) 
        : (<img src="/assets/icons/arrow-left.svg" alt="Left arrow icon" />)
      }
    </div>
  );
};

export default SlideButton;