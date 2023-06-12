import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      new: "test",
      currentTime: new Date(),
    };
    // this.setState({ number: 7 }); // 비동기적으로 작동.
    this.setState((state, props) => {
      return { number: state.number + 1 };
    });
  }
  render() {
    const { name, value, href } = this.props;
    const { number } = this.state;
    // this.state.number = 7; // 리렌더링 하지 않음 - 오류임. state 는 setState 메서드로만 바꿀 수 있음.
    // this.setState({ number: 7 }); // 오류. - 무한 반복을 일으킴. render 안에서 바꾸면 첫 1회에서 바꾸고
    // 리렌더링함. 이후 렌더 후에 또 값을 바꾸는게 있으니 계속 무한으로 render() 함수를 콜함. render() 내부에서
    // 값을 바꾸려는 시도를 하지말것.

    // 함수 밖이나 이벤트로 실행
    // 이벤트로 실행할때는 화살표 함수등으로 감싸줌. 아니면 무한반복함
    return (
      <>
        <div>
          {number} {name} {value} {href}
        </div>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });
            // this.setState({ number: number + 1 }); <- 비동기 방식 작동
            this.setState(
              (state, props) => {
                return { number: state.number + 1 };
              },
              () => console.log("done")
            ); // 동기 방식 작동, 콜백함수로 호출 후 다른작업 가능.
            this.setState((state, props) => {
              return { number: state.number + 1 };
            });
          }}
        >
          +1
        </button>
      </>
    );
  }
}

export default Counter;
