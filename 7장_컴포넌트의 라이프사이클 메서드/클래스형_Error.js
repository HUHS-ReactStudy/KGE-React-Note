import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  } // 에러가 발생하면 componentDidCatch 메서드가 호출되며, 이 메서드는 this.state.error값을 true로 업데이트해줌

  render() {
    if (this.state.error) return <div>에러가 발생했습니다</div>; // this.state.error 값이 true면 에러가 발생했다는 문구 보여줌
    return this.props.children;
  }
}

export default ErrorBoundary;
