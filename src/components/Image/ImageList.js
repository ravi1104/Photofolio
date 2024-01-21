import React, { useState, useEffect } from 'react';
import { updateDoc, doc, getDoc, arrayUnion } from 'firebase/firestore';
import ImageForm from './ImageForm';
import styles from './ImageForm.module.css';
import { db } from '../../firebaseinit';
import Spinner from 'react-spinner-material';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageList = ({ selectedAlbum,selectAlbum }) => {
  const [addImageBtn, setAddImageBtn] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImagesFromAlbum = async () => {
      try {
        setLoading(true);
        const albumRef = doc(db, 'albums', selectedAlbum);
        const albumSnapshot = await getDoc(albumRef);

        if (albumSnapshot.exists()) {
          const albumData = albumSnapshot.data();
          const imagesArray = albumData.images || [];
          setImages(imagesArray);
        } else {
          console.error('Selected album does not exist.');
        }
      } catch (error) {
        console.error('Error fetching images: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImagesFromAlbum();
  }, [selectedAlbum]);

  const addImage = async (data) => {
    try {
      const docRef = doc(db, "albums", selectedAlbum);
      await updateDoc(docRef, {
        images: arrayUnion(data),
      });
      setImages([data,...images])
      toast("New Images Added")
    } catch (error) {
      console.error("Error adding image: ", error);
    }
  };

  const toggleImageBtn = () => {
    setAddImageBtn(!addImageBtn);
  };
  return (
    <>
    <ToastContainer/>
    <div className="back" onClick={()=>selectAlbum()} >
      <img src='back.png' alt='back'></img>
      </div>

    <button className={styles.imageBtn} onClick={toggleImageBtn}>
        {addImageBtn?"Hide":"Add Images"}
      </button>
      {addImageBtn && <ImageForm addImage={addImage} />}
      <div className={styles.albumList}>
        {loading ? (
          <div className='loader' >
            <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
          </div>
        ) : (
          images.length > 0 ? (
            images.map((img) => (
              <div key={img.title} className={styles.tile}>
                <img src={img.url} alt="cannot find"  ></img>
                <p>{img.title}</p>
              </div>
            ))
          ) : (
            <p>No images available.</p>
          )
        )}
      </div>
    </>
  );
};

export default ImageList;
