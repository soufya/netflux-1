import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MostViwed = props => {
    props.movies.sort((movie1, movie2) => {
      return movie1.popularity > movie2.popularity ? -1 : 1;
    });

    return (
      <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة">
        <Movie image={props.movies[4].posterPath} title={props.movies[0].originalTitle} />
        <Movie image={props.movies[5].posterPath} title={props.movies[1].originalTitle} />
        <Movie image={props.movies[6].posterPath} title={props.movies[2].originalTitle} />
        <Movie image={props.movies[7].posterPath} title={props.movies[3].originalTitle} />
      </MovieGrid>
    );
}

export default MostViwed;