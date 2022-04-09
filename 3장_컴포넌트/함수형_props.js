import PropTypes from 'prop-types'; // propTypes 사용

// 함수 컴포넌트 구조
// import './App.css';
// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

// export default App;

const MyComponent = ({ latte, favoriteNumber, children }) => {
  // 파라미터 부분에서 비구조화 할당
  return (
    <>
      <div>내가 좋아하는 라떼는 {latte}</div>
      <div>children 값은 {children}</div>
      {/* App 컴포넌트에서 Mycomponent 태그 사이에 작성한 문자열을 MyComponent 내부에서 보여주기 위해 props.childeren 사용 */}
      {/* 'children 값은 라떼' 로 브라우저에 출력됨 */}
      <div>좋아하는 숫자는 {favoriteNumber}</div>
    </>
  );
};

MyComponent.defaultProps = {
  latte: '기본 라떼',
}; // props 값을 따로 지정하지 않았을 때 보여 줄 기본값 설정

MyComponent.propTypes = {
  latte: PropTypes.string, // latte 값은 무조건 문자열 형태로 전달해야 함
  favoriteNumber: PropTypes.number.isRequired, // propTypes를 지정하지 않았을 때 경고 메시지를 띄움. 즉 필수 props로 지정.
}; // 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때 사용. 에러 메시지는 콘솔 창에만 뜸.

export default MyComponent;
// 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent를 불러오도록 설정함
