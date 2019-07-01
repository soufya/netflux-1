import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MovieSuggestion = props => {
    return (
      <MovieGrid gridType="is-suggested" title="إقتراحتنا لك">
        <Movie image={props.image} title={props.movies[0].originalTitle} />
        <Movie image={props.image} title={props.movies[1].originalTitle} />
        <Movie image={props.image} title={props.movies[2].originalTitle} />
        <Movie image={props.image} title={props.movies[3].originalTitle} />
      </MovieGrid>
    );
}

export default MovieSuggestion;