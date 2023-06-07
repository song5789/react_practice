import { Component } from "react";

// Side 클래스형 컴포넌트
class Side extends Component {
  render() {
    let name = "홍길동";
    return (
      <>
        <li>{name}</li>
        <li>2</li>
        <li>3</li>
      </>
    ); // JSX
  }
}

export class Side2 extends Component {
  render() {
    return <div>Side2</div>;
  }
}

export default Side;
