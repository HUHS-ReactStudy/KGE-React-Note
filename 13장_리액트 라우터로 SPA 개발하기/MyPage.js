import { Navigate } from 'react-router-dom';

// Navigate 컴포넌트는 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동하고 싶을 때 사용하는 컴포넌트
// 예를 들어 사용자의 로그인이 필요한 페이지일 때 로그인 페이지로 이동하는 것

const MyPage = () => {
  const isLoggedIn = false; // 로그인 상태에 따라 true false 값이 바뀔 때

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" replace={true} />
      // isLoggedIn이 false라면 페이지가 로딩되는 순간 Login 페이지로 이동함
    );
  }

  return <div>마이페이지</div>;
};

export default MyPage;
