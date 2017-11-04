import React, { Component } from 'react';
import './App.css';
import TimerWrapper from './components/TimerWrapper.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
          <TimerWrapper />
      </div>
      
    );
  }
}

export default App;
