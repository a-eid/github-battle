import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Popular from '../popular/popular' 
import Home from '../home/home'
import Battle from '../battle/battle'
import Nav from '../nav/nav'
import NotFound from '../notfound/notfound'
import './app.css';



class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Nav />
            <div className="navfix">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/popular" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
