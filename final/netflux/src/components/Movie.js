import React from 'react';

const renderDetails = (key) => {
  key.onSelect(key.id);
  key.history.push(`/details${key.index}`);
}
const Movie = props => {
    return (
      <li className="movie" onClick={() => renderDetails(props)}>
          <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={props.title} height="400" />
          <span className="movie-description">
            {props.title}
						<span className="play-icon"><i className="fas fa-play"></i></span>
          </span>
      </li>
    );
}

export default Movie;