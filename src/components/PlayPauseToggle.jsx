import React, { Component } from 'react';

class PlayPauseToggle extends Component {
    constructor(props) {
        super(props)
        this.setTimerToggle = this.setTimerToggle.bind(this)
      }
      setTimerToggle(event) {
        return this.props.setTimerToggle()
      }
      render() {
        console.log('****timerOn: ' + this.props.timerOn)
        return (
            
            <div className="switch switch-text">
            <input className="switch-input" 
                    id="text-switch-1" 
                    type="checkbox" 
                    name="exampleSwitch"
                    checked={this.props.timerOn}
                    onChange={this.setTimerToggle} />
            <label className="switch-paddle large" htmlFor="text-switch-1">
                <span className="show-for-sr">Screen reader text only</span>
                <span className="switch-active" aria-hidden="true">On</span>
                <span className="switch-inactive" aria-hidden="true">Paused</span>
            </label>
        </div>
    )
      }
}

export default PlayPauseToggle