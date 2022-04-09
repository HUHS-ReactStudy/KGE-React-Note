import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  // useState 함수의 인자에는 상태의 초기값. 값의 형태는 자유.
  // message는 현재 상태, setMessage(세터 함수)는 상태를 바꾸어 주는 함수
  const [color, setColor] = useState('black');
  // 한 컴포넌트에서 useState를 여러 번 사용할 수 있음

  // state를 사용할 때, 배열이나 객체를 업데이트하는 법 -> 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 세터 함수를 통해 업데이트
  // 객체에 대한 사본을 만들 때는 spread 연산자 사용, 배열에 대한 사본을 만들 때는 배열의 내장 함수(filter, map 등) 사용
  // const object = { a: 1, b: 2, c: 3 };
  // const nextObject = { ...object, b: 3 }; // b값만 덮어쓰기

  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히가세요');

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      {/* 버튼 누르면 텍스트 색 변경됨 */}
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </>
  );
};

export default Say;
