import React, { Component } from 'react';

class Reset extends Component {
    constructor(props) {
        super(props)
        this.startTimer = this.startTimer.bind(this)
      }
      startTimer(event) {
        //reset all buttons to in-active
        let currButtonStatus = this.props.buttonStatus.fill('')

        //Clear out custom time fields
        if(document.getElementById("hours")) {
          document.getElementById("hours").value = ""}
        if(document.getElementById("minutes")) {
          document.getElementById("minutes").value = ""}
        if(document.getElementById("seconds")) {
          document.getElementById("seconds").value = ""}
  
        //call start timer function from calling class (in this case TimerWrapper)
        //startTimer takes in the amount of time and the button status
        return this.props.startTimer(0, currButtonStatus)
      }
      render() {
        return (
        <button
          type="button"
          className="button btn-cta"
          onClick={this.startTimer}>
          Reset
        </button>)
      }
}

export default Reset