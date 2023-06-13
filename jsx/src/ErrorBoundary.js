import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // 에러 발생시 자동으로 실행
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) return <div>오류</div>;
    else return this.props.children;
  }
}

export default ErrorBoundary;
