import React, { Component } from 'react';
import './App.css';
import store from './redux/reducers';
import { Provider } from 'react-redux'
import Todo from './Todo';
// import  Gun from 'gun/gun'
// const  gun = Gun('http://yourdomain.com/gun')
import { onSaving } from './dbGun/mainData'
import RootDisplay from './Display/RootDisplay';
// var Gun = require('gun/gun')

//import Display from './Display';
class App extends Component {
  render() {
    onSaving()
    return (
      <Provider store={store}>
        <div className="App">
          <br/>
          <br/>
          <h1>Todos</h1>
          <br/>
          <Todo />
          <br/>
          <hr/>
          <RootDisplay store = {store.getState()}/>
        </div>
      </Provider>

    );
  }
}

export default App;
