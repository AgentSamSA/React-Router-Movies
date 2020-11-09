import React from 'react';
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
