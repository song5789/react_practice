// state - 해당 컴포넌트에서 수정가능
// state 가 수정되면 리렌더링함.
// class 형에서는 state, 함수형에서는 useStete hook 사용

import { Component } from "react";
import ChildState from "./ChildState";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.oneUp = this.oneUp.bind(this);
  }

  // 자식에게 함수만 넘기게되면 this 를 잃어버리게됨.
  // 따라서 부모의 객체에서 bind 를 통해 this 를 고정시키면 의도한대로 동작함.
  // 이러한 동작방식을 state 끌어올리기라함.
  oneUp() {
    this.setState({
      number: this.state.number + 1,
    });
    console.log("test");
  }

  render() {
    const { number } = this.state;
    return (
      <>
        <div>{number}</div>
        <button onClick={() => this.setState({ number: number + 1 })}>+1</button>
        <ChildState number={number} func={this.oneUp} />
      </>
    );
  }
}

export default State;
