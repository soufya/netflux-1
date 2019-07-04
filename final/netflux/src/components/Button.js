import React from "react";

const renderDetails = (event, key, movieId) => {
  event.preventDefault();
  key.onSelect(movieId);
  key.history.push(`/details${movieId}`);
}

const Button = (props) => {
  return (
    <a href=""
      className={`button ${props.primary}`}
      onClick={(event) => renderDetails(event, props, props.movieId)}>
      {props.text}
    </a>
  );
}

export default Button;