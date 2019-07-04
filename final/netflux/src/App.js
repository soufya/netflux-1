import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Details from './pages/Details';
import Footer from './components/Footer';
import MovieGrid from "./components/MovieGrid";

// import data
import data from "./data/movies.json";

class App extends React.Component {
  state = {
    movies: data,
    filter: "",
    searchTerm: "",
    selectedMovie: data[0]
  }

  onSearch = (term) => {
    this.setState({ searchTerm: term })
  }

  onFilter = (value) => {
    this.setState({filter: value})
  }

  onSelect = (id) => {
    const selected = this.state.movies.find(movie => movie.posterPath === id);
    this.setState({ selectedMovie: selected});
  }

  renderSearchDisplay = () => {
    const searchResult = this.state.movies.filter((movie) => {
      const regex = new RegExp(this.state.searchTerm, 'gi');
      return movie.originalTitle.match(regex);
    });
    console.log(searchResult);

    return (
      <MovieGrid
        gridType="is-suggested"
        title=""
        limit={searchResult.length}
        movies={searchResult}
        history={this.props.history} />
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header onSearch={this.onSearch}/>
            <div>
              <Route exact path="/" render={(props) => (<HomePage {...props}
              searchTerm={this.state.searchTerm}
              movies={this.state.movies}
              searchDisplay={this.renderSearchDisplay}
              onSelect={this.onSelect} />) } />

              <Route exact path="/movies" render={(props) => (<Movies {...props}
              searchTerm={this.state.searchTerm}
              movies={this.state.movies}
              filter={this.state.filter}
              onFilter={this.onFilter}
              searchDisplay={this.renderSearchDisplay} />) } />

              <Route exact path="/shows" render={(props) => (<Shows {...props}
              searchTerm={this.state.searchTerm}
              movies={this.state.movies}
              filter={this.state.filter}
              onFilter={this.onFilter}
              searchDisplay={this.renderSearchDisplay}
              />)} />

              <Route exact path="/details/:id" render={(props) => (<Details {...props}
              searchTerm={this.state.searchTerm}
              searchDisplay={this.renderSearchDisplay}
              selectedMovie={this.state.selectedMovie}
              />)} />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
