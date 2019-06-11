import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/Shared/AppNavbar';
import  InfoGroup  from './pages/InfoGroup/InfoGroup';
import  Charts  from './pages/Charts/Charts';
import  HomePage  from './pages/Home/Home';
import './App.css';

class App extends Component {

  render() {
  
    return (
      <div className="app-body">
        <Router>
          <div className="router-body">
          <AppNavbar/>
            <Switch>
              <Route path='/' exact={true} component={HomePage}/>
              <Route path='/groups' exact={true} component={InfoGroup}/>
              <Route path='/charts' exact={true} component={Charts}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
