import { useState } from 'react';
import Navbar from './components/Navbar'
import Input from './components/InputField';


function App() {
  //These are the different state values
  const [music, setMusic] = useState('');
  const[movies, setMovies] = useState('');
  const[podcasts, setPodcasts] = useState('');
  const[ebook, setEbooks] = useState('');
  const[tvShow, setTvShows] = useState('');
  const [search, setSearch] = useState('');

  const [saveForLater, setSaveForLater] = useState({saved: []})

  //This function is used for when the user searches for a value it makes all the necessary 
  //api calls for easier useability for the user
    function handleClick() {
      //This first fetch deals with the music endpoint from the api
      fetch("/music", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, body: JSON.stringify({
        search: search
    })
    }).then((response) => response.json()
    ).then((response) => setMusic(response)
    )
    //This second fetch deals with the movie endpoint from the api
    fetch("/movie", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, body: JSON.stringify({
        search: search
    })
    }).then((response) => response.json()
    ).then((response) => setMovies(response)
    )

    //This fetch api deals with the podcast endpoint
    fetch("/podcast", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, body: JSON.stringify({
        search: search
    })
    }).then((response) => response.json()
    ).then((response) => setPodcasts(response)
    )

    //This fetch api deals with the ebook endpoint
    fetch("/ebook", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, body: JSON.stringify({
        search: search
    })
    }).then((response) => response.json()
    ).then((response) => setEbooks(response)
    )

    //This fetch api deals with the tvShow endpoint
    fetch("/tvShow", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, body: JSON.stringify({
        search: search
    })
    }).then((response) => response.json()
    ).then((response) => setTvShows(response)
    )

    console.log(music)
    console.log(movies)
    }

    //This is the function that is used to allow the user to save their favourite items for later
    function saveForLaterFunction(songId) {
      fetch("/save", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(songId)
      }).then((response) => response.json())
      .then((response) => {
        console.log(response)
        setSaveForLater(response)
        console.log(saveForLater)
      })
    }
    
 
  return (
    <div className="App">
      <h1>Scuffed Itunes</h1>
      <Input 
        search={search}
        setSearch={setSearch}
        handleClick={handleClick}
      />
  
      <Navbar 
        music={music}
        movies={movies}
        podcasts={podcasts}
        ebook={ebook}
        tvShow={tvShow}
        saveForLater={saveForLater}
        setSaveForLater={setSaveForLater}
        saveForLaterFunction={saveForLaterFunction}
      />
      
        
    </div>
  );
}

export default App;
