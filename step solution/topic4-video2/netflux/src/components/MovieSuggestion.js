import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MovieSuggestion = props => {
    return (
      <MovieGrid gridType="is-suggested" title="إقتراحتنا لك">
        <Movie image={props.movies[0].poster} title={props.movies[0].title} />
        <Movie image={props.movies[1].poster} title={props.movies[1].title}/>
        <Movie image={props.movies[2].poster} title={props.movies[2].title}/>
        <Movie image={props.movies[3].poster} title={props.movies[3].title}/>
      </MovieGrid>
    );
}

export default MovieSuggestion;