import React, { useState, useEffect } from "react";
import styles from "../../../styles/SliderImage.css";

const SliderImage = (props) => {

  return (
    <div>
      <img onClick={props.changeView} className={styles.slider} src={props.images.data[0].url}></img>
    </div>

  )
}

export default SliderImage