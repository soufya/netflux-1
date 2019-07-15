import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header />
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/shows" component={Shows} />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
