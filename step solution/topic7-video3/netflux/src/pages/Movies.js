import React from 'react';
import Filter from "../components/Filter";
import MovieGrid from "../components/MovieGrid";

import { suggested, mostViwed, recentRelease } from "../utils/helper";

class Movies extends React.Component {
  state = {
    filter: null,
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
          movies={suggested(this.props.movies)}
          limit={4} />

        <MovieGrid
          gridType="is-suggested"
          title="الأكثر مشاهدة"
          movies={mostViwed(this.props.movies)}
          limit={4} />

        <MovieGrid
          gridType="is-movies"
          title="أحدث الأفلام"
          movies={recentRelease(this.props.movies, 'Film')}
          limit={32} />
      </>)
  }

  renderFilterResult = () => {
    return <h1>filtered results</h1>
  }

  render() {
    return (
      <>
        <Filter type="أفلام" optionText="نوع الفلم" onSelectChange={this.onFilter}/>
        {this.state.filter ? this.renderFilterResult() : this.renderMoviesGrid()}
      </>
    );
  }
}

export default Movies;