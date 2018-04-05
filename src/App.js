import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from './assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import './App.css';
import './assets/react-toolbox/theme.css';
import 'material-design-icons/iconfont/material-icons.css';

import Records from './components/records/records';
import Recording from './components/recording/recording';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ThemeProvider theme={theme}>
            <div>
              <Route exact path="/" component={Records} />
              <Route path="/recording/:id" component={Recording} />
            </div>
          </ThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
