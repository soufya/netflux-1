import React from 'react';


class Details extends React.Component {

  renderDetails = () => {
    const genres = this.props.selectedMovie.genres.join(" | ");
    return (
      <>
        <section className="section hero movieDetails has-bullets">
          <div className="container">
            <div className="movieVideo">
              <iframe src={`https://www.youtube.com/embed/${this.props.selectedMovie.movieVideos.key}`}
                frameBorder='0'
                title='video'
              />
            </div>
            <div className="movieDetails">
              <h2 className="featured-title">{this.props.selectedMovie.originalTitle}</h2>
              <p className="featured-overview">{this.props.selectedMovie.originalOverview}</p>
              <p className="movie-general-data">{this.props.selectedMovie.releaseDate}</p>
            </div>
          </div>
        </section>

        <section className="section movie-meta-data">
          <div className="container">
            <h3 className="section-title">التفاصيل</h3>
            <ul>
              <li>
                <span className="title">النوع</span>
                <span className="values">{genres}</span>
              </li>
            </ul>
            <div className="plot">
              <h3 className="section-title">القصة</h3>
              <p>{this.props.selectedMovie.originalOverview}</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  render() {
    let result = this.props.searchTerm === "" ? this.renderDetails() : this.props.searchDisplay();
    return (
      <>
        {result}
      </>
    );
  }
}

export default Details;