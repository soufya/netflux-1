import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewMovies = props => {
  const movies = props.movies.slice(0, props.filterLimit);
  const movie = movies.map(data => <Movie image={data.posterPath} title={data.originalTitle} key={data.movieVideos.key} />);

  return (
    <MovieGrid gridType="is-movies" title="أحدث الأفلام">
     { movie }
    </MovieGrid>
  );
}

export default NewMovies;