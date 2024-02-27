// components/ImageWithText.tsx

import React from "react";
import styles from "./ImageWithText.module.css";

interface ImageWithTextProps {
  imageUrl: string;
  text: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, text }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="Image" className={styles.image} />
      <div className={styles.overlayText}>{text}</div>
    </div>
  );
};

export default ImageWithText;
