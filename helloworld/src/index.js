import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// props(부모 컴포넌트에서 자식으로 데이터 전송)
// state(자신의 값을 저장)

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          console.log(this.props.handlerCilck());
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xValue: true,
    };
  }

  handlerCilck(i) {
    // 불변성. state 내의 배열은 변하지않음.
    const squares = this.state.squares.slice();
    if (caculateWinner(squares) || squares[i]) {
      return;
    }
    const xValue = this.state.xValue;
    squares[i] = xValue ? "X" : "O";
    this.setState({
      squares: squares,
      xValue: !xValue,
    });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} handlerCilck={() => this.handlerCilck(i)} />;
  }

  render() {
    const winner = caculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xValue ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function caculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================
console.log(ReactDOM);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
