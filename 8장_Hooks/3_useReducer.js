import React, { useReducer } from 'react';

// useReducer -> useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용
// 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있음

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  } // action.type에 따라 다른 작업 수행
}
// 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션값을 전달받아 새로운 상태를 반환하는 리듀서 함수
// 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜주어야 함

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // useReducer의 첫 번재 파라미터에는 리듀서 함수를 넣고, 두 번째 파라미터에는 해당 리듀서의 기본값 넣음
  // state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수
  // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출됨

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter2;
