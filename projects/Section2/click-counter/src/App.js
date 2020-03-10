import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }
  }

  counterCondition = () => {

    const { counter } = this.state;

    return counter >= 1;
  }
  handleIncrement = () => {
    const { counter} =  this.state;

    this.setState({counter: counter+1})
  }

  
  handleDecrement = () => {
    const { counter } = this.state;

    if(this.counterCondition())
      this.setState({counter: counter-1});
  }


  
  render() {

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">{this.state.counter}</h1>
        {!this.counterCondition() && <div data-test='error-message'>You cannnot go below zero</div>}
        <button data-test="increment-button" onClick={this.handleIncrement}>Increment counter</button>
        <button data-test="decrement-button" onClick={this.handleDecrement}>Decrement counter</button>
      </div>
    );

  }
}

export default App;
