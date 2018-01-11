import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import '../assets/stylesheets/base.scss';

const Home = () => (
  <h1>Yes breh go surf</h1>
)

const Bad = () => (
  <h1>Dont do it. its bad</h1>
)

const App = (props) => {
  return (
    <Router>
      <div className="appWrapper">
        <Route path='/' component={Home} />
        <Route path='/bad' component={Bad} />
      </div>
    </Router>
  );
};

export default App;