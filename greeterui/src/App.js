import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//blockchain additions
import {greeterContract} from './EthereumSetup';

class App extends Component {
  componentWillMount() {
     var data = greeterContract.greet()
     this.setState({
       greeting: String(data)
     })
   }

  constructor(props) {
   super(props)
   this.state = {
     greeting: ""
   }
  }

  render() {
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>I am Greeter</h2>
         </div>
         <h2>"{this.state.greeting}"</h2>
       </div>
     );
  }

}

export default App;
