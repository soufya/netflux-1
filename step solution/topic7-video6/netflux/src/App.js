import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';

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
                render={(props) => (<CategoryPage
                  {...props}
                  type="Film"
                  typeText="الأفلام"
                  optionText="نوع الفيلم"
                  movies={this.state.movies}
                />)}
              />

              <Route
                exact
                path="/shows"
                render={(props) => (<CategoryPage
                  {...props}
                  type="Film" /* TODO: change type to show later when data is there */
                  typeText="المسلسلات"
                  optionText="نوع المسلسل"
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

              <Route
                path="/search/:keyword"
                render={(props) => (<SearchPage
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
