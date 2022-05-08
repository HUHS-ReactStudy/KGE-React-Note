import { useLocation, useSearchParams } from 'react-router-dom';

// 쿼리스트링은 주로 키워드 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션을 전달할 때 사용함
// 쿼리스트링 문자열에서 ?를 지우고 &문자열로 분리한 뒤 key와 value를 파싱하는 작업을 해야 함 -> npm에서 qs나 querystring 패키지를 설치해 처리 가능
// 리액트 라우터에서 useSearchParams라는 Hook을 통해서도 파싱 가능

const About = () => {
  // const location = useLocation();
  // useLocation Hook은 location 객체를 반환하는데, 이 객체는 현재 사용자가 보고 있는 페이지의 정보를 지님
  // pathname(현재 주소의 경로), search(맨 앞의 ? 문자를 포함한 쿼리스트링 값), hash(주소의 #문자열 뒤의 값), state(페이지로 이동할 때 임의로 넣을 수 있는 상태 값), key(location 객체의 고유값) 같은 값들이 객체에 있음

  const [searchParams, setSearchParams] = useSearchParams();
  // useSearchParams는 배열 타입 값을 반환
  // 첫 번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체 반환, 두 번째 원소는 쿼리파라미터를 객체 형태로 업데이트할 수 있는 함수 반환
  // get 메서드를 통해 특정 쿼리파라미터를 조회
  // set 메서드를 통해 특정 쿼리파라미터 업데이트

  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  // 쿼리파라미터를 조회할 때 값은 무조건 문자열 타입이어야 함
  // true false 값을 넣는다면 값을 비교할 때 'true'와 같이 따옴표로 감싸서 비교하고,

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용하는 프로젝트</p>
      {/* <p>쿼리스트링: {location.search}</p> */}
      {/* 쿼리스트링은 location.search 값을 통해 조회 가능 */}

      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
