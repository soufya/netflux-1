import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Details from './pages/Details';
import Footer from './components/Footer';

// import data
import data from "./data/movies.json";

class App extends React.Component {
  state = {
    movies: data,
    searchTerm: ""
  }

  onSearch = (term) => {
    this.setState({ searchTerm: term })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header onSearch={this.onSearch}/>
            <div>
              <Route exact path="/" render={(props) => <HomePage {...props} searchTerm={this.state.searchTerm} movies={this.state.movies}/>} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/shows" component={Shows} />
              <Route exact path="/details/:id" component={Details} />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
