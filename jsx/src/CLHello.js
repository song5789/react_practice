import { Component } from "react";

class CLHello extends Component {
  // 클래스는 함수안에서만 변수 선언 가능
  constructor(props) {
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.setTextColor = this.setTextColor.bind(this);
  }

  state = {
    number: 0,
    color: "",
  };

  onIncrease() {
    const { number } = this.state;
    this.setState({
      number: number + 1,
    });
  }

  onDecrease() {
    const { number } = this.state;
    this.setState({
      number: number - 1,
    });
  }

  setTextColor(e) {
    this.setState({
      color: e.target.value,
    });
  }

  render() {
    const { name, age, children } = this.props;
    const { number, color } = this.state;
    return (
      <div style={{ position: "relative", zIndex: 1 }}>
        <div>{number}</div>
        <div>
          <button onClick={this.onIncrease}>+1</button>
          <button onClick={this.onDecrease}>-1</button>
        </div>
        <div style={{ color: color }}>
          <div>Hello! {name}</div>
          <div>나이: {age}</div>
          {children}
          <div>
            <button onClick={this.setTextColor} value="red">
              red
            </button>
            <button onClick={this.setTextColor} value="green">
              green
            </button>
            <button onClick={this.setTextColor} value="blue">
              blue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CLHello;
