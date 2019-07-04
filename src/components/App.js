import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Reader from './Reader/Reader';

const App = () => (
  <Router>
    <Switch>
      <Route path="/reader" component={Reader} />
      <Redirect to={{ pathname: '/reader', search: '?page=1' }} />
    </Switch>
  </Router>
);

export default App;
