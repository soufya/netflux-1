import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MovieSuggestion = props => {
    const filteredDate = props.movies.filter(movie => {
      return movie.voteAverage > 8;
    });

    const movieList = filteredDate.map((movie) => {
      return <Movie key={movie.posterPath} image={movie.posterPath} title={movie.originalTitle} />
    });

    return (
      <MovieGrid gridType="is-suggested" title="إقتراحتنا لك">
        {movieList.slice(0,4)}
      </MovieGrid>
    );
}

export default MovieSuggestion;