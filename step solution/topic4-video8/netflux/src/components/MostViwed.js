import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MostViwed = props => {
  const movies = props.movies.slice(0, 4);
  const movie = movies.map(data => <Movie image={data.posterPath} title={data.originalTitle} key={data.movieVideos.key} />);

    return (
      <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة">
        {movie}
      </MovieGrid>
    );
}

export default MostViwed;