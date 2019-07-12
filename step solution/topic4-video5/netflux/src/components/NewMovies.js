import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewMovies = props => {
    return (
      <MovieGrid gridType="is-movies" title="أحدث الأفلام">
        <Movie image={props.movies[8].posterPath} title={props.movies[0].originalTitle} />
        <Movie image={props.movies[9].posterPath} title={props.movies[1].originalTitle} />
        <Movie image={props.movies[10].posterPath} title={props.movies[2].originalTitle} />
        <Movie image={props.movies[11].posterPath} title={props.movies[3].originalTitle} />
      </MovieGrid>
    );
}

export default NewMovies;