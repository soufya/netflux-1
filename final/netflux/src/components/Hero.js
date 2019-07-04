import React from "react";
import Button from "./Button";


const Hero = (props) => {
  const movieId = "/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg";
    return (
      <section className="section hero featuredMovies">
        <div className="container">
          <div className="slide featured">
            <h2 className="featured-title">Peaky Blinders</h2>
            <p className="featured-overview">المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد العصابة بالأضافة إلى سام نيل في دور المحقق المسؤول عن قمع العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل عرض لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات</p>
            <p className="buttons">
              {/* <Button text="شاهد الفيلم" primary="is-primary" /> */}
              <Button
                text="إقرأ المزيد"
                primary="is-primary"
                history={props.history}
                movieId={movieId}
                onSelect={props.onSelect} />
            </p>
          </div>
        </div>
      </section>
    );
}

export default Hero;
//  onClick={() => renderDetails(props, movieId)}