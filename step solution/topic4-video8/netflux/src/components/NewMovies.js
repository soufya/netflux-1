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

    const movieList = movies.map((movie) => {
      return <Movie key={movie.posterPath} image={movie.posterPath} title={movie.originalTitle} />
    });

    return (
      <MovieGrid gridType="is-movies" title="أحدث الأفلام">
        {movieList.slice(0, 8)}
      </MovieGrid>
    );
}

export default NewMovies;