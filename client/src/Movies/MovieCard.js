import React from 'react';
import { useHistory } from "react-router-dom";

export default function MovieCard(props) {

  const { movie } = props;

  const history = useHistory();

  const routeToMovie = () => {
    history.push(`/movies/${movie.id}`);
  }

  return (
    <div className="movie-card" onClick={routeToMovie}>
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      {movie.stars &&
        <h3>Actors</h3>
      }

      {movie.stars &&
        movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))
      }
    </div>
  )
}
