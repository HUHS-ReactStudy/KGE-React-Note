import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트 구조
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// export default App;

class MyComponent extends Component {
  //   static defaultProps = {
  //     latte: '기본 라떼',
  //   };
  //   static PropTypes = {
  //     latte: PropTypes.string,
  //     favoriteNumber: PropTypes.number.isRequired,
  //   };
  // 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 이렇게 class 내부에서 설정할 수도 있음

  render() {
    const { latte, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <>
        <div>내가 좋아하는 라떼는 {latte}</div>
        <div>children 값은 {children}</div>
        <div>좋아하는 숫자는 {favoriteNumber}</div>
      </>
    );
  }
}

MyComponent.defaultProps = {
  latte: '기본 라떼',
};

MyComponent.propTypes = {
  latte: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
