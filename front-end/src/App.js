import React from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import Navigation from "./components/Navigation"
import WelcomePage from "./components/WelcomePage";
import DriverLogin from "./components/DriverLogin";
import Register from "./components/Register"

function App() {
  return (
    <main>
      <Navigation />
      <Route exact path ='/' component = {WelcomePage} />
      <Route exact path ='/driver-login' component = {DriverLogin} />
      <Route exact path ='/diner-login' component = {WelcomePage} />
      <Route exact path ='/register' component = {Register} />
    </main>
  );
}

export default App;
