import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MovieSuggestion = props => {
    return (
      <MovieGrid gridType="is-suggested" title="إقتراحتنا لك">
        <Movie image={props.movies[0].posterPath} title={props.movies[0].originalTitle} />
        <Movie image={props.movies[1].posterPath} title={props.movies[1].originalTitle}/>
        <Movie image={props.movies[2].posterPath} title={props.movies[2].originalTitle}/>
        <Movie image={props.movies[3].posterPath} title={props.movies[3].originalTitle}/>
      </MovieGrid>
    );
}

export default MovieSuggestion;