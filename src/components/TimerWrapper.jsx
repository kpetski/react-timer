import React, { Component } from 'react';
import Button from './Button.jsx'
import Timer from './Timer.jsx'
import Reset from './Reset.jsx'
import Header from './Header.jsx'
import PlayPauseToggle from './PlayPauseToggle.jsx'
import CustomTime from './CustomTime.jsx'
  
  class TimerWrapper extends Component {
    constructor(props) {
      super(props)
      this.state =  {
        timeLeft: null, 
        timer: null,
        buttonValues: [5, 10, 15],
        buttonStatus: ['', '', ''],
        timerInterval: 'minutes',
        timerOn: 'defaultChecked'
      }
      this.startTimer = this.startTimer.bind(this)
      this.setTimerToggle = this.setTimerToggle.bind(this)
    }
    startTimer(timeLeft, currButtonStatus) {
      console.log(currButtonStatus)
      if(currButtonStatus !== null) {
      this.setState({buttonStatus: currButtonStatus})}
      else {
        this.setState({buttonStatus: this.state.buttonStatus.fill('')})
      }
      clearInterval(this.state.timer)
      let timer = setInterval(() => {
        //console.log('2: Inside of setInterval')
        var timeLeft
        if(this.state.timerOn === 'defaultChecked'){
        timeLeft = this.state.timeLeft - 1}
        else {
          timeLeft = this.state.timeLeft
        }
        if (timeLeft <= 0) {
          clearInterval(timer)
          this.setState({buttonStatus: this.state.buttonStatus.fill('')})
        }
        this.setState({timeLeft: timeLeft})
      }, 1000)
      //console.log('1: After setInterval')
      return this.setState({timeLeft: timeLeft,
        timer: timer})
     
    }

    setTimerToggle() {
      if(this.state.timerOn === 'defaultChecked') {
        console.log('turning toggle off')
        this.setState({timerOn: ''})
      }
      else {
        console.log('turning toggle on')
        this.setState({timerOn: 'defaultChecked'})  
      }

    }

    render() {
      return (
        <div className="row-fluid">
        <Header title='Amazing Timer'/>
        <br/>
        <Timer timeLeft={this.state.timeLeft}/>
        <br/>
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
            <h3>Or Enter a Custom Time</h3>
            <CustomTime startTimer={this.startTimer}/><br />
            <Reset buttonStatus={this.state.buttonStatus} startTimer={this.startTimer}/>
            <PlayPauseToggle setTimerToggle={this.setTimerToggle} timerOn={this.state.timerOn}/>
           </div>
      )
    }
  }
  

export default TimerWrapper