import React from 'react';

import Hero from '../components/Hero';
import MovieGrid from "../components/MovieGrid";

// import data
import data from "../data/movies.json";
import { suggestedMovies, mostViwed, recentRelease} from '../utils/helper';

class HomePage extends React.Component {
  state = {
    movies: data
  }

  render() {
    return (
      <>
        <Hero />
        <MovieGrid
          gridType="is-suggested"
          title="إقتراحتنا لك"
          limit={4}
          movies={suggestedMovies(this.state.movies)}
          history={this.props.history} />

        <MovieGrid
          gridType="is-suggested"
          title="الأكثر مشاهدة"
          limit={4}
          movies={mostViwed(this.state.movies)}
          history={this.props.history} />

        <MovieGrid
          gridType="is-suggested"
          title="أحدث المسلسلات"
          limit={8}
          movies={recentRelease(this.state.movies, 'Film')}
          history={this.props.history} />

        <MovieGrid
          gridType="is-suggested"
          title="أحدث الأفلام"
          limit={8}
          movies={recentRelease(this.state.movies, 'Film')}
          history={this.props.history} />
      </>
    );
  }
}

export default HomePage;