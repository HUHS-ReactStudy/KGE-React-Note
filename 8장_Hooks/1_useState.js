import { useState } from 'react';

// useState -> 함수 컴포넌트에서 상태를 관리해야할 때 사용

const Counter = () => {
  const [value, setValue] = useState(0);
  // useState 함수의 파라미터에는 상태의 기본값 넣음 (여기서는 0이 기본값)
  // 배열에서 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수
  // 두 번째 원소인 함수에 파라미터를 넣어서 호출하면, 전달받은 파라미터로 값이 바뀌고 컴포넌트가 리렌더링

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
