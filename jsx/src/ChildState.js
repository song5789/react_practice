// 부모컴포넌트가 자식컴포넌트에게 특정값을 넘겨주는 형태
// 부모에서 해당 값을 변경하는 작업을 한다면
// 자식의 값도 바뀌게됨.

import { Component } from "react";

class ChildState extends Component {
  render() {
    return (
      <>
        <div>{this.props.number}</div>
        <button onClick={() => this.props.func()}>+1</button>
        {/* 부모에게서 받은 함수. 부모의 state 를 자식이 변경해줄 수 있는 함수임.*/}
      </>
    );
  }
}

export default ChildState;
