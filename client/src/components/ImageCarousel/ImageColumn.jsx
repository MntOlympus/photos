import React, { useState, useEffect } from "react";
import styles from "../../../styles/ColumnImage.css";
import ColumnImage from './ColumnImage.jsx'

const ImageColumn = (props) => {

  const allImages = props.images.data;

  return (
    <div>
      {allImages.map((image) =>
        <ColumnImage className={styles.slider} image={image.url} />
      )}
    </div>

  )
}

export default ImageColumn