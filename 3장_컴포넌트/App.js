import MyComponent from './함수형_props'; // MyComponent 컴포넌트를 불러옴
import Counter from './클래스형_state';
import Say from './함수형_state';

function App() {
  return (
    <>
      {/* props */}
      <MyComponent latte="딸기라떼" favoriteNumber={1}>
        라떼
      </MyComponent>
      {/* MyComponent 컴포넌트 불러와서 사용하기 */}
      {/* 컴포넌트 태그 사이의 내용(라떼)을 보여주는 props는 children */}

      {/* state */}
      <Counter />
      <Say />
    </>
  );
}

export default App;
