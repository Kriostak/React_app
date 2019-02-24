import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Posts from './containers/Posts'
import Post from './containers/Post'
import Login from './containers/Login'

import classes from './App.module.scss'

class App extends Component {
  render() {
    return (<div className={classes.Wrapper}>
          <Switch>
            <Route path="/posts" exact component={Posts} />
            <Route path='/posts/:id' exact component={Post} />
            <Route path="/" component={Login} />
          </Switch>
      </div>)
  }
}

export default App;
