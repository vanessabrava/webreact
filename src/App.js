// Importantando o React
import React, { Component } from 'react';
// Importantando o Component OneStep
import OneStep from './create/OneStep/OneStep'
// Importantando o component Main
import Main from './main'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;