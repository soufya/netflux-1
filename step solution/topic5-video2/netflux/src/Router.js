import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import HomePage from './pages/HomePage';

const Router = (props) => {
  const home = (
    <HomePage
      suggested={props.suggestedMovies}
      mostViwed={props.mostViwed}
      recentMovies={props.recentRelease}
      recentShows={props.recentRelease}
      filterLimit={8}
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;