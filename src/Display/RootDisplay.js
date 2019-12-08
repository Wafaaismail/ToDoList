import React, { Component } from 'react'
import Display from './Display'
import { store } from '../redux/reducers'
export default class RootDisplay extends Component {
  state = {
    selectedOptions : {}
  }
  render() {
    return (
      <div>
        <h4>Your stored Todos </h4>
        <Display
            data = {this.props.store}
            onChange = {(selectedOptions)=> this.setState({selectedOptions})}
            selectedOptions ={this.state.selectedOptions}
        />
      </div>
    )
  }
}
