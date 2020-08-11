import React from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'
import { makeStyles, IconButton } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root:{
    margin: '0px',
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f9f9f9',
        padding: '15px',
        alignItems: 'center'
    }
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards/>
            <div className={classes.root.footer}>
            <SwipeButtons/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
