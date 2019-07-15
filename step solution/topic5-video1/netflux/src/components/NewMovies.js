import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

import { recentRelease } from '../utils/helper';

const NewMovies = props => {

    return (
      <MovieGrid
        gridType="is-movies"
        title="أحدث الأفلام"
        movies={recentRelease(props.movies, 'Film')}
        limit={8} />
    );
}

export default NewMovies;