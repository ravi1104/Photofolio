// import React,{useEffect,useState} from "react";
import styles from './Album.module.css'

const AlbumList=()=>{
    // useEffect(()=>{

    // })
    return (
        <div className={styles.albumList}>
            <div className={styles.tile}>
                <img src="gallery.png" alt="img"></img>
                <p>Name</p>
            </div>            <div className={styles.tile}>
                <img src="gallery.png" alt="img"></img>
                <p>Name</p>
            </div>
            
        </div>
    )
}

export default AlbumList;