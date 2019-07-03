import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SPA from './SPA';


class App extends React.Component {

  render() {
    return (
          <BrowserRouter>
            <SPA />
          </BrowserRouter>
    );
  }
}

export default App;
