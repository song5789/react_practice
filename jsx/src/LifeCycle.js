// 라이프 사이클은 클래스형 컴포넌트에만 있음.

import { Component } from "react";

class LifeCycle extends Component {
  // 호출시 가장 최초로 실행됨.
  // 컴포넌트를 초기화하는 녀석
  constructor(props) {
    super(props);
    console.log("constructor() 호출");
    this.state = {
      value: 0,
    };
  }

  // 최초 호출시 constructor 다음으로 실행, 업데이트 후에는 최초 실행
  // 마운트 시에 실행됨.
  // 객체를 반환하면 해당 객체는 컴포넌트의 state 로 추가. null 반환 시 아무일도 없음.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps() 호출");
    // props 의 값을 state로 옳길때
    return null;
  }

  // 디폴트 함수
  // 실제 작성한 요소들을 브라우저에 렌더링하는 역할
  render() {
    console.log("render() 호출");
    return (
      <>
        <div onClick={() => this.setState({ value: this.state.value + 1 })}>
          LifeCycle <h1>{this.state.value}</h1>
        </div>
      </>
    );
  }

  // 마운트가 끝난뒤에 실행됨
  componentDidMount() {
    console.log("componentDidMount() 호출");
  }

  // 업데이트 - 리렌더링 여부를 결정 (불린값 리턴함.)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate() 호출");
    return true;
  }
  // 업데이트 조건 - state, props 값이 변경될 때, 부모 컴포넌트가 업데이트 될 때
  // 강제로 업데이트를할떄 (forceUpdate())
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 이전 값을 저장
    console.log("getSnapshotBeforeUpdate() 호출");
    return null;
  }
  // 업데이트가 끝난 후
  componentDidUpdate() {
    console.log("componentDidUpdate() 호출 ");
  }

  // 컴포넌트가 없어질 때
  componentWillUnmount() {
    console.log("componentWillUnmount() 호출");
  }
}

export default LifeCycle;
