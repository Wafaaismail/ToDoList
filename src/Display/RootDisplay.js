import React, { Component } from 'react'
import Display from './Display'
import { store } from '../redux/reducers'
import { dcontroller } from './displayjson'

export default class RootDisplay extends Component {
  // state = {
  //   selectedOptions : {}
  // }
  render() {
    console.log(this.state)
    return (
      <div>
        <h4>Your stored Todos </h4>
        <Display
            s= {store.getState()}  //store data
            c= {dcontroller}    //json obj
            // onChange = {(selectedOptions)=> this.setState({selectedOptions})} //controll state
            // selectedOptions ={this.state.selectedOptions}  
        />
      </div>
    )
  }
}
