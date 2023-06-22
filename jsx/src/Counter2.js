import React, { Component } from "react";

class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: [{}, {}],
    };
    this.add = this.add.bind(this);
    this.outside = React.createRef();
  }

  add() {
    const n = this.state.divs.concat({});
    this.setState({ divs: n });
  }

  lists() {
    return this.state.divs.map((div, i) => <Div key={i} i={i} />);
  }

  componentDidUpdate() {
    const outside = this.outside.current;
    console.dir(outside);
    console.log(outside.scrollTop);
    console.log(outside.clientHeight);
    console.log(outside.scrollHeight);
    outside.scrollTop = outside.scrollHeight - outside.clientHeight;
  }

  render() {
    return (
      <>
        <div
          style={{
            border: "1px solid",
            padding: "10px",
            width: 700,
            height: "250px",
            overflow: "auto",
          }}
          ref={this.outside}
        >
          {this.lists()}
        </div>
        <button onClick={this.add}>add</button>
      </>
    );
  }
}

export default Counter2;

class Div extends Component {
  render() {
    return <div style={{ height: "50px", border: "1px solid", marginBottom: "5px" }}>{this.props.i}</div>;
  }
}
