import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

import { recentRelease } from '../utils/helper';

const NewShows = props => {

    return (
      <MovieGrid
        gridType="is-movies"
        title="أحدث المسلسلات"
        movies={recentRelease(props.movies, 'Show')}
        limit={8} />
    );
}

export default NewShows;