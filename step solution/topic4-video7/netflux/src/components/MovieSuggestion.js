import React from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

const MovieSuggestion = props => {
    const filteredDate = props.movies.filter(movie => {
      return movie.voteAverage > 8;
    });

    return (
      <MovieGrid gridType="is-suggested" title="إقتراحتنا لك">
        <Movie image={filteredDate[0].posterPath} title={filteredDate[0].originalTitle} />
        <Movie image={filteredDate[1].posterPath} title={filteredDate[1].originalTitle}/>
        <Movie image={filteredDate[2].posterPath} title={filteredDate[2].originalTitle}/>
        <Movie image={filteredDate[3].posterPath} title={filteredDate[3].originalTitle}/>
      </MovieGrid>
    );
}

export default MovieSuggestion;