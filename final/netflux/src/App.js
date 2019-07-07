import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import Details from './pages/Details';
import Footer from './components/Footer';
import MovieGrid from "./components/MovieGrid";

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
  //TODO Tony: Here we might just have a new route for search results to make sure the query string is in the URL so the user can refresh anytime and also
  // to avoid the duplication of the search term and sending the DOM of search results over and over againt to all routes
  renderSearchDisplay = () => {
    const searchResult = this.state.movies.filter((movie) => {
      const regex = new RegExp(this.state.searchTerm, 'gi');
      //TODO Tony: Maybe let's extend the search here to include movie description in both languages ;-)
      return movie.originalTitle.match(regex);
    });
    return (searchResult.length) ? (
      <MovieGrid
        gridType="search-results"
        title={`نتيجة البحث عن ${this.state.searchTerm}`}
        limit={searchResult.length}
        movies={searchResult}
        history={this.props.history} />
    ) : <p>أسفين، لم نستطع إيجاد ما تبحث عنه من فضلك قُم بتغيير كلمة البحث</p>
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header onSearch={this.onSearch}/>
            <>
              <Route exact path="/" render={(props) => (<HomePage {...props}
              searchTerm={this.state.searchTerm}
              movies={this.state.movies}
              searchDisplay={this.renderSearchDisplay}
              onSelect={this.onSelect} />) } />

              <Route exact path="/movies" render={(props) => (<CategoryPage {...props}
              type="Film"
              typeText="الأفلام"
              optionText="نوع الفيلم"
              searchTerm={this.state.searchTerm}
              movies={this.state.movies}
              filter={this.state.filter}
              onFilter={this.onFilter}
              searchDisplay={this.renderSearchDisplay}
              onSelect={this.onSelect} />) } />
              {/* change type to show later when data is there */}
              <Route exact path="/shows" render={(props) => (<CategoryPage {...props}
              type="Film"
              typeText="المسلسلات"
              optionText="نوع المسلسل"
              searchTerm={this.state.searchTerm}
              movies={this.state.movies}
              filter={this.state.filter}
              onFilter={this.onFilter}
              searchDisplay={this.renderSearchDisplay}
              onSelect={this.onSelect} />) } />

              <Route exact path="/details/:id" render={(props) => (<Details {...props}
              searchTerm={this.state.searchTerm}
              searchDisplay={this.renderSearchDisplay}
              selectedMovie={this.state.selectedMovie}
              />)} />
            </>
            <Footer /> {/*TODO Tony: I need to fix the CSS here to make sure the footer is always in the bottom even of the container is short*/}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
