import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Venice from './venice/venice'
import Home from './home/home'
// import '../assets/stylesheets/base.scss';

const App = (props) => {
  return (
    <Router>
      <div className="appWrapper">
        <h1>SHOULD ZACH GO 🏄</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/venice'>Venice Beeech</Link>
          </li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/venice' component={Venice} />
      </div>
    </Router>
  );
};

export default App;