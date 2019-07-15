import React from 'react';

import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Shows from './pages/Shows';

import data from "./data/movies.json"

class App extends React.Component {
  state = {
    movies: data
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          {/* <HomePage movies={this.state.movies}/> */}
          {/* <Movies movies={this.state.movies} /> */}
          <Shows movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
