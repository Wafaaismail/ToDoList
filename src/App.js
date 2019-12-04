import React, { Component } from 'react';
import './App.css';
import store from './redux/reducers';
import { Provider } from 'react-redux'
import Todo from './Todo';
// import  Gun from 'gun/gun'
// const  gun = Gun('http://yourdomain.com/gun')
// import {onSaving} from './dbGun/mainData'
var Gun = require('gun/gun')

//import Display from './Display';
class App extends Component {
  constructor() {
    super();
      this.gun=Gun();
      window.gun = this.gun; //To have access to gun object in browser console
      this.gun.get('test').put({tsa:'sfaf'}).on(function(data, key){
        // {property: 'value'}, 'key'
        console.log('data', data)
       })
    }
   
  render() {
    // onSaving()
    return ( 
      <Provider store={store}>
      <div className="App">
       <h1>Todo</h1>
       <Todo/>
       {/* <Display/> */}
      </div>
      </Provider>
      
    );
  }
}

export default App;
