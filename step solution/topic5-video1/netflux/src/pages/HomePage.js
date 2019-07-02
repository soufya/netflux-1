import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieSuggestion from '../components/MovieSuggestion';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import NewMovies from '../components/NewMovies';
import Footer from '../components/Footer';



const HomePage = (props) => {
  return (
    <>
      <Header />
      <Hero />
      <MovieSuggestion movies={props.suggested}/>
      <MostViwed movies={props.mostViwed}/>
      <NewShows movies={props.recentMovies}/>
      <NewMovies movies={props.recentShows}/>
      <Footer />
    </>
  );
}

export default HomePage;