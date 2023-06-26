import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixed: 1,
  };

  up = () => {
    this.setState(
      (state) => ({
        number: this.state.number + 1,
      }),
      () => {
        console.log(this.state.number);
      }
    );
  };

  down = () => {
    this.setState((state) => ({
      number: this.state.number - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.up}>+1</button>
        <button onClick={this.down}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;
