import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewShows = props => {
    return (
      <MovieGrid gridType="is-movies" title="أحدث المسلسلات">
        <Movie image={props.movies[12].posterPath} title={props.movies[0].originalTitle} />
        <Movie image={props.movies[13].posterPath} title={props.movies[1].originalTitle} />
        <Movie image={props.movies[14].posterPath} title={props.movies[2].originalTitle} />
        <Movie image={props.movies[15].posterPath} title={props.movies[3].originalTitle} />
      </MovieGrid>
    );
}

export default NewShows;