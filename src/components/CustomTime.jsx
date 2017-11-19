import React, { Component } from 'react';

class CustomTime extends Component {
    constructor(props) {
        super(props)
        this.startTimer = this.startTimer.bind(this)
      }
    startTimer(event) {
        console.log('********* IN CUSTOM TIME ************')
        console.log(document.getElementById('minutes').value)
        console.log(document.getElementById('minutes').validity.valid)
        let hours = 0
        let minutes = 0
        let seconds = 0

        this.setState({error: ''})
        if(document.getElementById('hours').validity.valid) {
            hours = (document.getElementById('hours').value) * 3600
            console.log('seconds for hrs: ' + hours)
        }
        if(document.getElementById('minutes').validity.valid) {
            minutes = (document.getElementById('minutes').value) * 60
            console.log('seconds for mins: ' + minutes)
        }
        if(document.getElementById('seconds').validity.valid) {
            seconds = (document.getElementById('seconds').value)
            console.log('seconds for secs: ' + seconds)
        }
        
        let total = parseInt(hours, 10) 
                    + parseInt(minutes, 10) 
                    + parseInt(seconds, 10)
        console.log(total)

        //call start timer function from calling class (in this case TimerWrapper)
        //startTimer takes in the amount of time and the button status
        return this.props.startTimer(total, null)
      }  

      render() {
        return (
            //TODO - add validation messages
            <div className="bg-off-white padding-medium">
                 <div className="row grid-spacing-example">

                    <div className="small-3 columns">
                        <div className="md-text-field with-floating-label" >
                            <input
                            id="hours"
                            required
                            type="number"
                            pattern="\d*"
                            min="0" />
                            <label htmlFor="hours">Hours</label>
                        </div>
                    </div>

                    <div className="small-3 columns">
                        <div className="md-text-field with-floating-label" >
                            <input
                            id="minutes"
                            required 
                            type="number"
                            pattern="\d*"
                            min="0"/>
                            <label htmlFor="minutes">Minutes</label>
                        </div>
                    </div>

                    <div className="small-3 columns">
                        <div className="md-text-field with-floating-label" >
                            <input
                            id="seconds" 
                            required
                            type="number"
                            pattern="\d*"
                            min="0"/>
                            <label htmlFor="seconds">Seconds</label>
                        </div>
                    </div>

                    <div className="small-3 columns">
                    <button
                    type="button"
                    onClick={this.startTimer}>
                    Start Cutstom Timer
                    </button>
                    </div>
                    </div>           
                </div>
               
            )
      }
}

export default CustomTime


