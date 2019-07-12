import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewShows = props => {
    const shows = props.movies.filter(movie => {
      return movie.category === "Film";
    });

    shows.sort((show1, show2) => {
      return new Date(show1.releaseDate) > new Date(show2.releaseDate) ? -1 : 1;
    });

    return (
      <MovieGrid gridType="is-movies" title="أحدث المسلسلات">
        <Movie image={shows[0].posterPath} title={shows[0].originalTitle} />
        <Movie image={shows[1].posterPath} title={shows[1].originalTitle} />
        <Movie image={shows[2].posterPath} title={shows[2].originalTitle} />
        <Movie image={shows[3].posterPath} title={shows[3].originalTitle} />
      </MovieGrid>
    );
}

export default NewShows;