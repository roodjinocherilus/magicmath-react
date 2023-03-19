import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './calculator';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Quotes from './Quotes';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quotes" component={Quotes} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
