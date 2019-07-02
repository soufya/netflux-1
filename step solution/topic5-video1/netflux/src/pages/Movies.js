import React from 'react';

import Header from '../components/Header';
import Filter from '../components/Filter';
import MovieSuggestion from '../components/MovieSuggestion';
import MostViwed from '../components/MostViwed';
import NewMovies from '../components/NewMovies';
import Footer from '../components/Footer';

const Movies = (props) => {
  return (
    <>
      <Header />
      <Filter />
      <MovieSuggestion movies={props.suggested} />
      <MostViwed movies={props.mostViwed} />
      <NewMovies movies={props.recentMovies} />
      <Footer />
    </>
  );
}

export default Movies;