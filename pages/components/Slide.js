import React from "react";
import styles from "../../styles/Carousel.module.scss";

const Slide = ({
  slide,
  slideData,
  slideIndex,
  activeIndex,
  reverseDirection,
}) => {
  const { title, subTitle, altTag, path } = slide;

  let position = "nextSlide";
  let zIndexReduce = "";
  
  if (slideIndex === activeIndex) {
    position = "activeSlide";
  }
  if (
    slideIndex === activeIndex - 1 ||
    (activeIndex === 0 && slideIndex === slideData.length - 1)
  ) {
    position = "prevSlide";
  }
  if (
    reverseDirection &&
    (slideIndex === activeIndex - 1 ||
      (activeIndex === 0 && slideIndex === slideData.length - 1))
  ) {
    zIndexReduce = "zIndexReduce";
  }

  return (
    <div className={`${styles.carousel__slide} ${styles[position]} ${styles[zIndexReduce]}`}>
      <img src={path} alt={altTag} />
      <div className={styles["carousel__slogan-container"]}>
        <h2 className={styles["carousel__slogan--heading"]}>{title}</h2>
        <h4 className={styles["carousel__slogan--subheading"]}>{subTitle}</h4>
      </div>
    </div>
  );
};

export default Slide;