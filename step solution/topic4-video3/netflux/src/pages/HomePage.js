import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieSuggestion from '../components/MovieSuggestion';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import NewMovies from '../components/NewMovies';
import Footer from '../components/Footer';

// import data
import data from "../data/movies.json";

class HomePage extends React.Component {

  state = {
    movies: data
  }

  suggestedMovies() {
    return this.state.movies.filter(movie => movie.voteAverage > 8);
  }

  mostViwed() {
    // 1. copy the state
    const moviesCopy = [...this.state.movies];
    // 2. return sorted data
    return moviesCopy.sort((movie1, movie2) => movie1.popularity > movie2.popularity ? -1 : 1);
  }

  recentRelease(category) {
    // 1. copy the state
    const moviesCopy = [...this.state.movies];
    // 2. filter based on category
    const filteredDate = moviesCopy.filter(data => data.category === category);
    // 3.  sorted data descendingly
    return filteredDate.sort((date1, date2) => new Date(date1.releaseDate) > new Date(date2.releaseDate) ? -1 : 1);
  }

  render() {
    console.log(this.recentRelease());

    return (
      <>
        <Header />
        <Hero />
        <MovieSuggestion movies={this.suggestedMovies()}/>
        <MostViwed movies={this.mostViwed()}/>
        <NewShows movies={this.recentRelease('Film')}/>
        <NewMovies movies={this.recentRelease('Film')}/>
        <Footer />
      </>
    );
  }
}

export default HomePage;