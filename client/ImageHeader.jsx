import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/ImageHeader.css'

const ImageHeader = (props) => {

  const handleClick = (event) => {
    props.changeView(props.view, event.target.id)
  }

  return (<div >
            <div className={styles.container}>
                <img id={0} onClick ={handleClick} className={styles.cell1} width="500" height="500" src={props.images[0].url}></img>
                <img id={1} onClick ={handleClick} className={styles.cell2} src={props.images[1].url}></img>
                <img id={2} onClick ={handleClick} className={styles.cell3} src={props.images[2].url}></img>
                <img id={3} onClick ={handleClick} className={styles.cell4} src={props.images[3].url}></img>
                <img id={4} onClick ={handleClick} className={styles.cell5} src={props.images[4].url}></img>
            </div>
              <span>
                <button className={styles.showAll} id={0} onClick={handleClick} >Show all photos</button>
              </span>
          </div>)
}

export default ImageHeader