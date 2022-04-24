import React, { useState, useMemo, useCallback } from 'react';

// useCallback -> useMemo와 비슷하며 렌더링 성능을 최적화할 때 사용
// useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시한 배열을 넣음

const getAverage = (numbers) => {
  console.log('평균값 계산 중');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average2 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  //   const onChange = (e) => {
  //     setNumber(e.target.value);
  //   }; 의 경우 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용하게 됨
  // useCallback을 사용함으로써 컴포넌트가 처음 렌더링될 때만 함수를 생성함

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);
  //   const onInsert = (e) => {
  //     const nextList = list.concat(parseInt(number));
  //     setList(nextList);
  //     setNumber('');
  //   }; 를 수정한 것
  // number 혹은 list가 바뀌었을 때만 함수를 생성하게 됨

  // 함수 내부에서 상태 값에 의존해야할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜야 함
  // onChange의 경우 기존 값을 조회하지 않고 바로 설정하기 때문에 배열이 비어있어도 상관없지만, onInsert는 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열에 number와 list가 포함돼있어야 함

  const avg = useMemo(() => getAverage(list), [list]);

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
      </div>
    </div>
  );
};

export default Average2;
