import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AlbumList from './components/Album/AlbumList';
import ImageList from './components/Image/ImageList';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseinit";
import Spinner from 'react-spinner-material';
import './App.css'

function App() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        const albumsCollection = collection(db, 'albums');
        const albumsSnapshot = await getDocs(albumsCollection);

        const updatedAlbums = albumsSnapshot.docs.map((doc) => ({
          id: doc.id, ...doc.data()
        }));
        setAlbums([...updatedAlbums]);
      } catch (error) {
        console.error('Error fetching albums:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, []);

  const selectAlbum = (id) => {
    console.log(id);
    setSelectedAlbum(id);
  };
  
  const addAlbum = async (data) => {
    data={images:[],...data}
    const newid=await addDoc(collection(db, "albums"), data);
    setAlbums([{id:newid.id,...data},...albums])
};

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <div className='loader' >
          <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
        </div>
      ) : (
        <>
          {!selectedAlbum && <AlbumList albums={albums} selectAlbum={selectAlbum} addAlbum={addAlbum}/>}
          {selectedAlbum && <ImageList selectedAlbum={selectedAlbum} selectAlbum={selectAlbum} />}
        </>
      )}



    </div>
  );
}

export default App;
