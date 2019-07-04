import React from 'react';

const renderDetails = (key) => {
  console.log(key.id);

  key.onSelect(key.id);
  key.history.push(`/details${key.id}`);
}
const Movie = props => {
    return (
      <li className="movie" onClick={() => renderDetails(props)}>
          <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="poster cover" height="400" />
          <span className="movie-description">
            {props.title}
						<span className="play-icon"><i className="fas fa-play"></i></span>
          </span>
      </li>
    );
}

export default Movie;