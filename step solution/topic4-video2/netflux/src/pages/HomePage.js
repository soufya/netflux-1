import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieSuggestion from '../components/MovieSuggestion';
import MostViwed from '../components/MostViwed';
import NewShows from '../components/NewShows';
import NewMovies from '../components/NewMovies';
import Footer from '../components/Footer';

// import images
import image1 from "../img/movie1.svg";
import image2 from "../img/movie2.svg";
import image3 from "../img/movie3.svg";
import image4 from "../img/movie4.svg";

// import data
import data from "../data/movies.json";

class HomePage extends React.Component {

  // state = {
  //   movies: [
  //     { title: 'The Maze Runner', poster: image1 },
  //     { title: 'Breaking Bad', poster: image2 },
  //     { title: 'Peaky Blinders', poster: image3 },
  //     { title: 'The Good Doctor', poster: image4 }
  //   ]
  // }

  state = {
    movies: data
  }

  render() {

    return (
      <>
        <Header />
        <Hero />
        <MovieSuggestion movies={this.state.movies} image={image1}/>
        <MostViwed movies={this.state.movies} image={image1}/>
        <NewShows movies={this.state.movies} image={image1}/>
        <NewMovies movies={this.state.movies} image={image1}/>
        <Footer />
      </>
    );
  }
}

export default HomePage;