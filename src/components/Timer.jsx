import React, { Component } from 'react';

class Timer extends Component {
    render() {
        //if the timer is counting down show the timer
      if (this.props.timeLeft === null || this.props.timeLeft === 0)
        return <div/>
      return <h1>Time left: {this.props.timeLeft}</h1>
    }
   
}

export default Timer