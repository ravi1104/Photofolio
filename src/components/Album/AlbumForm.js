import React, { useRef } from "react";
import styles from './Album.module.css'

const AlbumForm = ({ addAlbum }) => {
    const titleInput = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const album = {
            title: titleInput.current.value,
        };

        addAlbum(album);
        titleInput.current.value="";
    };

    return (
        <>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <input ref={titleInput} placeholder="Title" required />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AlbumForm;
