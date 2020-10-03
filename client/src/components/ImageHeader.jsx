import React, {
  useState,
  useEffect,
  useLayoutEffect,
  Component,
  LoadingSpinner,
} from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/ImageHeader.css";

const ImageHeader = (props) => {
  console.log(props.images.data.length > 1);

  if (props.images.data.length > 1) {
    console.log("we are in the end game");
    return (
      <div>
        <button onClick={() => props.changeView(props.view)}>
          <img src={props.images.data[0].url}></img>
        </button>
      </div>
    );
  } else {
    return <div>hi</div>;
  }
};
// }

// <div className={styles.container}>
//     <img id={0} onClick ={handleClick} className={styles.cell1} src={props.images[0].url}></img>
//     <img id={1} onClick ={handleClick} className={styles.cell2} src={props.images[1].url}></img>
//     <img id={2} onClick ={handleClick} className={styles.cell3} src={props.images[2].url}></img>
//     <img id={3} onClick ={handleClick} className={styles.cell4} src={props.images[3].url}></img>
//     <img id={4} onClick ={handleClick} className={styles.cell5} src={props.images[4].url}></img>
//     <div className={styles.overlap}>
//       <button className={styles.showAll} id={0} onClick={handleClick} >Show all photos</button>
//     </div>

//     <div>

//     </div>

// </div>

export default ImageHeader;
