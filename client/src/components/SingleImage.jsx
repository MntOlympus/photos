import React from "react";
import styles from "../../styles/SingleImage.css";

const SingleImage = (props) => {
  return (
    <div>
      <img id={0} onClick={props.changeView} className={styles.img} src={props.images.data[0].url}></img>
    </div>
  )
}

export default SingleImage