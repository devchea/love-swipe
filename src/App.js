import React from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'
import ChatContainer from './ChatContainer'
import ChatScreen from './ChatScreen'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat'/>
            <ChatScreen />
          </Route>
          <Route path='/profile'>
          <Header backButton='/'/>
            <h1>Profile page</h1>
          </Route>
          <Route path='/chat'>
            <Header backButton='/'/>
            <ChatContainer/>
          </Route>
          <Route path='/'>
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
