import React from "react";
import Movie from "./Movie";

const MovieGrid = (props) => {
  const movies = props.movies.slice(0, props.limit);

  const movie = movies.map((data, i) => {
    let id = data.posterPath.replace(".jpg", "")

  return (
    <Movie
      image = { data.posterPath }
      title = { data.originalTitle }
      key = { i }
      index = { id }
      id={ data.posterPath }
      history = { props.history }
      onSelect = { props.onSelect }
    />)
  });

  return (
    <section className={`section movies slider has-arrows ${props.gridType}`}>
      <div className="container">
        <h3 className="section-title">
          {props.title}
        </h3>
        <ul className="moviesGrid">
          {movie}
        </ul>
      </div>
    </section>
  );
}

export default MovieGrid;