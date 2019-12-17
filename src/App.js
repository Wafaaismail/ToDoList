import React, { Component } from 'react';
import './App.css';
import store from './redux/reducers';
import { Provider } from 'react-redux'
import Todo from './Todo';
//import { onSaving } from './dbGun/mainData'
import RootDisplay from './Display/RootDisplay';
import DisplayRoot from './Display/DisplayRoot';
import {dcontroller} from './Display/displayjson'

//import Display from './Display';
class App extends Component {
  render() {
    //onSaving()
    return (
      <Provider store={store}>
        <div className="App">
          <br/>
          <br/>
          <h1 > Todos</h1>
          <br/>
          
          <Todo />
          <br/>
          <hr/>
          <div >
          <DisplayRoot s={dcontroller({})} id={{}}/>
          </div>
         
          {/* <RootDisplay/> */}
          
        </div>
      </Provider>

    );
  }
}

export default App;
