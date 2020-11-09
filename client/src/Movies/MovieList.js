import React from 'react';
import { useHistory } from "react-router-dom";

export default function MovieList(props) {
  const { movieList } = props;

  const history = useHistory();

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} onClick={history.push(`/movies/${movie.id}`)}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div >
  );
}
