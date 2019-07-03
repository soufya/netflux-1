import React from 'react';

import Filter from '../components/Filter';
import Suggestion from '../components/Suggestion';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';

// import data
import data from "../data/movies.json";
import { suggestedMovies, mostViwed, recentRelease } from '../utils/helper';

class Shows extends React.Component {
  state = {
    movies: data
  }

  render() {
    return (
      <>
        <Filter type="المسلسلات" optionText="نوع المسلسل" />
        <Suggestion movies={suggestedMovies(this.state.movies)} />
        <MostViwed movies={mostViwed(this.state.movies)} />
        <NewShows movies={recentRelease(this.state.movies, 'Film')} filterLimit={32} />
      </>
    );
  }
}

export default Shows;