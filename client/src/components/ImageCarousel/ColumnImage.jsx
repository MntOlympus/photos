import React, { useState } from 'react';
import styles from "../../../styles/ColumnImage.css";



const ColumnImage = (props) => {

  return (
    <img className={styles.slider} src={props.image}></img>
  )
}

export default ColumnImage