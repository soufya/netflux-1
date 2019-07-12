import React from 'react';
import Movie from './Movie';
import MovieGrid from "./MovieGrid";

const NewShows = props => {
    return (
      <MovieGrid gridType="is-movies" title="أحدث المسلسلات">
        <Movie image={props.images[0]} title="The Maze Runner" />
        <Movie image={props.images[1]} title="Breaking Bad" />
        <Movie image={props.images[2]} title="Peaky Blinders" />
        <Movie image={props.images[3]} title="The Good Doctor" />
        <Movie image={props.images[0]} title="The Maze Runner" />
        <Movie image={props.images[1]} title="Breaking Bad" />
        <Movie image={props.images[2]} title="Peaky Blinders" />
        <Movie image={props.images[3]} title="The Good Doctor" />
      </MovieGrid>
    );
}

export default NewShows;