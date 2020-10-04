import React from "react";
import styles from "../../styles/ImageHeader.css";

const ImageHeader = (props) => {

  //adds event listener to browser window
  //returns window size when browser size is changed by user

  return (
    <div>
      <div className={styles.container}>
        <img
          id={0}
          onClick={props.changeView}
          className={styles.cell1}
          src={props.images.data[0].url}
        ></img>
        <img
          id={1}
          onClick={props.changeView}
          className={styles.cell2}
          src={props.images.data[1].url}
        ></img>
        <img
          id={2}
          onClick={props.changeView}
          className={styles.cell3}
          src={props.images.data[2].url}
        ></img>
        <img
          id={3}
          onClick={props.changeView}
          className={styles.cell4}
          src={props.images.data[3].url}
        ></img>
        <img
          id={4}
          onClick={props.changeView}
          className={styles.cell5}
          src={props.images.data[4].url}
        ></img>
      </div>
      <div className={styles.overlap}>
        <button className={styles.showAll} id={0} onClick={props.changeView}>
          Show all photos
        </button>
      </div>
    </div>
  );
};

export default ImageHeader;
