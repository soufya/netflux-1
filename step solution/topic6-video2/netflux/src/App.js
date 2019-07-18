import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Details from './pages/Details';

import data from "./data/movies.json"

class App extends React.Component {
  state = {
    movies: data
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header />
            <>
              <Route
                exact
                path="/"
                render={(props) => (<HomePage
                  {...props}
                  movies={this.state.movies}
                />)}
              />

              <Route
                exact
                path="/movies"
                render={(props) => (<Movies
                  {...props}
                  movies={this.state.movies}
                />)}
              />

              <Route
                exact
                path="/shows"
                render={(props) => (<Shows
                  {...props}
                  movies={this.state.movies}
                />)}
              />

            <Route
              exact
              path="/details/:id"
              render={(props) => (<Details
                {...props}
                movies={this.state.movies}
              />)}
            />
            </>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
