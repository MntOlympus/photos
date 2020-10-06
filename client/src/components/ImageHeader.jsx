import React from "react";
import styles from "../../styles/ImageHeader.css";

const ImageHeader = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <figure className={styles.gallery_item_1}>
          <img onClick={props.changeView} src={props.images.data[0].url} className={styles.gallery_image_1}></img>
        </figure>
        <figure className={styles.gallery_item_2}>
          <img onClick={props.changeView} src={props.images.data[1].url} className={styles.gallery_image_2}></img>
        </figure>
        <figure className={styles.gallery_item_3}>
          < img onClick={props.changeView} src={props.images.data[2].url} className={styles.gallery_image_3}></img >
        </figure >
        <figure className={styles.gallery_item_4}>
          < img onClick={props.changeView} src={props.images.data[3].url} className={styles.gallery_image_4}></img >
        </figure >
        <figure className={styles.gallery_item_5}>
          < img onClick={props.changeView} src={props.images.data[4].url} className={styles.gallery_image_5}></img >
        </figure >
      </div >
    </div >
  );
};

export default ImageHeader;


{/* <div className={styles.gallery}>
<div className={styles.mainImage}>
  <img
    id={0}
    onClick={props.changeView}
    className={styles.cell1}
    src={props.images.data[0].url}
  ></img>
</div>
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
</div> */}