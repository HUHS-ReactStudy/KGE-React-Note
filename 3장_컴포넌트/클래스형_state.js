import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  }; // state 초기값 지정. constructor 메서드를 선언하지 않고 초기값 설정하는 방법.

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   }; // state의 초기값 설정. 컴포넌트의 state는 객체 형식이어야 함.
  // } // 컴포넌트에 state를 설정할 때는 constructor 메서드 사용

  render() {
    const { number, fixedNumber } = this.state; // render 함수에서 state를 조회할 때는 this.state 조회
    return (
      <>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              (prevState, props) => ({
                number: prevState.number + 1,
              }),
              // this.setState({ number: number + 1 });에서 객체 대신 함수를 인자로 넣어주는 방법
              // prevState는 기존 상태이고, props는 현재 지니고 있는 props
              // props는 필요하지 않을 경우 생략 가능. 여기서는 생략해도 됨
              // this.setState를 사용해 state 값 변경. this.setState는 인자로 전달된 객체 안에 들어 있는 값만 변경함.
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
              // setState를 사용하여 값을 업데이트 한 후 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백함수 등록
            );
          }}
        >
          +1
        </button>
        {/* 버튼을 누를 때마다 숫자(number)가 1씩 증가 */}
      </>
    );
  }
}

export default Counter;
