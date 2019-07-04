import React from 'react';

// import data
import data from "../data/movies.json";

class Details extends React.Component {
  state = {
    movies: data
  }

  findMovie = () => {
    const id = this.props.match.params.id;
    console.log('hi')
    // this.state.movies.find(data => data.movieVideos.key === id);
    // try {
    //   console.log(this.state.movies.find(movie => movie.movieVideos.key === "owK1qxDselE"));
    // } catch(err) {
    //   console.log(err);
    // }

    // return this.state.movies.find(data => data.movieVideos.key === id);
  }

  render() {

    this.findMovie();

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
              <h2 className="featured-title">Peaky Blinders</h2>
              <p className="featured-overview">المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد العصابة بالأضافة إلى
                  سام نيل في دور المحقق المسؤول عن قمع العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل عرض
                            لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات</p>
              <p className="movie-general-data">2019  |  ساعة و ٤٠ دقيقة |   وثائقي</p>
            </div>
          </div>
        </section>

        <section className="section movie-meta-data">
          <div className="container">
            <h3 className="section-title">التفاصيل</h3>
            <ul>
              <li>
                <span className="title">النوع</span>
                <span className="values">وثائقي | مغامرة | السيرة الذاتية | رياضة</span>
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
}

export default Details;