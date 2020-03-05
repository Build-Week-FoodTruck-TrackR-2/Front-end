import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import privateRoute from './components/privateRoute'
import Navigation from './components/Navigation'
import WelcomePage from './components/WelcomePage'
import DriverLogin from './components/DriverLogin'
import Register from './components/Register'
import FoodieLogin from './components/FoodieLogin'

function App() {
  return (
    <Router>
      <main>
        <Navigation />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/driver-login" component={DriverLogin} />
          <Route exact path="/foodie-login" component={FoodieLogin} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
