import React from 'react';


class Details extends React.Component {

  renderDetails = () => {
    const genres = this.props.selectedMovie.genres.join(" | ");
    return (
      <>
        <section className="section hero movieDetails has-bullets">
          <div className="container">
            <div className="movieVideo">
              <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/edfw9ip9sCQ?modestbranding=1&rel=0"
                frameBorder="0"></iframe>
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
              <li>
                <span className="title">النجوم</span>
                <span className="values">جون برانش، تومي كالدويل، كيفن جورجسون</span>
              </li>
              <li>
                <span className="title">الإدارة</span>
                <span className="values">جوش لويل، بيتر موتيمور</span>
              </li>
            </ul>
            <div className="plot">
              <h3 className="section-title">القصة</h3>
              <p>تدور أحداث الفيلم حول محاولة شرطي أميركي التخفي للتسلل وسط عصابة «أيرلندية - أميركية»، لإثبات الإدانات ضدها وضد رئيس العصابة، فيقوم بكسب ثقة رئيس العصابة ويصبح واحدًا منهم، ولكن تتعقد الأحداث أكثر؛ حيث إن للعصابة جاسوسًا في هيئة الشرطة، ينقل لها جميع تحركات الشرطة ويحبط جميع مخططات الشرطة للقبض على العصابة، فتصبح مهمته الأساسية هي كشف هوية الشرطي المتخفي بناءً علي طلب رئيس العصابة.</p>
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