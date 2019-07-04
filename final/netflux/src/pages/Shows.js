import React from 'react';

import MovieGrid from "../components/MovieGrid";
import Filter from '../components/Filter';

import { suggestedMovies, mostViwed, recentRelease } from '../utils/helper';

const renderShowsGrid = (props) => {
  return (
    <>
      <MovieGrid
        gridType="is-suggested"
        title="إقتراحتنا لك"
        limit={4}
        movies={suggestedMovies(props.movies)}
        history={props.history} />

      <MovieGrid
        gridType="is-suggested"
        title="الأكثر مشاهدة"
        limit={4}
        movies={mostViwed(props.movies)}
        history={props.history} />

      <MovieGrid
        gridType="is-suggested"
        title="أحدث المسلسلات"
        limit={32}
        movies={recentRelease(props.movies, 'Film')}
        history={props.history} />
    </>
  );
}

const renderFilterResult = (props, filter) => {
  const filteredMovies = props.movies.filter(movie => movie.genres.includes(filter))
  return (
    <MovieGrid
      gridType="is-suggested"
      title=""
      limit={filteredMovies.length}
      movies={filteredMovies}
      history={props.history} />
  )
}

class Shows extends React.Component {
  state = {
    filter: ""
  }

  onFilter = (value) => {
    this.setState({filter: value})
  }

  render() {
    let display = this.state.filter === "" ? renderShowsGrid(this.props) : renderFilterResult(this.props, this.state.filter);
    let result = this.props.searchTerm === "" ? display : this.props.searchDisplay();

    return (
      <>
        <Filter type="المسلسلات" optionText="نوع المسلسل" onSelectChange={this.onFilter} />
        {result}
      </>
    );
  }
}

export default Shows;