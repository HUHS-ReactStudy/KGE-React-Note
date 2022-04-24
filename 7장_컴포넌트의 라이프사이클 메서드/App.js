import React, { Component } from 'react';
import ErrorBoundary from './클래스형_Error';
import LifeCycleSample from './클래스형_LifeCycle';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
} // 랜덤 색상 생성

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
        {/* LifecycleSample을 ErrorBoundary로 감싸서, 에러가 발생하면 흰 화면 대신 '에러가 발생했습니다' 문구가 뜸 */}
      </div>
    );
  }

  // 컴포넌트가 처음 렌더링됐을 때 콘솔창 -> constructor, getDerivedStateFromProps, render, componentDidMount
  // 랜덤 색상 버튼 클릭했을 때 콘솔창 -> getDerivedStateFromProps, shouldComponentUpdate {color: '#4d2d4b'} {number: 0, color: '#4d2d4b'}, render, getSnapshotBeforeUpdate, componentDidUpdate {color: '#000000'} {number: 0, color: '#000000'}, 업데이트되기 직전 색상:  rgb(0, 0, 0)
  // 더하기 버튼 클릭했을 때 콘솔창 -> getDerivedStateFromProps, shouldComponentUpdate {color: '#000000'} {number: 1, color: '#000000'}, render, getSnapshotBeforeUpdate, componentDidUpdate {color: '#000000'} {number: 0, color: '#000000'}
}

export default App;
