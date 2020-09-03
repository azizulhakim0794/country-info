import React from 'react';
import './App.css';
import CountryInFor from './components/countryinfor/CountryInFor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Flag from './components/Flag/Flag';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <CountryInFor></CountryInFor>
      <Router>
        <Switch>
          <Route path="/flag/">
          <Flag/>
          </Route>
          <Route path="/error">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
