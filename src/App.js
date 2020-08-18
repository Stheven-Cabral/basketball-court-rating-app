import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CourtsSearch from './components/CourtsSearch';
import Court from './components/Court';
import AddCourt from './components/AddCourt';


const App = () => {
  return(
    <Router>
      <Navigation />
      <Switch>
        <Route path="/courts/new" component ={AddCourt} />
        <Route path="/court/:id" component={Court} />
        <Route path="/" component={CourtsSearch} />
      </Switch>
    </Router>
  )
}


export default App;
