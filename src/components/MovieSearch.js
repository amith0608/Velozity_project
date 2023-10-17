import React, { useState } from 'react';
import { getMovieData } from '../api';
import MovieList from './MovieList';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const movieData = await getMovieData(query);
    setMovies(movieData);
  };

  return (
    <div>
      <h1>Movie Search App</h1>
      <input
        type="text"
        placeholder="Enter a movie title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {movies && <MovieList movies={movies} />}
    </div>
  );
}

export default MovieSearch;
