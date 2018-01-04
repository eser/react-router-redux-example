import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import About from './components/pages/about/About';

import reducers from './reducers';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
