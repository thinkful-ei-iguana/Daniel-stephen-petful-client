import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import './App.css';

class App extends Component {
  state = {
    currUser: '',
    adoptUser: '',
    userLine: [], 
    currPet: {},
    currCat: {},
    currDog: {},
    recAdopt: [],
  };


  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          component={LandingPage}
        />
      </div>
    );
  }
};

export default App;
