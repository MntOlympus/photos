import React from "react";
import styles from "../../styles/ImageHeader.css";

const SingleImage = (props) => {
  return (<img
    id={0}
    onClick={props.changeView}
    className={styles.cell1}
    src={props.images.data[0].url}
  ></img>
  )
}

export default SingleImage