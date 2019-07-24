import React from 'react';

class Details extends React.Component {
  render() {
    const movieId = this.props.match.params.id;
    const movie = this.props.movies.find(movie => movie.posterPath.includes(movieId))
    console.log(movie)
    return(
      <>
      <section className="section hero movieDetails has-bullets">
        <div className="container">
          <div className="movieVideo">
              <iframe src={`https://www.youtube.com/embed/${movie.movieVideos.key}`}
              frameBorder='0'
              title='video'
            />
          </div>
          <div className="movieDetails">
            <h2 className="featured-title">{movie.originalTitle}</h2>
            <p className="featured-overview">{movie.originalOverview}</p>
            <p className="movie-general-data">{movie.releaseDate}</p>
          </div>
        </div>
      </section>
      <section className="section movie-meta-data">
          <div className="container">
            <h3 className="section-title">التفاصيل</h3>
            <ul>
              <li>
                <span className="title">النوع</span>
                <span className="values">{movie.genres.join(" | ")}</span>
              </li>
            </ul>
            <div className="plot">
              <h3 className="section-title">القصة</h3>
              <p>{movie.originalOverview}</p>
            </div>
          </div>
      </section>
      </>
    )
  }
}
export default Details;