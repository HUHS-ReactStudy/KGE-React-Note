import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    }; // 기존 form의 내용을 복사한 뒤 원하는 값 덮어씌우기
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );

  // useState에 객체 사용 x, onChange에 e.target.name 사용 x
  //   const [username, setUsername] = useState('');
  //   const [message, setMessage] = useState('');

  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);

  //   const onClick = () => {
  //     alert(username + ': ' + message);
  //     setUsername('');
  //     setMessage('');
  //   };

  //   const onKeyPress = (e) => {
  //     if (e.key === 'Enter') {
  //       onClick();
  //     }
  //   };

  //   return (
  //     <>
  //       <h1>이벤트 연습</h1>
  //       <input
  //         type="text"
  //         name="username"
  //         placeholder="사용자명"
  //         value={username}
  //         onChange={onChangeUsername}
  //       ></input>
  //       <input
  //         type="text"
  //         name="message"
  //         placeholder="입력하세요"
  //         value={message}
  //         onChange={onChangeMessage}
  //         onKeyPress={onKeyPress}
  //       />
  //       <button onClick={onClick}>확인</button>
  //     </>
  //   );
};

export default EventPractice;
