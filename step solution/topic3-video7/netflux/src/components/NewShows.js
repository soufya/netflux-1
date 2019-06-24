import React from 'react';
import Movie from './Movie';

const NewShows = props => {
    return (
      <section className="section movies slider has-arrows is-movies">
        <div className="container">
          <h3 className="section-title">أحدث المسلسلات</h3>
          <ul className="moviesGrid">
            <Movie image={props.images[0]} title="The Maze Runner" />
            <Movie image={props.images[1]} title="Breaking Bad" />
            <Movie image={props.images[2]} title="Peaky Blinders" />
            <Movie image={props.images[3]} title="The Good Doctor" />
            <Movie image={props.images[0]} title="The Maze Runner" />
            <Movie image={props.images[1]} title="Breaking Bad" />
            <Movie image={props.images[2]} title="Peaky Blinders" />
            <Movie image={props.images[3]} title="The Good Doctor" />
          </ul>
        </div>
      </section>
    );
}

export default NewShows;