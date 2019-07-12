import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewMovies = props => {
    const movies = props.movies.filter(movie => {
      return movie.category === "Film";
    });

    movies.sort((show1, show2) => {
      return new Date(show1.releaseDate) > new Date(show2.releaseDate) ? -1 : 1;
    });

    return (
      <MovieGrid gridType="is-movies" title="أحدث الأفلام">
        <Movie image={movies[0].posterPath} title={movies[0].originalTitle} />
        <Movie image={movies[1].posterPath} title={movies[1].originalTitle} />
        <Movie image={movies[2].posterPath} title={movies[2].originalTitle} />
        <Movie image={movies[3].posterPath} title={movies[3].originalTitle} />
      </MovieGrid>
    );
}

export default NewMovies;