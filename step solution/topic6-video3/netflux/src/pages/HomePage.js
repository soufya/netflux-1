import React from 'react';

import Hero from '../components/Hero';
import MovieGrid from "../components/MovieGrid";

import { suggestedMovies, mostViwed, recentRelease} from '../utils/helper';

// class HomePage extends React.Component {
//   state = {
//     movies: data
//   }

//   renderDisplayGrid() {
//     return (
//       <>
//         <Hero />
//         <MovieGrid
//           gridType="is-suggested"
//           title="إقتراحتنا لك"
//           limit={4}
//           movies={suggestedMovies(this.props.movies)}
//           history={this.props.history} />

//         <MovieGrid
//           gridType="is-suggested"
//           title="الأكثر مشاهدة"
//           limit={4}
//           movies={mostViwed(this.props.movies)}
//           history={this.props.history} />

//         <MovieGrid
//           gridType="is-suggested"
//           title="أحدث المسلسلات"
//           limit={8}
//           movies={recentRelease(this.state.movies, 'Film')}
//           history={this.props.history} />

//         <MovieGrid
//           gridType="is-suggested"
//           title="أحدث الأفلام"
//           limit={8}
//           movies={recentRelease(this.state.movies, 'Film')}
//           history={this.props.history} />
//     </>
//     );
//   }

//   renderSearchDisplay() {
//     return (<h1>search result</h1>)
//   }

//   render() {
//     let display = this.props.searchTerm === "" ? this.renderDisplayGrid() : this.renderSearchDisplay();

//     return (
//       <>
//        {display}
//       </>
//     );
//   }
// }

const renderDisplayGrid = (props) => {
  return (
    <>
      <Hero />
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
        limit={8}
        movies={recentRelease(props.movies, 'Film')}
        history={props.history} />

      <MovieGrid
        gridType="is-suggested"
        title="أحدث الأفلام"
        limit={8}
        movies={recentRelease(props.movies, 'Film')}
        history={props.history} />
    </>
  );
}

const renderSearchDisplay = (props) => {
  const searchResult = props.movies.filter((movie) => {
    const regex = new RegExp(props.searchTerm, 'gi');
    return movie.originalTitle.match(regex);
  });
  console.log(searchResult);

  return (
    // <MovieGrid
    //   gridType="is-suggested"
    //   title=""
    //   limit={searchResult.length}
    //   movies={searchResult}
    //   history={props.history} />
    <h1>search result</h1>
  );
}

const HomePage = (props) => {
  let display = props.searchTerm === "" ? renderDisplayGrid(props) : renderSearchDisplay(props);
  return (
    <>
      {display}
    </>
  )
}

export default HomePage;