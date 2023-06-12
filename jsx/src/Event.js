import { Component, createRef } from "react";

// 리액트에서 DOM에 되도록 직접 접근하지 않고
// state 로 관리함.
class Event extends Component {
  state = {
    value: "",
    msg: "",
  };

  // ref 를 설정하는 방법은 여러가지
  // 요소 내에서 ref = {(ref)=> this.elemName = ref} 와 같이 콜백을 쓰거나
  // 아래처럼 생성자 메서드에 createRef() 메서드로 지정자를 만들고
  // 요소 ref 속성에 해당 지정자를 넣어주면됨.
  constructor(props) {
    super(props);
    this.myInput = createRef();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClear = () => {
    this.setState({
      value: "",
      msg: "",
    });

    // 커서이동
    // DOM을 선택해야함.
    // this.myInput.focus();
    this.myInput.current.focus();
    // 단 createRef() 처럼 생성자로 만든 DOM 값은 current 내부에있음.
  };

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleClear();
    }
  };

  // 함수를 넣을땐 여러가지 방법이 있음.
  // constructor 메서드에서 직접 bind 로 객체를 지정해 넣어주는 방법. (함수 선언문으로 선언하면 this가 가르키는게 window 가 되기 때문에 오류가 생김.)
  // 애초에 화살표 함수로 선언한 함수를 넣어주는 방법 (화살표함수는 this가 없기 때문에 외부(여기선 state)에서 찾음)
  render() {
    return (
      <>
        <div>
          <input
            type="text"
            name="value"
            // ref={(ref) => (this.myInput = ref)}
            ref={this.myInput}
            value={this.state.value}
            placeholder="message..."
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
          />
        </div>
        <div>
          <input type="text" name="msg" value={this.state.msg} placeholder="message..." onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
        </div>
        <button onClick={this.handleClear}>Clear</button>
      </>
    );
  }
}

export default Event;
