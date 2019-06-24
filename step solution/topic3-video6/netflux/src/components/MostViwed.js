import React from 'react';
import Movie from './Movie';

class MostViwed extends React.Component {
  render() {
    return (
      <section className="section movies slider has-arrows is-suggested">
        <div className="container">
          <h3 className="section-title">الأكثر مشاهدة</h3>
          <ul className="moviesGrid">
            <Movie image={this.props.images[0]} title="The Maze Runner" />
            <Movie image={this.props.images[1]} title="Breaking Bad" />
            <Movie image={this.props.images[2]} title="Peaky Blinders" />
            <Movie image={this.props.images[3]} title="The Good Doctor" />
          </ul>
        </div>
      </section>
    );
  }
}

export default MostViwed;