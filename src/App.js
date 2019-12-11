import React, { Component } from 'react';
import './App.css';
import store from './redux/reducers';
import { Provider } from 'react-redux'
import Todo from './Todo';
//import { onSaving } from './dbGun/mainData'
import RootDisplay from './Display/RootDisplay';

//import Display from './Display';
class App extends Component {
  render() {
    //onSaving()
    return (
      <Provider store={store}>
        <div className="App">
          <br/>
          <br/>
          <h1> Todos</h1>
          <br/>
          <Todo className="todo"/>
          <br/>
          <hr/>
        
          <RootDisplay/>
        </div>
      </Provider>

    );
  }
}

export default App;
