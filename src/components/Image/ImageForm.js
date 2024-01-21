import React, { useRef } from "react";
import styles from './ImageForm.module.css'

const ImageForm = ({ addImage }) => {
    const titleInput = useRef();
    const urlInput = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const image = {
            title: titleInput.current.value,
            url: urlInput.current.value
        };

        addImage(image);
        titleInput.current.value="";
        urlInput.current.value="";
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

export default ImageForm;
