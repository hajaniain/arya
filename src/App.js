import React, { Component } from 'react';
import theme from './assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import './App.css';
import './assets/react-toolbox/theme.css';
import 'material-design-icons/iconfont/material-icons.css';

import Recording from './components/recording/recording';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Recording />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
