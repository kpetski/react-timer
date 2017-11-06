import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.secondsToString = this.secondsToString.bind(this)
  }

  secondsToString(secs) {
    var hr = Math.floor(secs / 3600)
    var min = Math.floor((secs - (hr * 3600))/60)
    var sec = secs - (hr * 3600) - (min * 60)
    
    //format mins and secs as two digits
    min = ('0' + min).slice(-2)
    sec = ('0' + sec).slice(-2)
    if (hr) {
      hr += ':'}
    else {
      hr = ''
    }
    return hr + min + ':' + sec
  }

  render() {
    
        //if the timer is counting down show the timer
      if (this.props.timeLeft === null || this.props.timeLeft <= 0)
        return (
        <div>
          <h3>Please Select a Timer</h3>
        </div>)
        return (
        <div>
          <h1>Time Left: {this.secondsToString(this.props.timeLeft)}</h1>
        </div>)
    }
   
}

export default Timer