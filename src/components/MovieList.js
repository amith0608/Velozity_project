import React from 'react';

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index} className="movie">
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
