import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './components/events/Events';
import { Provider } from 'react-redux';
import store from './Store';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import Header from './components/layout/Header';
import AddEvent from './components/events/AddEvent';
import EditEvent from './components/events/EditEvent';
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Find My Events" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Events} />
                <Route exact path="/event/add" component={AddEvent} />
                <Route exact path="/event/edit/:id" component={EditEvent} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
