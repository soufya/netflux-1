import React from 'react';

import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Shows from './pages/Shows';

// import data
import data from "./data/movies.json";

class App extends React.Component {
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
    return (
      <div className="wrapper">
        <div className="container">
          <Movies
            suggested={this.suggestedMovies()}
            mostViwed={this.mostViwed()}
            recentMovies={this.recentRelease('Film')}
            filterLimit={32}
            type="أفلام"
            optionText="نوع الفيلم"
          />

          {/* <Shows
            suggested={this.suggestedMovies()}
            mostViwed={this.mostViwed()}
            recentMovies={this.recentRelease('Show')}
            filterLimit={32}
            type="المسلسلات"
            optionText="نوع المسلسل"
          /> */}

          {/* <HomePage
            suggested={this.suggestedMovies()}
            mostViwed={this.mostViwed()}
            recentMovies={this.recentRelease('Film')}
            recentShows={this.recentRelease('Film')}
            filterLimit={8}
            /> */}
        </div>
      </div>
    );
  }
}

export default App;
