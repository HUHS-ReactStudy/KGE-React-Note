import React, { Component } from 'react';

// createRef를 통한 ref 설정
class RefSample extends Component {
  input = React.createRef();
  // 컴포넌트 내부에 멤버 변수로 React.createRef() 담기

  handleFocus = () => {
    this.input.current.focus();
    // ref를 설정해준 DOM에 접근하려면 this.input.current 조회하면 됨
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
        {/* 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주기  */}
      </div>
    );
  }
}

export default RefSample;

// 콜백 함수를 통한 ref 설정
// <input ref={(ref) => {this.input = ref}} />; // this.input은 input 요소의 DOM을 가리키게 됨
