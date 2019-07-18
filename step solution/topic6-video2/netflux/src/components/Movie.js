import React from 'react';

const trimExtension = filename => filename.split('.')[0];

const Movie = props => {
    return (
      <li className="movie">
        <a href={`/details${trimExtension(props.movie.posterPath)}`}>
          <img src={`https://image.tmdb.org/t/p/w300${props.movie.posterPath}`} alt={props.movie.originalTitle}/>
          <span className="movie-description">
            {props.movie.originalTitle}
						<span className="play-icon"><i className="fas fa-play"></i></span>
          </span>
        </a>
      </li>
    );
}

export default Movie;
