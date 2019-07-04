import React from 'react';

import Hero from '../components/Hero';
import MovieGrid from "../components/MovieGrid";

import { suggestedMovies, mostViwed, recentRelease} from '../utils/helper';

class HomePage extends React.Component {

  renderDisplayGrid() {
    return (
      <>
        <Hero />
        <MovieGrid
          gridType="is-suggested"
          title="إقتراحتنا لك"
          limit={4}
          movies={suggestedMovies(this.props.movies)}
          history={this.props.history}
          onSelect={this.props.onSelect} />

        <MovieGrid
          gridType="is-suggested"
          title="الأكثر مشاهدة"
          limit={4}
          movies={mostViwed(this.props.movies)}
          history={this.props.history}
          onSelect={this.props.onSelect} />

        <MovieGrid
          gridType="is-suggested"
          title="أحدث المسلسلات"
          limit={8}
          movies={recentRelease(this.props.movies, 'Film')}
          history={this.props.history}
          onSelect={this.props.onSelect} />

        <MovieGrid
          gridType="is-suggested"
          title="أحدث الأفلام"
          limit={8}
          movies={recentRelease(this.props.movies, 'Film')}
          history={this.props.history}
          onSelect={this.props.onSelect} />
    </>
    );
  }

  render() {
    let display = this.props.searchTerm === "" ? this.renderDisplayGrid() : this.props.searchDisplay();

    return (
      <>
       {display}
      </>
    );
  }
}

export default HomePage;