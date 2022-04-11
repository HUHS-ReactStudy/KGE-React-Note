import React, { Component } from 'react';
import './클래스형_ref.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000', // validated 값을 검증 결과로 설정
    });
    this.input.focus(); // 버튼에서 onClick 이벤트가 발생할 때 input에 포커스를 주도록 함
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)} // input에 ref 달기
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          } // 버튼 누르기 전에는 비어있는 문자열, 버튼을 누른 후에는 검증 결과에 따라 success 혹은 failure. 이 값에 따라 input 색이 바뀜.
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
