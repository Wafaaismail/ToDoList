import React, { Component } from 'react';
import './App.css';
import store from './redux/reducers';
import { Provider } from 'react-redux'
import Todo from './Todo';
//import Display from './Display';
class App extends Component {
   
  render() {
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
