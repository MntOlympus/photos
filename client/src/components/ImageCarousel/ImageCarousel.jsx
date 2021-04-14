import React, { useState } from "react";
import styles from "../../../styles/ImageCarousel.css";
// import ImageCarouselNavBar from './ImageCarouselNavBar.jsx'

const ImageCarousel = (props) => {
  const [imageIndex, setImageIndex] = useState(0);
  let currentSlide = props.images.data[imageIndex];

  const arrowRightClick = () => {
    setImageIndex(imageIndex + 1)
    currentSlide = props.images.data[imageIndex];
  }

  const arrowLeftClick = () => {
    setImageIndex(imageIndex - 1)
    currentSlide = props.images.data[imageIndex];
  }

  if (imageIndex === 0) {
    return (
      <div>
        <ImageCarouselNavBar />
        <div className={styles.imageContainer}>
          <img className={styles.img} src={currentSlide.url}></img>
        </div>
        <div className={styles.arrowDivRight}>
          <button onClick={arrowRightClick} className={styles.rightArrow} id="arrow-right" ><i></i></button>
        </div>
      </div >
    )
  } else if (imageIndex === props.images.data.length - 1) {
    return (
      <div>
        <div className={styles.arrowDivLeft}>
          <button onClick={arrowLeftClick} className={styles.leftArrow} id="arrow-left" ><i></i></button>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={currentSlide.url}></img>
        </div>
      </div>
    )
  } else {
    return (
      <div>

        <div>
          <div className={styles.arrowDivLeft}>
            <button onClick={arrowLeftClick} className={styles.leftArrow} id="arrow-left" ><i></i></button>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.img} src={currentSlide.url}></img>
          </div>
          <div className={styles.arrowDivRight}>
            <button onClick={arrowRightClick} className={styles.rightArrow} id="arrow-right" ><i></i></button>
          </div>
        </div >
      </div >

    )
  }


};

export default ImageCarousel
