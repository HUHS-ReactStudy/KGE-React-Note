import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  // 렌더링을 하는 동시에 함수를 만들어 전달하는 대신, 함수를 미리 준비하여 전달 (컴포넌트 임의 메서드 생성)

  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  // 화살표 함수 형태로 메서드를 정의하지 않는다면 이렇게 constructor 함수에서 함수를 바인딩해야 함

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      // e.target.name은 해당 인풋의 name을 가리킴
      // 인풋의 name이 message라면, message: e.target.value와 같이 동작
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }; // 인풋에서 Enter 키를 눌렀을 때 handleClick 메서드 호출

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="message"
          placeholder="입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>

        {/* 렌더링을 하는 동시에 함수를 만들어 전달하는 방법 */}
        {/* <input
          type="text"
          name="message"
          placeholder="입력하세요"
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        /> */}
        {/* 이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를 업데이트하고, input의 value값을 state의 값으로 지정 */}

        {/* <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button> */}
        {/* 버튼 클릭 이벤트가 발생하면 현재 입력된 텍스트 값을 메시지 박스로 띄운 후 텍스트 값을 공백으로 설정 */}
      </>
    );
  }
}

export default EventPractice;
