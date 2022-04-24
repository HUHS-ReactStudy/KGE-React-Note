import React, { Component } from 'react';

// 마운트 (DOM이 생성되고 웹 브라우저상에 나타나는 것)
// constructor              -> 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
// getDerivedStateFromProps -> props에 있는 값을 state에 넣을 때 사용하는 메서드
// render                   -> UI를 렌더링하는 메서드
// componentDidMount        -> 컴포넌트가 웹 브라우저상에 나타난 후 (컴포넌트를 만들고 첫 렌더링을 다 마친 후) 호출하는 메서드

// 업데이트
// getDerivedStateFromProps -> props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용. 마운트 과정에서도 호출되고, 업데이트 시작 전에도 호출됨.
// shouldComponentUpdate    -> 컴포넌트가 리렌더링을 해야 할지 말아야 할지 결정하는 메서드. 반드시 true 혹은 false 반환해야 함.
// render                   -> 컴포넌트를 리렌더링함
// getSnapshotBeforeUpdate  -> 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
// componentDidUpdate       -> 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

// 언마운트 (컴포넌트를 DOM에서 제거하는 것)
// componentWillUnmount     -> 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  } // 부모에게서 받은 color값을 state에 동기화

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  } // state.number 값의 마지막 자리 수가 4이면 리렌더링을 취소

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  } // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot값으로 반환하여 이것을 componentDidUpdate에서 조회할 수 있게 함

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
