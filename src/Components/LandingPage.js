import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="LandingPage">
      <h1 className="LandingPage__logo">DS-Petful</h1>

      <img src={require("../images/petful-landing-page.jpg")} alt="Woman holding her newly adopted dog" className="LandingPage__img"/>

      <p className="LandingPage__content">Welcome to DS-Petful. We are a pet adoption service with a twist! Only one pet is up for adoption at a time. You can join the adoption line any time you please, but can only adopt a pet once you are at the FRONT of the line. You are able to see where your position in line is but can only see the cat and dog that are up next.</p>

      <button className="LandingPage__button"><Link>Enter</Link></button>
    </div>
  );
}

export default LandingPage;