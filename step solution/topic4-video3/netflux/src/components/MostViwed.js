import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MostViwed = props => {
    return (
      <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة">
        <Movie image={props.movies[4].posterPath} title={props.movies[4].originalTitle} />
        <Movie image={props.movies[5].posterPath} title={props.movies[5].originalTitle} />
        <Movie image={props.movies[6].posterPath} title={props.movies[6].originalTitle} />
        <Movie image={props.movies[7].posterPath} title={props.movies[7].originalTitle} />
      </MovieGrid>
    );
}

export default MostViwed;