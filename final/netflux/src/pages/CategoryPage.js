import React from 'react';

import MovieGrid from "../components/MovieGrid";
import Filter from '../components/Filter';

import { suggestedMovies, mostViwed, recentRelease } from '../utils/helper';


class CategoryPage extends React.Component {
  state = {
    filter: ""
  }

  onFilter = (value) => {
    this.setState({ filter: value })
  }

  renderMoviesGrid = () => {
    return (
      <>
        <MovieGrid
          gridType="is-suggested"
          title="إقتراحتنا لك"
          limit={4}
          movies={suggestedMovies(this.props.movies)}
          history={this.props.history}
          onSelect={this.props.onSelect} />

        <MovieGrid
          gridType="is-suggested"
          title="الأكثر مشاهدة"
          limit={4}
          movies={mostViwed(this.props.movies)}
          history={this.props.history}
          onSelect={this.props.onSelect} />

        <MovieGrid
          gridType="is-suggested"
          title={`"أحدث ${this.props.typeText}"`}
          limit={32}
          movies={recentRelease(this.props.movies, this.props.type)}
          history={this.props.history}
          onSelect={this.props.onSelect} />
      </>
    );
  }

  renderFilterResult = () => {
    const filteredMovies = this.props.movies.filter(movie => movie.genres.includes(this.state.filter))
    return (
      <MovieGrid
        gridType="is-suggested"
        title=""
        limit={filteredMovies.length}
        movies={filteredMovies}
        history={this.props.history}
        onSelect={this.props.onSelect} />
    )
  }

  render() {
    let display = this.state.filter === "" ? this.renderMoviesGrid() : this.renderFilterResult();
    let result = this.props.searchTerm === "" ? display : this.props.searchDisplay();

    return (
      <>
        <Filter type={this.props.typeText} optionText={this.props.optionText} onSelectChange={this.onFilter} />
        {result}
      </>
    );
  }
}

export default CategoryPage;