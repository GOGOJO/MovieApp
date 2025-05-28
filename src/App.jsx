import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import Search from "./components/Search";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6416692f`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
    
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  //default search value
  return (
    <div className="container-fluid movie-app">
     <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies'/>
        <Search searchValue = {searchValue} setSearchValue = {setSearchValue} />
      </div> 
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
