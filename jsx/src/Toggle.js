import { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    // this.handleClick = this.handleClick.bind(this);
    // 바인딩이 싫다면 화살표 함수로 선언
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  // 또는 이벤트 지정 시 화살표 함수 안에서 실행하는 형태로 작성 (()=> this.handleClick())
  render() {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>;
  }
}

export default Toggle;
