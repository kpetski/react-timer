import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
        this.startTimer = this.startTimer.bind(this)
      }
      startTimer(event) {
        //reset all buttons to in-active
        let currButtonStatus = this.props.buttonStatus.fill('')
        //set button just clicked to active
        currButtonStatus[this.props.index] = 'active'
  
        //call start timer function from calling class (in this case TimerWrapper)
        //startTimer takes in the amount of time and the button status
        return this.props.startTimer(this.props.time, currButtonStatus)
      }
      render() {
        return (
        <button
          type="button"
          className={this.props.buttonStatus[this.props.index]}
          onClick={this.startTimer}>
          {this.props.time} {this.props.timerInterval}
        </button>)
      }
}

export default Button