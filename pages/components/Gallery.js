import React from "react";
import Structure from "../structure.json";
import styles from"../../styles/Gallery.module.scss";

const Gallery = () => {
  const Gallery = Structure.gallery;
  const Images = Gallery.galleryImages;
  
  return (
    <div className={styles.gallery}>
      <div className={styles["gallery__text-container"]}>
        <h2 className={styles.gallery__heading}>{Gallery.title}</h2>
        <h4 className={styles.gallery__subheading}>{Gallery.subTitle}</h4>
      </div>
      <div className={styles["gallery__image-container"]}>
        {Images.map((image, index) => {
          return (
            <img
              className={styles.gallery__image}
              src={image.path}
              alt={image.altTag}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;