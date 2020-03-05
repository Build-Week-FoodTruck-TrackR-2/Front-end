import React from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import Navigation from "./components/Navigation"
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <main>
      <Navigation />
      <Route exact path ='/' component = {WelcomePage} />
    </main>
  );
}

export default App;
