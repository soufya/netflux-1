import React from 'react';

import Hero from '../components/Hero';
import Suggestion from '../components/Suggestion';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import NewMovies from '../components/NewMovies'

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
        <Suggestion movies={suggestedMovies(this.state.movies)} history={this.props.history}/>
        <MostViwed movies={mostViwed(this.state.movies)}/>
        <NewShows movies={recentRelease(this.state.movies, 'Film')} filterLimit={8}/>
        <NewMovies movies={recentRelease(this.state.movies, 'Film')} filterLimit={8}/>
      </>
    );
  }
}

export default HomePage;