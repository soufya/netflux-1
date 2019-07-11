import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MostViwed = props => {
    props.movies.sort((movie1, movie2) => {
      return movie1.popularity > movie2.popularity ? -1 : 1;
    });

  const movieList = props.movies.map((movie) => {
    return <Movie key={movie.posterPath} image={movie.posterPath} title={movie.originalTitle} />
  });

    return (
      <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة">
        {movieList.slice(0, 4)}
      </MovieGrid>
    );
}

export default MostViwed;