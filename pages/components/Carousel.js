import React, { useState } from "react";
import Structure from "../structure.json";
import Slide from "../components/Slide";
import SlideButton from "../components/SlideButton";
import styles from "../../styles/Carousel.module.scss";

const Carousel = () => {
  const slideData = Structure?.carousel;
  const lastIndex = slideData.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [reverseDirection, setReverseDirection] = useState(false);

  const prevSlide = () => {
    setActiveIndex(getPrevSlideIndex());
    setReverseDirection(true);
  };

  const nextSlide = () => {
    setActiveIndex(getNextSlideIndex());
    setReverseDirection(false);
  };
  
  const getPrevSlideIndex = () => {
    return activeIndex === 0 ? lastIndex : activeIndex - 1;
  };

  const getNextSlideIndex = () => {
    return activeIndex === lastIndex ? 0 : activeIndex + 1;
  };

  const getSlide = (slide, slideIndex) => {
    if (
      slideIndex === activeIndex ||
      slideIndex === getPrevSlideIndex() ||
      slideIndex === getNextSlideIndex()
    ) {
      return (
        <Slide
          key={slideIndex}
          slideIndex={slideIndex}
          slide={slide}
          activeIndex={activeIndex}
          slideData={slideData}
          reverseDirection={reverseDirection}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <div className={styles.carousel}>
      <div className={styles["carousel__slide-container"]}>
        {slideData.map((slide, slideIndex) => {
          return getSlide(slide, slideIndex);
        })}
      </div>
      <div className={styles.carousel__control}>
        <SlideButton direction="prev" moveSlide={prevSlide} />
        <SlideButton direction="next" moveSlide={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;