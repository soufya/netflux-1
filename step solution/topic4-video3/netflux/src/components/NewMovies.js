import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewMovies = props => {
    return (
      <MovieGrid gridType="is-movies" title="أحدث الأفلام">
        <Movie image={props.movies[8].posterPath} title={props.movies[8].originalTitle} />
        <Movie image={props.movies[9].posterPath} title={props.movies[9].originalTitle} />
        <Movie image={props.movies[10].posterPath} title={props.movies[10].originalTitle} />
        <Movie image={props.movies[11].posterPath} title={props.movies[11].originalTitle} />
        <Movie image={props.movies[12].posterPath} title={props.movies[12].originalTitle} />
        <Movie image={props.movies[13].posterPath} title={props.movies[13].originalTitle} />
        <Movie image={props.movies[14].posterPath} title={props.movies[14].originalTitle} />
        <Movie image={props.movies[15].posterPath} title={props.movies[15].originalTitle} />
      </MovieGrid>
    );
}

export default NewMovies;