import React from 'react';

// import data
import data from "../data/movies.json";

class Movies extends React.Component {
  state = {
    movies: data
  }

  render() {
    return (
      <>
       <h1>Hello Details</h1>
      </>
    );
  }
}

export default Movies;