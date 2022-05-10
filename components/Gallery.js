import React from "react";
import Structure from "../shared/jsons/structure.json";
import Image from "next/image";
import styles from"../styles/Gallery.module.scss";

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
            <div className={styles.gallery__image} key={index} >
              <Image
                src={image.path}
                alt={image.altTag}
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;