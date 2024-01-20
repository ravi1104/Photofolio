import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AlbumList from './components/Album/AlbumList';
import AlbumForm from './components/Album/AlbumForm';
import './App.css';

function App() {
  const [album,setAlbum]=useState([]);
  const [showAlbumForm, setShowAlbumForm] = useState(false);

  useEffect(()=>{

  },[album]);
  function showAlbum(albumName){
    setShowAlbumForm(!showAlbumForm);
  }
  const addAlbum=(album)=>{
    console.log(album);
  }
  return (
    <div className="App">
      <Navbar/>
      <button className='album-button' onClick={showAlbum}>Add Album</button>
      {showAlbumForm && <AlbumForm addAlbum={addAlbum} />}
      <AlbumList album={album}/>
    </div>
  );
}

export default App;
