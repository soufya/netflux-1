import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewShows = props => {
    return (
      <MovieGrid gridType="is-movies" title="أحدث الأفلام">
        <Movie image={props.image} title={props.movies[16].originalTitle} />
        <Movie image={props.image} title={props.movies[17].originalTitle} />
        <Movie image={props.image} title={props.movies[18].originalTitle} />
        <Movie image={props.image} title={props.movies[19].originalTitle} />
      </MovieGrid>
    );
}

export default NewShows;