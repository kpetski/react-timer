import React, { Component } from 'react';
import Button from './Button.jsx'
import Timer from './Timer.jsx'
  
  class TimerWrapper extends Component {
    constructor(props) {
      super(props)
      this.state =  {
        timeLeft: null, 
        timer: null,
        buttonValues: [5, 10, 15],
        buttonStatus: ['', '', ''],
        timerInterval: 'seconds'
      }
      this.startTimer = this.startTimer.bind(this)
    }
    startTimer(timeLeft, currButtonStatus) {
      this.setState({buttonStatus: currButtonStatus})
      console.log('button status')
      console.log(this.state.buttonStatus)
      clearInterval(this.state.timer)
      let timer = setInterval(() => {
        console.log('2: Inside of setInterval')
        var timeLeft = this.state.timeLeft - 1
        if (timeLeft === 0) clearInterval(timer)
        this.setState({timeLeft: timeLeft})
      }, 1000)
      console.log('1: After setInterval')
      return this.setState({timeLeft: timeLeft,
        timer: timer})
    }
    render() {
      return (
        <div className="row-fluid">
          <h2>Timer</h2>
          <ul className={`button-group btn-cta secondary even-${this.state.buttonValues.length}`}>
              {this.state.buttonValues.map((time, i) =>
              <li key={i}>
              <Button 
              time={time} 
              index={i}
              startTimer={this.startTimer} 
              buttonStatus={this.state.buttonStatus}
              timerInterval={this.state.timerInterval}/>
              </li>)}
            </ul>
            <Timer timeLeft={this.state.timeLeft}/>
        </div>
      )
    }
  }
  

export default TimerWrapper