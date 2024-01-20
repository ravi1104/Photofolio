import React, { useRef, useState } from "react";
import styles from './Album.module.css'

const AlbumForm = ({ addAlbum }) => {
    const [form, setForm] = useState({});
    const titleInput = useRef();
    const urlInput = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const album = {
            title: titleInput.current.value,
            url: urlInput.current.value
        };

        addAlbum(album);
    };

    return (
        <>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <input ref={titleInput} placeholder="Title" required />
                <input ref={urlInput} placeholder="Image Url" required />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AlbumForm;
