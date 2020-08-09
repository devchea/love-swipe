import React from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Welcome to the chat</h1>
          </Route>
          <Route path="/">
            <h1>Welcome to the homepage</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
