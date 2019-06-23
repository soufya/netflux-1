import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieSuggestion from '../components/MovieSuggestion';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import NewMovies from '../components/NewMovies';
import Footer from '../components/Footer';

class HomePage extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Hero />
      <MovieSuggestion />
      <MostViwed />
      <NewShows />
      <NewMovies />
      <Footer />
      </>
    );
  }
}

export default HomePage;