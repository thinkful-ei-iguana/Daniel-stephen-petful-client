import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import AdoptionPage from './Components/AdoptionPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        component={LandingPage}
      />
      <Route
        exact
        path="/adopt"
        component={AdoptionPage}
      />

    </div>
  );

};

export default App;
