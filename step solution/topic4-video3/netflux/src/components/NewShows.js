import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewShows = props => {
    return (
      <MovieGrid gridType="is-movies" title="أحدث المسلسلات">
        <Movie image={props.movies[16].posterPath} title={props.movies[16].originalTitle} />
        <Movie image={props.movies[17].posterPath} title={props.movies[17].originalTitle} />
        <Movie image={props.movies[18].posterPath} title={props.movies[18].originalTitle} />
        <Movie image={props.movies[19].posterPath} title={props.movies[19].originalTitle} />
        <Movie image={props.movies[20].posterPath} title={props.movies[20].originalTitle} />
        <Movie image={props.movies[21].posterPath} title={props.movies[21].originalTitle} />
        <Movie image={props.movies[22].posterPath} title={props.movies[22].originalTitle} />
        <Movie image={props.movies[23].posterPath} title={props.movies[23].originalTitle} />
      </MovieGrid>
    );
}

export default NewShows;