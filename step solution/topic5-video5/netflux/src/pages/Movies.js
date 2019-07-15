import React from 'react';

import Filter from '../components/Filter';
import Suggestion from '../components/Suggestion';
import MostViwed from '../components/MostViwed';
import NewMovies from '../components/NewMovies';

// import data
import data from "../data/movies.json";
import { suggestedMovies, mostViwed, recentRelease } from '../utils/helper';

class Movies extends React.Component {
  state = {
    movies: data
  }

  render() {
    return (
      <>
        <Filter type="أفلام" optionText="نوع الفيلم" />
        <Suggestion movies={suggestedMovies(this.state.movies)} />
        <MostViwed movies={mostViwed(this.state.movies)} />
        <NewMovies movies={recentRelease(this.state.movies, 'Film')} filterLimit={32} />
      </>
    );
  }
}

export default Movies;