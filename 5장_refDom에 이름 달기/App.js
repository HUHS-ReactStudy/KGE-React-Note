import React, { Component } from 'react';
import ValidationSample from './클래스형_ref';
import ScrollBox from './클래스형_컴포넌트 ref';

class App extends Component {
  render() {
    return (
      <>
        {/* ref 달기  */}
        <ValidationSample />

        {/* 컴포넌트에 ref 달기  */}
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        {/* 버튼을 누르면 ScrollBox 컴포넌트의 scrollToBottom 메서드 실행 */}
      </>
    );
  }
}

export default App;
