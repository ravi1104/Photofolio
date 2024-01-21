import React, {useState } from "react";
import styles from './Album.module.css';
import AlbumForm from "./AlbumForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AlbumList = ({ albums, selectAlbum ,addAlbum}) => {
    const [albumBtn, setAlbumBtn] = useState(false);


    const toggleAlbumBtn = () => {
        setAlbumBtn(!albumBtn);
    };
    const albumAndTost=(data)=>{
        addAlbum(data);
        toast("Added New Album");
    }
    return (
        <>
        <ToastContainer/>
            <button onClick={toggleAlbumBtn} className={styles.albumBtn}>{(albumBtn)?"Hide":"Create Album"}</button>
            {albumBtn && <AlbumForm addAlbum={albumAndTost} />}
            <div className={styles.albumList}>
                {albums.map((album) => (
                    <div key={album.id} onClick={() => selectAlbum(album.id)} className={styles.tile}>
                        <img src="gallery.png" alt="img" />
                        <p>{album.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AlbumList;
