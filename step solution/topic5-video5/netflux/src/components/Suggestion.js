import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MovieSuggestion = props => {
  const movies = props.movies.slice(0, 4);
  const movie = movies.map(data => (
  <Movie
    image={data.posterPath}
    title={data.originalTitle}
    key={data.movieVideos.key}
    id={data.movieVideos.key}
    history={props.history}
    />));

    return (
      <MovieGrid gridType="is-suggested" title="إقتراحتنا لك">
        {movie}
      </MovieGrid>
    );
}

export default MovieSuggestion;