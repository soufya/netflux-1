import React from 'react';

import Header from '../components/Header';
import Filter from '../components/Filter';
import MovieSuggestion from '../components/MovieSuggestion';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import Footer from '../components/Footer';

const Shows = (props) => {
  return (
    <>
      {/* <Header />
      <Filter type={props.type} optionText={props.optionText}/>
      <MovieSuggestion movies={props.suggested} />
      <MostViwed movies={props.mostViwed} />
      <NewShows movies={props.recentMovies} />
      <Footer /> */}
      <h1>hello from the shows page</h1>
    </>
  );
}

export default Shows;