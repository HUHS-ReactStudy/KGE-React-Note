import React, { useState, useMemo } from 'react';

// useMemo -> 함수 컴포넌트 내부에서 발생하는 연산 최적화
// 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용

const getAverage = (numbers) => {
  console.log('평균값 계산 중');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);
  // list 배열의 내용이 바뀔 때만 getAverage 함수 호출
  // useMemo를 사용하지 않았을 때는, 렌더링 할 때마다 호출돼서 getAverage 함수가 호출될 필요가 없을 때도 호출됨

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>
        <b>평균값:</b> {avg}
        {/* {getAverage(list)} 대신 {avg} */}
      </div>
    </div>
  );
};

export default Average;
