import React, { useState, useEffect } from 'react';

// useEffect -> 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있음
// 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태

// 하나의 useState 함수는 하나의 상태 값만 관리할 수 있음
// 컴포넌트에서는 useState를 여러 번 사용해서 상태를 여러 개 관리할 수 있음

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료되었습니다');
    console.log({ name, nickname });
  }); // 콘솔 내용 -> 처음 렌더링되었을 때 뜨고, 이후에 인풋의 내용을 변경할 때마다 뜸

  useEffect(() => {
    console.log('마운트될 때만 실행됩니다');
  }, []);
  // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 빈 배열을 넣으면 됨
  // 콘솔 내용 -> 컴포넌트가 처음 렌더링될 때만 뜸

  useEffect(() => {
    console.log('effect');
    console.log(name);

    return () => {
      console.log('cleanup');
      console.log(name);
    }; // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 뒷정리(cleanup) 함수를 반환해야 함
  }, [name]);
  // 특정 값이 변경될 때만 함수를 실행하고 싶다면, useEffect의 두 번째 파라미터로 전달되는 배열 안에 특정 값을 넣음
  // 배열 안에는 useState를 통해 관리되고 있는 상태를 넣어도 되고, props로 전달받은 값을 넣어도 됨

  // 콘솔 내용 -> 컴포넌트가 나타날 때 effect가 뜨고, 사라질 때 cleanup이 뜸
  //              인풋 내용을 변경하면, 렌더링될 때마다 claenup이 뜸. 그리고 뒷정리 함수가 호출될 때는 업데이트되기 직전의 값만 보여줌.
  // 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 빈 배열을 넣으면 됨

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>

        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
