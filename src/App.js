import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./Api";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 1) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lychee XXI</h1>
        <SearchBar onSearch={search} />
        <div className="Movie-container">
          <MovieList movies={popularMovies} />
        </div>
      </header>
    </div>
  );
};

export default App;
