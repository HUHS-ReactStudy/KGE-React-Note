import React, { useState } from 'react';
import axios from 'axios';

// yarn add axios 로 axios 라이브러리 설치

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=eef7a76de4a640d4b4d28b04892e40e7'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }; // async/await를 적용

  // const onClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };
  // axios.get 함수는 파라미터로 전달된 주소에 GET 요청을 함
  // 이에 대한 결과는 .then을 통해 비동기적으로 확인

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
    // 버튼을 누르면 API를 호출하고 이에 대한 응답을 컴포넌트 상태에 넣어서 보여줌
  );
};

export default App;
